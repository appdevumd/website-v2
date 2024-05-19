import { SponsorTier } from "./interfaces";
import { Box, SxProps, Typography } from "@mui/material"

function Sponsors(props: { project: SponsorTier, sx?: SxProps }) {
    let tierColor1 = ""
    let tierColor2 = ""

    if (props.project.tier == "Platinum") {
        tierColor1 = "#E5E4E2"
        tierColor2 = "#9E9E9E"
    }

    else if (props.project.tier == "Gold") {
        tierColor1 = "#EBD197"
        tierColor2 = "#B48811"

    }
    else {
        tierColor1 = "#CA9D85"
        tierColor2 = "#894218"
    }
    
    return (
        <Box
            sx={{
                ...props.sx,
                boxShadow: 5,
                position: 'sticky',                
                height: '60vh',
                width: { xs: "100vw", md: '50vw' },
                borderRadius: '20px',
                padding: '30px',
                background: "linear-gradient(90deg," + tierColor1 + ", " + tierColor2 + ")"
            }}
        >
            <Box sx={{ display: 'flex', flexDirection: 'column', height: '100%' }}>
                <img style={{ height: '48px', width: 'max-content', mixBlendMode: 'luminosity' }} src="/logo256.png" />
                <Box sx={{ flexGrow: 1 }}>Sponsor Name</Box>
                <Typography sx={{ lineHeight: 0.7, fontSize: '2.8rem', fontWeight: 'bold', color: 'black', textAlign: 'end' }}>{props.project.tier}</Typography>
            </Box>
            {/*
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
                        <text style={{ color: "#000000", fontWeight: "bold", fontSize: "50px" }}>{props.project.tier}</text>
                    </Grid>

                </Grid>
            </Grid>
        */}
        </Box>
    );
}
export default Sponsors;