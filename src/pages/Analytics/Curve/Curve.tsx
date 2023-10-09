import { CurveType } from "./curveType";
import { defaultStyles, useTooltip, TooltipWithBounds } from "@visx/tooltip";
import { scaleTime, scaleLinear, scaleBand } from "@visx/scale";
import { extent, bisector } from "@visx/vendor/d3-array";
import { Group } from "@visx/group";
import { LinePath, Bar } from "@visx/shape";
import { MarkerCircle } from "@visx/marker";
import { AxisBottom, AxisLeft } from "@visx/axis";
import { GridRows } from "@visx/grid";
import { TouchEvent, MouseEvent } from "react";
import { localPoint } from "@visx/event";

const data = [
  { month: 4, data: 40, name: "Apr" },
  { month: 5, data: 20, name: "May" },
  { month: 6, data: 300, name: "Jun" },
  { month: 7, data: 320, name: "Jul" },
  { month: 8, data: 480, name: "Aug" },
  { month: 9, data: 370, name: "Sep" },
  { month: 10, data: 200, name: "Oct" },
  { month: 11, data: 210, name: "Nov" },
  { month: 12, data: 500, name: "Dec" },
];

const getXValue = (d: CurveType) => d.month;
const getYValue = (d: CurveType) => d.data;
const getXAxis = (d: CurveType) => d.name;

const bisect = bisector<CurveType, Date>(getXValue).left;

const tooltipStyles = {
  ...defaultStyles,
  borderRadius: 4,
  background: "#f50057",
  color: "white",
};

const axisColor = "#fff";

export type CurveProps = {
  width: number;
  height: number;
  background: string;
};

export default function Curve({ width, height, background }: CurveProps) {
  const xMax = width;
  const yMax = height - 40;

  const {
    showTooltip,
    hideTooltip,
    tooltipData,
    tooltipLeft = 0,
    tooltipTop = 0,
  } = useTooltip<CurveType>();

  const xScale = scaleTime<number>({
    range: [40, xMax - 30],
    domain: extent(data, getXValue) as unknown as [Date, Date],
  });
  const yScale = scaleLinear<number>({
    range: [yMax, 30],
    domain: [0, Math.max(...data.map(getYValue)) + 100],
  });

  const xScaleAxis = scaleBand<string>({
    range: [20, xMax - 10],
    round: true,
    domain: data.map(getXAxis),
  });

  return (
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
        <MarkerCircle id="marker-circle" fill="white" size={4} refX={2} />
        <Group>
          <GridRows
            scale={yScale}
            width={xMax - 60}
            height={yMax}
            stroke="white"
            left={35}
            strokeOpacity={0.3}
            strokeDasharray="6"
            numTicks={2}
          />
          <LinePath<CurveType>
            data={data}
            x={(d) => xScale(getXValue(d)) ?? 0}
            y={(d) => yScale(getYValue(d)) ?? 0}
            stroke="white"
            strokeWidth={1}
            markerMid="url(#marker-circle)"
            markerStart="url(#marker-circle)"
            markerEnd="url(#marker-circle)"
          />
          <AxisLeft
            hideTicks
            scale={yScale}
            numTicks={2}
            stroke={"none"}
            tickLabelProps={{
              fill: axisColor,
              fontSize: 11,
              textAnchor: "end",
              dy: "0.33em",
            }}
            left={40}
          />
          <AxisBottom
            hideTicks
            top={yMax}
            scale={xScaleAxis}
            stroke={"none"}
            tickLabelProps={{
              fill: axisColor,
              fontSize: 11,
              textAnchor: "middle",
            }}
          />
        </Group>
        <Group>
          <Bar
            width={width}
            height={height}
            fill="transparent"
            onMouseMove={(
              e: TouchEvent<SVGRectElement> | MouseEvent<SVGRectElement>
            ) => {
              const { x } = localPoint(e) || { x: 0 };
              const x0 = xScale.invert(x);

              const index = bisect(data, x0, 1);

              const d0 = data[index - 1];
              const d1 = data[index];

              let d = d0;
              if (d1 && getXValue(d1)) {
                d =
                  x0.valueOf() - getXValue(d0).valueOf() >
                  getXValue(d1).valueOf() - x0.valueOf()
                    ? d1
                    : d0;
              }

              showTooltip({
                tooltipData:d,
                tooltipLeft:x,
                tooltipTop:yScale(getYValue(d))
              })
            }}
            onMouseLeave={() => hideTooltip()}
          />
        </Group>
      </svg>
      {tooltipData ? (
        <TooltipWithBounds
          key={Math.random()}
          top={tooltipTop}
          left={tooltipLeft}
          style={tooltipStyles}
        >
          <b>{getXAxis(tooltipData)}</b> : {getYValue(tooltipData)}
        </TooltipWithBounds>
      ) : null}
    </>
  );
}
