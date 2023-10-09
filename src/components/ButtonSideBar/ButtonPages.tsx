import { Box, Typography } from "@mui/material";
import {ExpandMore, Pageview} from '@mui/icons-material'
import { MyIcon } from "../SideBar";

export default function ButtonPages() {
  return (
    <Box
        sx={{
          p: 1,
          display: "flex",
          justifyContent: "space-between",
          cursor: "pointer",
        }}
      >
        <Typography
          sx={{
            color: "common.white",
            display: "flex",
            alignItems: "center",
            fontSize: "14px",
          }}
        >
          <Pageview sx={MyIcon} /> Pages
        </Typography>
        <Box>
          <ExpandMore/>
        </Box>
      </Box>
  )
}
