import { Box, SxProps, Typography } from "@mui/material"
import ContactUs from "../StayConnectedContainer/ContactUs";

export default function Footer(props: { sx?: SxProps }) {
    const today = new Date()
    const year = today.getFullYear();
    return (
        <Box sx={{ ...props.sx, display: 'flex', width: '100%', height: '75px', padding: '30px', alignItems: 'center', justifyContent: 'center' }}>
            <Typography style={{ fontSize: "18px", flexGrow: 1 }}>&copy; {year} App Dev Club</Typography>
            <img src="../logo256.png" style={{ maxHeight: "50px" }} />
            <ContactUs sx={{ justifyContent: 'end' }} />
        </Box>
    );
}