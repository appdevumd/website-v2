import { Box, SxProps, Typography } from "@mui/material"
import { Instagram } from "@mui/icons-material";
import { LinkedIn } from "@mui/icons-material";
import { GitHub } from "@mui/icons-material";
import { Email } from "@mui/icons-material";
import { BiLogoDiscord } from "react-icons/bi";

export default function Footer(props: { sx?: SxProps }) {
    const today = new Date()
    const year = today.getFullYear();
    return (
        <Box sx={{ ...props.sx, display: 'flex', width: '100%', height: '75px', padding: '30px', alignItems: 'center', justifyContent: 'center' }}>
            <Typography style={{ fontSize: "18px", flexGrow: 1 }}>&copy; {year} App Dev Club</Typography>
            <img src="../public/logo256.png" style={{ maxHeight: "50px" }} />
            <Box sx={{ display: 'flex', gap: '10px', flexGrow: 1, justifyContent: 'end' }}>
                <Instagram style={{ cursor: 'pointer', verticalAlign: "text-bottom", fontSize: "22px" }}></Instagram>
                <LinkedIn style={{ cursor: 'pointer', verticalAlign: "text-bottom", fontSize: "22px" }}></LinkedIn>
                <GitHub style={{ cursor: 'pointer', verticalAlign: "text-bottom", fontSize: "22px" }}></GitHub>
                <Email style={{ cursor: 'pointer', verticalAlign: "text-bottom", fontSize: "22px" }}></Email>
                <BiLogoDiscord style={{ cursor: 'pointer', verticalAlign: "text-bottom", fontSize: "22px" }}></BiLogoDiscord>
            </Box>
        </Box>
    );
}