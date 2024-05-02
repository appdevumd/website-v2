import React from "react";
import styled from "styled-components";
import {Grid, Stack} from "@mui/material"
import instagram from "./SocialMediaIcons/icons8-instagram-24.png"
import facebook from "./SocialMediaIcons/icons8-facebook-384.png"
import twitter from "./SocialMediaIcons/icons8-twitterx-384.png"

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
    return (
        <div>
            <hr style={{width:"90%"}}></hr>
            <Container>
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
                                <img src={instagram} style={{width:"30px"}}></img>
                                <img src={facebook} style={{width:"30px"}}></img>
                                <img src={twitter} style={{width:"30px"}}></img>
                            </Stack>
                        </Grid>
                        
                        
                    </Grid>
                </Grid>
                
            </Wrapper>
        </Container>
        </div>
        
        
    );
}

export default Footer;