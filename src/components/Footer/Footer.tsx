import React from "react";
import styled from "styled-components";
import { Box, Grid, Paper, Stack, SxProps, Typography } from "@mui/material"
import { Instagram } from "@mui/icons-material";
import { LinkedIn } from "@mui/icons-material";
import { GitHub } from "@mui/icons-material";
import { Email } from "@mui/icons-material";
import { BiLogoDiscord } from "react-icons/bi";



const Container = styled.div`
    padding: 20px 60px;
    justify-content: center;
`

const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    max-width: 1000px;
    margin: 0 auto;

`


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
        // <Wrapper>
        //     <Grid sx={{ padding: '10px' }} container spacing={34}>
        //         {/* INITIAL DESIGN WITH MORE INFO CAN BE USED IN FUTURE POTENTIALLY */}
        //         {/*
        //                 <Grid container item spacing={26}>
        //                 <Grid item> 
        //                     <p style={{fontWeight:"bold", fontSize:"18px"}}>Students</p>
        //                     <Stack spacing={0}>
        //                         <p style={{fontSize:"13px"}}>Enrollment</p>
        //                         <p style={{fontSize:"13px"}}>Student Benefits</p>
        //                         <p style={{fontSize:"13px"}}>Upcoming Events</p>
        //                     </Stack>
        //                 </Grid>
        //                 <Grid item>
        //                     <p style= {{fontWeight:"bold", fontSize:"18px"}}>Sponsors</p>
        //                     <Stack spacing={0}>
        //                         <p style={{fontSize:"13px"}}>Contact Us</p>
        //                         <p style={{fontSize:"13px"}}>About Us</p>
        //                         <p style={{fontSize:"13px"}}>Sponsor Benefits</p>
        //                         <p style={{fontSize:"13px"}}>Current Projects</p>
        //                     </Stack>

        //                 </Grid>
        //                 <Grid item>
        //                     <p style= {{fontWeight:"bold", fontSize:"18px"}}>Members</p>
        //                     <Stack spacing={0}>
        //                         <p style={{fontSize:"13px"}}>Member Events</p>
        //                         <p style={{fontSize:"13px"}}>Our Team</p>
        //                         <p style={{fontSize:"13px"}}>Highlights</p>
        //                     </Stack>
        //                 </Grid>
        //                 <Grid item >
        //                     <p style= {{fontWeight:"bold", fontSize:"18px"}}>Socials</p>
        //                     <Stack spacing={2}>
        //                         <Instagram></Instagram>
        //                         <Facebook></Facebook>
        //                         <X></X>
        //                         <YouTube></YouTube>

        //                     </Stack>
        //                 </Grid>


        //             </Grid>
        //             */}
        //         <Grid item>
        //             <p style={{ fontSize: "18px" }}>&copy; {year} App Dev Club</p>
        //         </Grid>

        //         <Grid item>
        //             <img src="../public/logo256.png" style={{ maxHeight: "50px", verticalAlign: "bottom" }} />

        //         </Grid>

        //         <Grid item>
        //             <p style={{ fontWeight: "bold", fontSize: "18px" }}><Instagram style={{ verticalAlign: "text-bottom", fontSize: "22px" }}></Instagram> &nbsp; <LinkedIn style={{ verticalAlign: "text-bottom", fontSize: "22px" }}></LinkedIn> &nbsp; <GitHub style={{ verticalAlign: "text-bottom", fontSize: "22px" }}></GitHub> &nbsp; <Email style={{ verticalAlign: "text-bottom", fontSize: "22px" }}></Email> &nbsp; <BiLogoDiscord style={{ verticalAlign: "text-bottom", fontSize: "22px" }}></BiLogoDiscord></p>
        //         </Grid>
        //     </Grid>
        // </Wrapper>
    );
}