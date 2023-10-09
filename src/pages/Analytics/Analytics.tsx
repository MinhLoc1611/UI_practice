import {
  AccessTime,
  AccountCircle,
  BarChart,
  ExpandLess,
  ExpandMore,
  PersonAdd,
  Store,
} from "@mui/icons-material";
import {
  Avatar,
  Box,
  Grid,
  Typography,
  Table,
  TableHead,
  TableRow,
  TableCell,
  TableBody,
  Paper,
  Button,
} from "@mui/material";
import Bars from "./Bars/Bars";
import ParentSize from "@visx/responsive/lib/components/ParentSize";
import Curve from "./Curve/Curve";

function createData(
  img: string,
  name: string,
  orders: number,
  value: number,
  adsSpent: number,
  refunds: number,
  flag: boolean
) {
  return { img, name, orders, value, adsSpent, refunds, flag };
}

const rows = [
  createData(
    "./imgs/avatar.jpg",
    "Nike v22 Running",
    8232,
    130992,
    9500,
    13,
    true
  ),
  createData(
    "./imgs/avatar.jpg",
    "Business Kit (Mug + Notebook)",
    12821,
    80250,
    4200,
    40,
    true
  ),
  createData("./imgs/avatar.jpg", "Black Chair", 2421, 40600, 9430, 54, false),
  createData(
    "./imgs/avatar.jpg",
    "Wireless Charger",
    5921,
    91300,
    7364,
    5,
    true
  ),
  createData(
    "./imgs/avatar.jpg",
    "Mountain Trip Kit (Camera + Backpack)",
    921,
    140925,
    20531,
    121,
    false
  ),
];

const TableCellHeader = {
  color: "text.secondary",
  fontSize: "12px",
  fontWeight: 600,
};

const bgDailysales = '#2F7C31'
const bgCompletedTasks = 'black'

