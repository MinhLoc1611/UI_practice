import { useMemo } from "react";
import { Bar } from "@visx/shape";
import { Group } from "@visx/group";
import { scaleBand, scaleLinear } from "@visx/scale";
import { AxisBottom, AxisLeft } from "@visx/axis";
import { defaultStyles, useTooltip, TooltipWithBounds } from "@visx/tooltip";
import {localPoint} from '@visx/event'
import {TouchEvent, MouseEvent} from 'react'
import { BarType } from './barType'

const data = [
  { day: "Mon", data: 50 },
  { day: "Tue", data: 20 },
  { day: "Wed", data: 10 },
  { day: "Thu", data: 20 },
  { day: "Fri", data: 50 },
  { day: "Sat", data: 10 },
  { day: "Sun", data: 40 },
];

const verticalMargin = 70;
const background = "#f50057";
const axisColor = "#fff";

// accessors
const getXValue = (d: BarType) => d.day;
const getYValue = (d: BarType) => d.data
export type BarsProps = {
  width: number;
  height: number;
};

const tooltipStyles = {
  ...defaultStyles,
  borderRadius: 4,
  background: "black",
  color: "white",
};

export default function Example({ width, height }: BarsProps) {
  // bounds
  const xMax = width;
  const yMax = height - verticalMargin;

  const {
    showTooltip,
    hideTooltip,
    tooltipData,
    tooltipLeft = 0,
    tooltipTop = 0,
  } = useTooltip<BarType>();

  // scales, memoize for performance
  const xScale = useMemo(
    () =>
      scaleBand<string>({
        range: [30, xMax - 20],
        round: true,
        domain: data.map(getXValue),
        padding: 0.7,
      }),
    [xMax]
  );
  const yScale = useMemo(
    () =>
      scaleLinear<number>({
        range: [yMax, 0],
        round: true,
        domain: [0, Math.max(...data.map(getYValue)) + 10],
      }),
    [yMax]
  );

  return width < 10 ? null : (
    <>
      <svg width={width} height={height}>
        <rect
          x={0}
          y={0}
          width={width}
          height={height}
          fill={background}
          rx={14}
        />
        <Group top={verticalMargin / 2}>
          {data.map((d) => {
            const letter = getXValue(d);
            const barWidth = xScale.bandwidth();
            const barHeight = yMax - (yScale(getYValue(d)) ?? 0);
            const barX = xScale(letter);
            const barY = yMax - barHeight;
            return (
              <Bar
                key={`bar-${letter}`}
                x={barX}
                y={barY}
                width={barWidth}
                height={barHeight}
                fill="white"
                onMouseMove={(e:TouchEvent<SVGRectElement> | MouseEvent<SVGRectElement>)=>{
                    const point = localPoint(e);
                    if(!point) return;

                    showTooltip({
                        tooltipData:d,
                        tooltipLeft:point.x,
                        tooltipTop:point.y
                    })
                }}
                onMouseLeave={()=> hideTooltip()}
              />
            );
          })}
          <AxisLeft
            hideTicks
            scale={yScale}
            numTicks={2}
            stroke={axisColor}
            tickStroke={axisColor}
            tickLabelProps={{
              fill: axisColor,
              fontSize: 11,
              textAnchor: "end",
              dy: "0.33em",
            }}
            left={30}
          />
          <AxisBottom
            hideTicks
            top={yMax}
            scale={xScale}
            stroke={axisColor}
            tickStroke={axisColor}
            tickLabelProps={{
              fill: axisColor,
              fontSize: 11,
              textAnchor: "middle",
            }}
          />
        </Group>
      </svg>
      {tooltipData ? (
        <TooltipWithBounds key={Math.random()} top={tooltipTop} left={tooltipLeft} style={tooltipStyles}>
        <b>{getXValue(tooltipData)}</b> : {getYValue(tooltipData)}
        </TooltipWithBounds>
      ): null}
    </>
  );
}
