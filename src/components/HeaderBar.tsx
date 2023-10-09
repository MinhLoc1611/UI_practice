import {
  Box,
  IconButton,
  TextField,
  Typography,
  Breadcrumbs,
  Link,
} from "@mui/material";
import {
  AccountCircle,
  Home,
  Menu,
  Notifications,
  Settings,
} from "@mui/icons-material";

export default function HeaderBar() {
  return (
    <Box sx={{ height: "42px", color: "text.secondary", mx: 4 }}>
      <Box sx={{ display: "flex", justifyContent: "space-between" }}>
        <Box sx={{ display: "flex", alignItems: "center" }}>
          <Box>
            <Breadcrumbs aria-label="breadcrumb">
              <Link underline="hover" color="inherit" href="/">
                <Home />
              </Link>
              <Link
                underline="hover"
                color="inherit"
                href="/material-ui/getting-started/installation/"
              >
                Pages
              </Link>
              <Typography>Analytics</Typography>
            </Breadcrumbs>
            <Typography color={"text.primary"}>Analytics</Typography>
          </Box>
          <Box ml={10}>
            <IconButton edge="start" color="inherit">
              <Menu />
            </IconButton>
          </Box>
        </Box>
        <Box sx={{ display: "flex" }}>
          <TextField label="Search here" />
          <IconButton edge="start" color="inherit" sx={{ mx: 1 }}>
            <AccountCircle />
          </IconButton>
          <IconButton edge="start" color="inherit" sx={{ mx: 1 }}>
            <Settings />
          </IconButton>
          <IconButton edge="start" color="inherit" sx={{ mx: 1, position:'relative' }}>
            <Notifications />
            <Typography sx={{fontSize:'10px', position:'absolute', p:'2px 8px 2px 8px',backgroundColor:'#f50057', borderRadius:4, color:'#fff', top:'23%', right:'-10%' }}>11</Typography>
          </IconButton>
        </Box>
      </Box>
    </Box>
  );
}
