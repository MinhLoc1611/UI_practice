import { Box, Typography } from "@mui/material";
import {Article, ExpandMore} from '@mui/icons-material'
import { MyIcon } from "../SideBar";

export default function ButtonBasic() {
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
          <Article sx={MyIcon} /> Basic
        </Typography>
        <Box>
          <ExpandMore/>
        </Box>
      </Box>
  )
}