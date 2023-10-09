import { Box, Typography } from "@mui/material";


export default function Footer() {
  return (
    <Box sx={{display:'flex', justifyContent:'space-between', mx:'auto', m:4, color:'text.secondary'}}>
        <Box>
            <Typography>
            &copy; 2022, made with <span style={{color:'red'}} >&hearts;</span> by <span style={{fontWeight:600}}>Creative Tim</span> for a better web
            </Typography>  
        </Box>
        <Box sx={{display:'flex', justifyContent:'space-around', width:'30%'}}>
            <Typography >Creative Tim</Typography>
            <Typography >About Us</Typography>
            <Typography >Blog</Typography>
            <Typography >License</Typography>
        </Box>
    </Box>
  )
}
