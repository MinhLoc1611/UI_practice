import { Box, Typography } from "@mui/material";
import {AssignmentTurnedIn, ExpandMore} from '@mui/icons-material'
import { MyIcon } from "../SideBar";

export default function ButtonAuthentication() {
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
          <AssignmentTurnedIn sx={MyIcon} /> Authentication
        </Typography>
        <Box>
          <ExpandMore/>
        </Box>
      </Box>
  )
}