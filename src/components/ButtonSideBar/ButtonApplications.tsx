import { Box, Typography } from "@mui/material";
import {Apps, ExpandMore} from '@mui/icons-material'
import { MyIcon } from "../SideBar";

export default function ButtonApplications() {
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
          <Apps sx={MyIcon} /> Applications
        </Typography>
        <Box>
          <ExpandMore/>
        </Box>
      </Box>
  )
}