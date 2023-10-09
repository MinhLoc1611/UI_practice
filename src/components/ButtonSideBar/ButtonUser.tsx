import { Box, Typography, Avatar } from "@mui/material";
import {ExpandMore} from '@mui/icons-material'

export default function ButtonUser() {
  return (
    <Box
        sx={{
          p: 1,
          borderBottom: 1,
          display: "flex",
          justifyContent: "space-between",
        }}
      >
        <Typography
          sx={{
            color: "grey.400",
            display: "flex",
            alignItems: "center",
            fontSize: "14px",
          }}
        >
          <Avatar src="./imgs/avatar.jpg" sx={{width:'30px',height:'30px', mr:1}} /> Brookly Alice
        </Typography>
        <Box>
          <ExpandMore />
        </Box>
      </Box>
  )
}
