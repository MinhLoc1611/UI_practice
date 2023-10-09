import { Box, Toolbar } from "@mui/material";
import HeaderBar from "../../components/HeaderBar";
import { Outlet } from "react-router-dom";
import SideBar from "../../components/SideBar";
import Footer from "../../components/Footer";

export default function HomePage() {
  return (
    <Box sx={{ bgcolor: "background.default", p: 3 }}>
      <Box display={"flex"}>
        <Box sx={{width:'250px', bgcolor:'common.black', borderRadius:'16px', p:2, pb:10, color:'common.white', height:'100%'}}>
            <SideBar/>
        </Box>
        <Box sx={{width:'calc(100% - 250px)'}}>
          <HeaderBar />
          <Toolbar />
          <Outlet />
          <Footer/>
        </Box>
      </Box>
    </Box>
  );
}
