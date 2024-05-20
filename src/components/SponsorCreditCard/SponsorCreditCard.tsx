import api from "../../api/axios.config";
import { SponsorTier } from "./interfaces";
import { Box, SxProps, Typography } from "@mui/material"

function Sponsors(props: { project: SponsorTier, sx?: SxProps }) {
    let tierColor1 = ""
    let tierColor2 = ""

    if (props.project.tier == "Silver") {
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

    function GetSponsorImageURL(sponsorName: string): string {
        let parsedName = sponsorName.toLowerCase().replaceAll("-", "").replaceAll(" ", "-");
        return `${api.getUri()}/sponsor-logos/${parsedName}.png`;
    }

    return (
        <Box
            sx={{
                ...props.sx,
                boxShadow: 5,
                position: 'sticky',
                height: '60vh',
                width: { xs: "90%", md: '50vw' },
                borderRadius: '20px',
                padding: '30px',
                background: "linear-gradient(90deg," + tierColor1 + ", " + tierColor2 + ")"
            }}
        >
            <Box sx={{ display: 'flex', flexDirection: 'column', height: '100%', gap: '15px' }}>
                <img style={{ height: '48px', width: 'max-content', mixBlendMode: 'luminosity' }} src="/logo256.png" />
                <Box sx={{
                    marginTop: '10px',
                    display: 'flex',
                    flexDirection: 'row',
                    flexWrap: 'wrap',
                    gap: '30px'
                }}>
                    {
                        props.project.members.map((member) => (
                            <img
                                style={{ height: '50px', width: 'max-content' }}
                                src={GetSponsorImageURL(member)}
                            />
                        ))
                    }
                </Box>
                <Box sx={{ flexGrow: 1 }} ></Box>
                <Typography sx={{ lineHeight: 0.7, fontSize: '2.8rem', fontWeight: 'bold', color: 'black', textAlign: 'end' }}>{props.project.tier}</Typography>
            </Box>
        </Box>
    );
}
export default Sponsors;