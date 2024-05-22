import { Box, SxProps } from "@mui/material"
import { Instagram } from "@mui/icons-material";
import { LinkedIn } from "@mui/icons-material";
import { GitHub } from "@mui/icons-material";
import { Email } from "@mui/icons-material";
import { BiLogoDiscord } from "react-icons/bi";

export default function ContactUs(props: {
    sx?: SxProps,
    fontSize?: string
}) {
    return (
        <Box sx={{ display: 'flex', gap: '10px', flexGrow: 1, ...props?.sx }}>
            <Instagram style={{ cursor: 'pointer', verticalAlign: "text-bottom", fontSize: props.fontSize ?? "22px" }}></Instagram>
            <LinkedIn style={{ cursor: 'pointer', verticalAlign: "text-bottom", fontSize: props.fontSize ?? "22px" }}></LinkedIn>
            <GitHub style={{ cursor: 'pointer', verticalAlign: "text-bottom", fontSize: props.fontSize ?? "22px" }}></GitHub>
            <Email style={{ cursor: 'pointer', verticalAlign: "text-bottom", fontSize: props.fontSize ?? "22px" }}></Email>
            <BiLogoDiscord style={{ cursor: 'pointer', verticalAlign: "text-bottom", fontSize: props.fontSize ?? "22px" }}></BiLogoDiscord>
        </Box>
    )
}