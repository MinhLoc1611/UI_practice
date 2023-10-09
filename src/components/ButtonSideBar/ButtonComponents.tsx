import { Box, Typography } from "@mui/material";
import { ExpandMore, SnippetFolder} from '@mui/icons-material'
import { MyIcon } from "../SideBar";

export default function ButtonComponent() {
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
          <SnippetFolder sx={MyIcon} /> Component
        </Typography>
        <Box>
          <ExpandMore/>
        </Box>
      </Box>
  )
}