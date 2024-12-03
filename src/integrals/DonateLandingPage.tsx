import { Container, Divider, Typography } from "@mui/material"
import Box from "@mui/material/Box"
import WebAppBar from "../components/WebAppBar"
import { WebAppBarLink } from "../components/WebAppBar/interfaces";

export default (props: any) => {
    const webAppBarLinks: WebAppBarLink[] = [
        { title: "Home", anchor: "/#maindiv-001" },
        { title: "Projects", anchor: "/#subdiv-002" },
        { title: "Contact Us", anchor: "/#contact" },
    ];

    return (
        <Box sx={{ bgcolor: 'white', color: 'black', height: '100%' }}>
            <WebAppBar links={webAppBarLinks} />
            <Container sx={{ display: 'flex', gap: '15px' }}>
                <Box>
                    <Typography variant="h4">Who You're Supporting</Typography>
                    We're a team of undergraduate students spending our free time designing and building a car to compete. Why? We want to become better engineers. Our Terps get their hands dirty with hands-on experience that sets us up to land internships and become engineering leaders.

                    Our Accomplishments & the Competition
                    Last season, we built our first-ever working car! In our third year as a team, we placed Top 10 in Engineering Design at the Formula Hybrid+Electric Competition amongst well-established teams that have been winning for years. To keep up this momentum, we need your help.

                    Why Support Us?
                    This year, funding cuts have left us unable to afford to attend the Formula Hybrid+Electric competition in April. We know that we can deliver even better competition results this year: we're on track to have a fully-built car in March, months ahead of last year, giving us time for testing and tuning. Without your support, we risk not affording competition this year. Let's keep up the momentum. Donate to help us place even stronger this year!

                    Where Your Donation Goes
                    Donations will fund registration fees ($2,500), travel, tools, and car parts. So you know exactly how much we appreciate your donation, we're keeping a running list of everything we pay for with donations posted on our website.

                </Box>
                <Divider sx={{ borderColor: 'rgba(0,0,0,0.18)' }} flexItem orientation="vertical" />
                <Box sx={{ minWidth: "30%" }}>
                    Sidebar
                </Box>
            </Container>
        </Box>
    )
}