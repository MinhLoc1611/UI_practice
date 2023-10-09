import { Avatar, Box, Typography } from "@mui/material";
import {ExpandMore} from '@mui/icons-material'
import { MyAvatar } from "../SideBar";

export default function ButtonError() {
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
          <Avatar sx={MyAvatar}>E</Avatar> Error
        </Typography>
        <Box>
          <ExpandMore/>
        </Box>
      </Box>
  )
}