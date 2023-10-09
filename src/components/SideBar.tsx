import { DensitySmall, KeyboardAlt } from "@mui/icons-material";
import { Avatar, Box, Typography } from "@mui/material";
import ButtonDashboards from "./ButtonSideBar/ButtonDashboards";
import ButtonUser from "./ButtonSideBar/ButtonUser";
import ButtonPages from "./ButtonSideBar/ButtonPages";
import ButtonApplications from "./ButtonSideBar/ButtonApplications";
import ButtonEcommerce from "./ButtonSideBar/ButtonEcommerce";
import ButtonAuthentication from "./ButtonSideBar/ButtonAuthentication";
import ButtonError from "./ButtonSideBar/ButtonError";
import { NavLink } from "react-router-dom";
import ButtonBasic from "./ButtonSideBar/ButtonBasic";
import ButtonComponent from "./ButtonSideBar/ButtonComponents";

export const MyIcon = {
  mr: 2,
  width: "24px",
  height: "24px",
};

export const MyAvatar = {
  mr: 2,
  width: "24px",
  height: "24px",
  bgcolor: "transparent",
  fontSize: "14px",
};

export const MyNavLink = {
  color: "white",
  display: "flex",
  alignItems: "center",
  padding: 8,
  fontSize: "14px",
  
};

export const MyNavLinkActive = {
  color: "white",
  display: "flex",
  alignItems: "center",
  padding: 8,
  fontSize: "14px",
  backgroundColor: "#f50057",
};

export const BoxOpen = {
  color: "common.white",
  pb: 1,
};

export const BoxClose = {
  pb: 1,
  color: "common.white",
  display: "none",
};

export default function SideBar() {
  return (
    <Box>
      <Typography
        sx={{ fontSize: "14px", pb: 2, borderBottom: 1, textAlign: "center" }}
      >
        <KeyboardAlt /> Material Dashboard 2 PRO
      </Typography>
      <ButtonUser />
      <ButtonDashboards />
      <Typography sx={{ fontSize: "14px", my: 1 }}>PAGES</Typography>
      <ButtonPages />
      <ButtonApplications />
      <ButtonEcommerce />
      <ButtonAuthentication />
      <ButtonError />
      <Box borderBottom={1} sx={BoxOpen}>
        <NavLink style={MyNavLink} to={""}>
          <Avatar sx={MyAvatar}>B</Avatar> Error 404
        </NavLink>
        <NavLink style={MyNavLink} to={""}>
          <Avatar sx={MyAvatar}>C</Avatar> Error 500
        </NavLink>
      </Box>
      <Typography sx={{ fontSize: "14px", my: 1 }}>DOCS</Typography>
      <ButtonBasic />
      <ButtonComponent />
      <Box sx={BoxOpen}>
        <NavLink style={MyNavLink} to={""}>
          <DensitySmall sx={MyIcon} /> Changelog
        </NavLink>
      </Box>
    </Box>
  );
}
