import { Box, Typography } from "@mui/material";
import {ExpandMore, ShoppingBasket} from '@mui/icons-material'
import { MyIcon } from "../SideBar";

export default function ButtonEcommerce() {
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
          <ShoppingBasket sx={MyIcon} /> Ecommerce
        </Typography>
        <Box>
          <ExpandMore/>
        </Box>
      </Box>
  )
}