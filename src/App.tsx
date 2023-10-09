import { ThemeProvider, createTheme } from "@mui/material";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "./pages/Login/Login";
import { pink } from "@mui/material/colors";
import Analytics from "./pages/Analytics/Analytics";
import HomePage from "./pages/HomPage/HomePage";

function App() {
  const theme = createTheme({
    palette: {
      secondary: pink,
      background: {
        default: "#F1F2F5",
      },
    },
  });

  return (
    <ThemeProvider theme={theme}>
      <BrowserRouter>
        <Routes>
          <Route path="login" element={<Login />} />
          <Route path="" element={<HomePage />}>
            <Route path="analytics" element={<Analytics />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