export default function Analytics() {
  return (
    <Box m={3}>
      <Grid container spacing={2}>
        <Grid item xs={3}>
          <Paper
            sx={{
              borderRadius: 3,
            }}
            elevation={3}
          >
            <Box
              sx={{
                p: 2,
                display: "flex",
                justifyContent: "space-between",
                borderBottom: "1px dashed silver",
              }}
            >
              <Box sx={{ position: "relative" }}>
                <Button
                  variant="contained"
                  sx={{
                    width: 40,
                    height: 60,
                    borderRadius: 3,
                    position: "absolute",
                    top: "-70%",
                    bgcolor: "common.black",
                    ":hover": {
                      bgcolor: "grey.800",
                    },
                  }}
                >
                  <AccountCircle />
                </Button>
              </Box>
              <Box textAlign={"right"}>
                <Typography color={"text.disabled"}>Bookings</Typography>
                <Typography>281</Typography>
              </Box>
            </Box>
            <Typography color={"text.disabled"} p={2}>
              <span style={{ color: "green" }}>+55%</span> than last week
            </Typography>
          </Paper>
        </Grid>
        <Grid item xs={3}>
          <Paper
            sx={{
              borderRadius: 3,
            }}
            elevation={3}
          >
            <Box
              sx={{
                p: 2,
                display: "flex",
                justifyContent: "space-between",
                borderBottom: "1px dashed silver",
              }}
            >
              <Box sx={{ position: "relative" }}>
                <Button
                  variant="contained"
                  color="secondary"
                  sx={{
                    width: 40,
                    height: 60,
                    borderRadius: 3,
                    position: "absolute",
                    top: "-70%",
                  }}
                >
                  <BarChart />
                </Button>
              </Box>
              <Box textAlign={"right"}>
                <Typography color={"text.disabled"}>Today's Users</Typography>
                <Typography>2,300</Typography>
              </Box>
            </Box>
            <Typography color={"text.disabled"} p={2}>
              <span style={{ color: "green" }}>+3%</span> than last week
            </Typography>
          </Paper>
        </Grid>
        <Grid item xs={3}>
          <Paper
            sx={{
              borderRadius: 3,
            }}
            elevation={3}
          >
            <Box
              sx={{
                p: 2,
                display: "flex",
                justifyContent: "space-between",
                borderBottom: "1px dashed silver",
              }}
            >
              <Box sx={{ position: "relative" }}>
                <Button
                  variant="contained"
                  color="success"
                  sx={{
                    width: 40,
                    height: 60,
                    borderRadius: 3,
                    position: "absolute",
                    top: "-70%",
                  }}
                >
                  <Store />
                </Button>
              </Box>
              <Box textAlign={"right"}>
                <Typography color={"text.disabled"}>Revenue</Typography>
                <Typography>34k</Typography>
              </Box>
            </Box>
            <Typography color={"text.disabled"} p={2}>
              <span style={{ color: "green" }}>+1%</span> than yesterday
            </Typography>
          </Paper>
        </Grid>
        <Grid item xs={3}>
          <Paper
            sx={{
              borderRadius: 3,
            }}
            elevation={3}
          >
            <Box
              sx={{
                p: 2,
                display: "flex",
                justifyContent: "space-between",
                borderBottom: "1px dashed silver",
              }}
            >
              <Box sx={{ position: "relative" }}>
                <Button
                  variant="contained"
                  color="info"
                  sx={{
                    width: 40,
                    height: 60,
                    borderRadius: 3,
                    position: "absolute",
                    top: "-70%",
                  }}
                >
                  <PersonAdd />
                </Button>
              </Box>
              <Box textAlign={"right"}>
                <Typography color={"text.disabled"}>Followers</Typography>
                <Typography>+91</Typography>
              </Box>
            </Box>
            <Typography color={"text.disabled"} p={2}>
              Just updated
            </Typography>
          </Paper>
        </Grid>
      </Grid>
      <Grid mt={4} container spacing={2}>
        <Grid item xs={4}>
          <Paper
            sx={{
              borderRadius: 3,
            }}
            elevation={3}
          >
            <Box
              px={2}
              position={"relative"}
              sx={{ width: { lg: 320, xl: 350 }, height: { lg: 160, xl: 190 } }}
            >
              <Box
                sx={{
                  borderRadius: 3,
                  position: "absolute",
                  top: "-15%",
                  width: "100%",
                  height: "100%",
                }}
              >
                <ParentSize>
                  {({ width, height }) => (
                    <Bars width={width} height={height} />
                  )}
                </ParentSize>
              </Box>
            </Box>
            <Box mx={2} pb={2} color={"text.disabled"} borderBottom={1}>
              <Typography color={"common.black"} fontWeight={600}>
                Website Views
              </Typography>
              <Typography>Last Campaign Performance</Typography>
            </Box>
            <Box
              sx={{
                p: 2,
                color: "text.disabled",
                display: "flex",
                alignItems: "center",
              }}
            >
              <AccessTime sx={{ fontSize: 14, mr: 0.5 }} />
              <Typography>campaign sent 2 days ago</Typography>
            </Box>
          </Paper>
        </Grid>
        <Grid item xs={4}>
          <Paper
            sx={{
              borderRadius: 3,
            }}
            elevation={3}
          >
            <Box
              px={2}
              position={"relative"}
              sx={{ width: { lg: 320, xl: 350 }, height: { lg: 160, xl: 190 } }}
            >
              <Box
                sx={{
                  borderRadius: 3,
                  position: "absolute",
                  top: "-15%",
                  width: "100%",
                  height: "100%",
                }}
              >
                <ParentSize>
                  {({ width, height }) => (
                    <Curve width={width} height={height} background={bgDailysales} />
                  )}
                </ParentSize>
              </Box>
            </Box>
            <Box mx={2} pb={2} color={"text.disabled"} borderBottom={1}>
              <Typography color={"common.black"} fontWeight={600}>
                Daily Sales
              </Typography>
              <Typography>(+15%) increase in today sales</Typography>
            </Box>
            <Box
              sx={{
                p: 2,
                color: "text.disabled",
                display: "flex",
                alignItems: "center",
              }}
            >
              <AccessTime sx={{ fontSize: 14, mr: 0.5 }} />
              <Typography>updated 4 min ago</Typography>
            </Box>
          </Paper>
        </Grid>
        <Grid item xs={4}>
          <Paper
            sx={{
              borderRadius: 3,
            }}
            elevation={3}
          >
            <Box
              px={2}
              position={"relative"}
              sx={{ width: { lg: 320, xl: 350 }, height: { lg: 160, xl: 190 } }}
            >
              <Box
                sx={{
                  borderRadius: 3,
                  position: "absolute",
                  top: "-15%",
                  width: "100%",
                  height: "100%",
                }}
              >
                <ParentSize>
                  {({ width, height }) => (
                    <Curve width={width} height={height} background={bgCompletedTasks} />
                  )}
                </ParentSize>
              </Box>
            </Box>
            <Box mx={2} pb={2} color={"text.disabled"} borderBottom={1}>
              <Typography color={"common.black"} fontWeight={600}>
                Completed Tasks
              </Typography>
              <Typography>Last Campaign Performance</Typography>
            </Box>
            <Box
              sx={{
                p: 2,
                color: "text.disabled",
                display: "flex",
                alignItems: "center",
              }}
            >
              <AccessTime sx={{ fontSize: 14, mr: 0.5 }} />
              <Typography>just updated</Typography>
            </Box>
          </Paper>
        </Grid>
      </Grid>
      <Paper
        elevation={3}
        sx={{
          borderRadius: 3,
          p: 2,
          my: 3,
        }}
      >
        <Typography>Top selling Products</Typography>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell sx={TableCellHeader}>PRODUCT</TableCell>
              <TableCell sx={TableCellHeader}>VALUE</TableCell>
              <TableCell sx={TableCellHeader} align="right">
                ADS SPENT
              </TableCell>
              <TableCell sx={TableCellHeader} align="right">
                REFUNDS
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.map((row) => (
              <TableRow
                key={row.name}
                sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
              >
                <TableCell component="th" scope="row">
                  <Box sx={{ display: "flex", alignItems: "center" }}>
                    <Avatar sx={{ height: 50, width: 50 }} src={row.img} />
                    <Box ml={2}>
                      <Typography fontWeight={600}>{row.name}</Typography>
                      <Box display={"flex"}>
                        <Typography sx={{ color: "green", mr: 1 }}>
                          {row.orders.toLocaleString()}
                        </Typography>
                        <Typography color={"text.secondary"}>orders</Typography>
                      </Box>
                    </Box>
                  </Box>
                </TableCell>
                <TableCell sx={{ color: "text.secondary" }}>
                  ${row.value.toLocaleString()}
                </TableCell>
                <TableCell sx={{ color: "text.secondary" }} align="right">
                  ${row.adsSpent.toLocaleString()}
                </TableCell>
                <TableCell sx={{ color: "text.secondary" }} align="right">
                  {row.refunds}{" "}
                  {row.flag ? (
                    <ExpandMore
                      color="success"
                      sx={{ transform: "translateY(25%)" }}
                    />
                  ) : (
                    <ExpandLess
                      color="error"
                      sx={{ transform: "translateY(25%)" }}
                    />
                  )}
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </Paper>
    </Box>
  );
}
