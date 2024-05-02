import React from "react";
import styled from "styled-components";
import {Grid, Stack} from "@mui/material"
import { Instagram } from "@mui/icons-material";
import { Facebook } from "@mui/icons-material";
import { X } from "@mui/icons-material";
import { YouTube } from "@mui/icons-material";

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


function Footer (){
    const today = new Date()
    const year = today.getFullYear();
    return (
        <div>
            <Container>
                <hr style={{width:"100%"}}></hr>
                <Wrapper>
                    <Grid container>

                        {/* ROW 1 /*/}
                        <Grid container item spacing={26}>
                            <Grid item> 
                                <p style={{fontWeight:"bold", fontSize:"18px"}}>Students</p>
                                <Stack spacing={0}>
                                    <p style={{fontSize:"13px"}}>Enrollment</p>
                                    <p style={{fontSize:"13px"}}>Student Benefits</p>
                                    <p style={{fontSize:"13px"}}>Upcoming Events</p>
                                </Stack>
                            </Grid>
                            <Grid item>
                                <p style= {{fontWeight:"bold", fontSize:"18px"}}>Sponsors</p>
                                <Stack spacing={0}>
                                    <p style={{fontSize:"13px"}}>Contact Us</p>
                                    <p style={{fontSize:"13px"}}>About Us</p>
                                    <p style={{fontSize:"13px"}}>Sponsor Benefits</p>
                                    <p style={{fontSize:"13px"}}>Current Projects</p>
                                </Stack>

                            </Grid>
                            <Grid item>
                                <p style= {{fontWeight:"bold", fontSize:"18px"}}>Members</p>
                                <Stack spacing={0}>
                                    <p style={{fontSize:"13px"}}>Member Events</p>
                                    <p style={{fontSize:"13px"}}>Our Team</p>
                                    <p style={{fontSize:"13px"}}>Highlights</p>
                                </Stack>
                            </Grid>
                            <Grid item >
                                <p style= {{fontWeight:"bold", fontSize:"18px"}}>Socials</p>
                                <Stack spacing={2}>
                                    <Instagram></Instagram>
                                    <Facebook></Facebook>
                                    <X></X>
                                    <YouTube></YouTube>
                                    
                                </Stack>
                            </Grid>
                            
                            
                        </Grid>
                    </Grid>
                    
                    
                </Wrapper>
                <br></br>
                <hr style={{width:"100%"}}></hr>
                <p style={{fontSize:"13px"}}>&copy; {year} App Dev Club. All Rights Reserved</p>

            </Container>
            
            


            
        </div>
        
        
    );
}

export default Footer;