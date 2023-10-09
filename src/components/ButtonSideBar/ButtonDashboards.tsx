import { Avatar, Box, Typography } from "@mui/material";
import { Dashboard, ExpandLess, ExpandMore } from "@mui/icons-material";
import React from "react";
import { NavLink } from "react-router-dom";
import {
  BoxClose,
  BoxOpen,
  MyAvatar,
  MyIcon,
  MyNavLink,
  MyNavLinkActive,
} from "../SideBar";

export default function ButtonDashboards() {
  const [open, setOpen] = React.useState(false);
  const handleClick = () => {
    setOpen(!open);
  };
  return (
    <>
      <Box
        onClick={() => {
          handleClick();
        }}
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
          <Dashboard sx={MyIcon} /> Dashboards
        </Typography>
        <Box>
            {open ? <ExpandLess/> : <ExpandMore/>}
        </Box>
      </Box>
      <Box sx={open ? BoxOpen : BoxClose}>
        <NavLink
          style={({ isActive }) => {
            return isActive ? MyNavLinkActive : MyNavLink;
          }}
          to={"analytics"}
        >
          <Avatar sx={MyAvatar}>A</Avatar> Analytics
        </NavLink>
        <NavLink style={MyNavLink} to={""}>
          <Avatar sx={MyAvatar}>S</Avatar> Smart Home
        </NavLink>
      </Box>
    </>
  );
}
