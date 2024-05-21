import { Box, Typography } from "@mui/material";
import SponsorshipCard from "../components/SponsorshipCard";

export default function WebSponsorTiers() {
    return (
        <Box
            sx={{
                display: 'flex',
                flexDirection: 'column',
                width: '100%',
                justifyContent: 'center',
                alignItems: 'center',
                gap: '35px',
                marginBottom: '100px'
            }}
        >
            <Typography sx={{ textAlign: 'center' }} variant="h3">Sponsorship Tiers</Typography>
            <Box
                sx={{
                    marginTop: '40px',
                    width: { xs: '100%', md: '75%' },
                    display: 'flex',
                    flexDirection: 'row',
                    gap: '100px',
                    height: '100vh',
                    flexWrap: 'wrap'
                }}
            >
                <SponsorshipCard
                    tier="Gold"
                    backgroundColor="gold"
                    price={500}
                    benefits={["Apple", "ball", "cat"]}
                    sx={{ height: '100%', flexGrow: 1 }}
                />
                <SponsorshipCard
                    tier="Silver"
                    backgroundColor="silver"
                    price={500}
                    benefits={["Apple", "ball", "cat"]}
                    sx={{ height: '100%', flexGrow: 1 }}
                />
                <SponsorshipCard
                    tier="Bronze"
                    backgroundColor="#CD7F32"
                    price={500}
                    benefits={["Apple", "ball", "cat"]}
                    sx={{ height: '100%', flexGrow: 1 }}
                />
            </Box>
        </Box>
    );
}