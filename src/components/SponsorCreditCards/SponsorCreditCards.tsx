import { SponsorCard  } from "./interfaces";
import { Box, Grid} from "@mui/material"
import Atropos from 'atropos/react';
import "./SponsorCreditCard.css"

import platinumLogo from "./CreditCardLogos/image 2.png"
import amazonLogo from "./CreditCardLogos/image 3.png"
import praxisLogo from "./CreditCardLogos/image 8.png"
import goldLogo from "./CreditCardLogos/imgGold.png"
import bronzeLogo from "./CreditCardLogos/imgBronze.png"



function Sponsors(props: {project : SponsorCard}) {
    let tierColor1 = ""
    let tierColor2 = ""
    let ADClogo = ""
    let px = props.project.px
    let top = px  + "px"
    

    if (props.project.tier == "Platinum"){
        tierColor1 = "#E5E4E2"
        tierColor2 = "#9E9E9E"
        ADClogo = platinumLogo
    }
    else if (props.project.tier == "Gold"){
        tierColor1 = "#EBD197"
        tierColor2 = "#B48811"
        ADClogo = goldLogo
        
    }
    else {
        tierColor1 = "#CA9D85"
        tierColor2 = "#894218"
        ADClogo = bronzeLogo
        
    }
    return (
        <div 
            className="cardContainer"
            style={{top:top}}
            
        >
            {/*<Atropos
                highlight={false}
                style={{height: "500px", width: "800px", cursor: "pointer"}}
    >*/}
                <Box
                    height="500px"
                    width="800px"
                    borderRadius="20px"
                    padding="30px"
                    gap= "15px"
                    sx={{background: "linear-gradient(90deg," + tierColor1 + ", "+ tierColor2 +")"}}
                >
                    <Grid container spacing={8}>
                        <Grid container item columns={1}>
                            <img src={ADClogo}></img>
                        </Grid>
                        <Grid container item spacing={5}>
                            <Grid item >
                                <img src={amazonLogo} height={"50px"}></img>
                            </Grid>
                            <Grid item>
                                <img src={praxisLogo} height={"50px"}></img>
                            </Grid>
                        </Grid>
                        <Grid container item spacing={5}>
                            <Grid item >
                                <img src={amazonLogo} height={"50px"}></img>
                            </Grid>
                            <Grid item>
                                <img src={praxisLogo} height={"50px"}></img>
                            </Grid>
                            
                        </Grid>
                        
                        <Grid container item spacing={3} justifyContent={"flex-end"}>
                            <Grid item >
                                <text style={{color:"#000000", fontWeight:"bold", fontSize:"50px"}}>{props.project.tier}</text>
                            </Grid>
                            
                        </Grid>
                    </Grid> 
                    
                </Box>
            {/*</Atropos>*/}
        </div>
    
        
    );
}
export default Sponsors;