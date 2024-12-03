import { Container, Divider, Typography, Box, Button, LinearProgress } from "@mui/material";
import WebAppBar from "../components/WebAppBar";
import { WebAppBarLink } from "../components/WebAppBar/interfaces";

export default (props: any) => {
    // Dynamic variables
    const amountRaised = 750; // Amount raised so far
    const goalAmount = 10000; // Goal amount
    const percentageRaised = (amountRaised / goalAmount) * 100; // Calculate percentage raised
    const numberOfDonors = 12; // Number of donors
    const daysLeft = 29; // Days left until the project ends
    const endDate = "January 02, at 12:00 AM EST"; // End date of the project

    const webAppBarLinks: WebAppBarLink[] = [
        { title: "Home", anchor: "/#maindiv-001" },
        { title: "Projects", anchor: "/#subdiv-002" },
        { title: "Contact Us", anchor: "/#contact" },
    ];

    return (
        <Box sx={{ bgcolor: 'white', color: 'black', height: '100%' }}>
            <WebAppBar links={webAppBarLinks} />
            <Container sx={{ display: 'flex', gap: '15px', paddingTop: '20px' }}>
                {/* Main Content */}
                <Box sx={{ flex: 1 }}>
                    <Typography variant="h4" sx={{ marginBottom: '20px' }}>Who You're Supporting</Typography>
                    <Typography paragraph>
                        We're a team of undergraduate students spending our free time designing and building a car to compete. Why? We want to become better engineers. Our Terps get their hands dirty with hands-on experience that sets us up to land internships and become engineering leaders.
                    </Typography>
                    <Typography paragraph>
                        <strong>Our Accomplishments & the Competition</strong><br />
                        Last season, we built our first-ever working car! In our third year as a team, we placed Top 10 in Engineering Design at the Formula Hybrid+Electric Competition amongst well-established teams that have been winning for years. To keep up this momentum, we need your help.
                    </Typography>
                    <Typography paragraph>
                        <strong>Why Support Us?</strong><br />
                        This year, funding cuts have left us unable to afford to attend the Formula Hybrid+Electric competition in April. We know that we can deliver even better competition results this year: we're on track to have a fully-built car in March, months ahead of last year, giving us time for testing and tuning. Without your support, we risk not affording competition this year. Let's keep up the momentum. Donate to help us place even stronger this year!
                    </Typography>
                    <Typography paragraph>
                        <strong>Where Your Donation Goes</strong><br />
                        Donations will fund registration fees ($2,500), travel, tools, and car parts. So you know exactly how much we appreciate your donation, we're keeping a running list of everything we pay for with donations posted on our website.
                    </Typography>
                </Box>
                
                <Divider sx={{ borderColor: 'rgba(0,0,0,0.18)' }} flexItem orientation="vertical" />
                
                {/* Sidebar */}
                <Box sx={{ minWidth: "30%", padding: '15px', bgcolor: '#f9f9f9', borderRadius: '8px' }}>
                    <Typography variant="h5" sx={{ marginBottom: '15px' }}>
                        <strong>${amountRaised.toLocaleString()}</strong>
                    </Typography>
                    <Typography variant="subtitle2" sx={{ color: 'grey', marginBottom: '10px' }}>
                        {percentageRaised.toFixed(1)}% Raised toward our ${goalAmount.toLocaleString()} Goal
                    </Typography>
                    <LinearProgress
                        variant="determinate"
                        value={percentageRaised} // Dynamically set progress
                        sx={{
                            height: '10px',
                            borderRadius: '5px',
                            marginBottom: '20px',
                            backgroundColor: '#e0e0e0',
                            '& .MuiLinearProgress-bar': {
                                backgroundColor: 'rgb(16, 116, 255)', // Set progress bar color
                            },
                        }}
                    />
                    <Typography variant="body2" sx={{ marginBottom: '20px' }}>
                        {numberOfDonors} Donors
                    </Typography>
                    <Typography variant="h6" sx={{ marginBottom: '10px' }}>
                        <strong>{daysLeft} Days Left</strong>
                    </Typography>
                    <Typography variant="body2" sx={{ marginBottom: '20px', color: 'grey' }}>
                        Project ends on {endDate}
                    </Typography>
                    <Button
                        variant="contained"
                        fullWidth
                        sx={{
                            backgroundColor: 'rgb(16, 116, 255)', // Button background color
                            color: '#fff',
                            '&:hover': { backgroundColor: 'rgba(16, 116, 255, 0.9)' }, // Hover effect
                        }}
                    >
                        Donate Now
                    </Button>
                </Box>
            </Container>
        </Box>
    );
};
