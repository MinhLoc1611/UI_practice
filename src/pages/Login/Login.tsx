import {
  Box,
  Button,
  FormControlLabel,
  Grid,
  Switch,
  TextField,
  Typography,
} from "@mui/material";
import { ExpandMore } from "@mui/icons-material";

export default function Login() {
  return (
    <Box bgcolor={"background.default"}>
      <Box sx={{p:2, px: "auto" }}>
        <Box
          bgcolor={"background.paper"}
          sx={{
            position: "fixed",
            width: "85%",
            top: "3%",
            left: "6.5%",
            p: 1.5,
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            borderRadius: "10px",
          }}
        >
          <Typography>Material Dashboard 2 PRO</Typography>
          <Box sx={{ display: "flex" }}>
            <Typography color={"text.secondary"} sx={{ cursor: "pointer" }}>
              Pages <ExpandMore sx={{ transform: "translateY(25%)" }} />
            </Typography>
            <Typography color={"text.secondary"} sx={{ cursor: "pointer", px: 3 }}>
              Authentication{" "}
              <ExpandMore sx={{ transform: "translateY(25%)" }} />
            </Typography>
            <Typography color={"text.secondary"} sx={{ cursor: "pointer" }}>
              Applications <ExpandMore sx={{ transform: "translateY(25%)" }} />
            </Typography>
            <Typography color={"text.secondary"} sx={{ cursor: "pointer", px: 3 }}>
              Ecommerce <ExpandMore sx={{ transform: "translateY(25%)" }} />
            </Typography>
            <Typography color={"text.secondary"} sx={{ cursor: "pointer" }}>
              Docs <ExpandMore sx={{ transform: "translateY(25%)" }} />
            </Typography>
          </Box>
          <Button variant="contained" color="secondary">
            BUY NOW
          </Button>
        </Box>
        <Grid container>
          <Grid item xs={6}>
            <img
              style={{ width: "100%", height: "96vh" }}
              alt="image"
              src="./imgs/bgLogin.jpeg"
            />
          </Grid>
          <Grid item xs={6}>
            <Box
              sx={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                height: "90%",
              }}
            >
              <Box sx={{ textAlign: "center" }}>
                <Typography variant="h5">Sign In</Typography>
                <Typography color={"text.secondary"} sx={{ mb: 5 }}>
                  Enter your email and password to Sign In
                </Typography>
                <form>
                  <TextField
                    sx={{ bgcolor: "background.paper" }}
                    fullWidth
                    variant="outlined"
                    name="email"
                    label="Email"
                  />
                  <TextField
                    sx={{ bgcolor: "background.paper", my: 2 }}
                    fullWidth
                    variant="outlined"
                    name="password"
                    label="Current password"
                  />
                  <Box color={"text.secondary"} sx={{ textAlign: "left", mb: 5 }}>
                    <FormControlLabel
                      control={<Switch />}
                      label="Remerber me"
                    />
                  </Box>
                  <Button fullWidth variant="contained" color="secondary">
                    SIGN IN
                  </Button>
                </form>
                <Box sx={{ mt: 3, display: "flex", justifyContent: "center" }}>
                  <Typography color={"text.secondary"}>
                    Don't have an account?{" "}
                  </Typography>
                  <Typography sx={{ cursor: "pointer" }} color={"secondary"}>
                    Sign Up
                  </Typography>
                </Box>
              </Box>
            </Box>
          </Grid>
        </Grid>
      </Box>
    </Box>
  );
}
