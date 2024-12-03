import { Container, Divider, Typography, Box, Button, LinearProgress } from "@mui/material";
import WebAppBar from "../components/WebAppBar";
import { WebAppBarLink } from "../components/WebAppBar/interfaces";

export default (_props: any) => {
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
        <Box sx={{ bgcolor: 'white', color: 'black', minHeight: '100%' }}>
            <WebAppBar links={webAppBarLinks} />
            <Container sx={{ display: 'flex', gap: '15px', marginTop: '30px', paddingBottom: '30px' }}>
                {/* Main Content */}
                <Box sx={{ flex: 1 }}>
                    <Typography variant="h4" sx={{ marginBottom: '20px' }}>University of Maryland's App Dev Club Helps Students Gain Hands-On Experience for a Career in Tech</Typography>
                    <Typography paragraph>
                        The App Dev Club at the University of Maryland's Department of Computer Science has grown rapidly since its inception, establishing itself as a leading student organization for app development and career preparation in the tech industry. With over <strong>300 members</strong>, the club provides a platform for students to develop technical and professional skills while building meaningful connections.
                    </Typography>

                    {/* Mission Section */}
                    <Typography variant="h5" sx={{ marginBottom: '10px' }}>Our Mission</Typography>
                    <Typography paragraph>
                        The App Dev Club supports its members by fostering talent and bridging the gap between academia and professional opportunities. The club's mission is to empower students to innovate, collaborate, and excel in software engineering, preparing them for top-tier tech careers.
                    </Typography>

                    {/* Where Your Donation Goes */}
                    <Typography variant="h5" sx={{ marginBottom: '10px' }}>Where Your Donation Goes</Typography>
                    <Typography paragraph>
                        Your donation will directly support initiatives that make a tangible impact on our members' growth and success. Funds will be used to:
                    </Typography>
                    <Typography component="ul" paragraph>
                        <li>Purchase essential software licenses and development tools.</li>
                        <li>Organize workshops and hackathons for skill-building and innovation.</li>
                        <li>Facilitate collaborative projects with industry partners.</li>
                        <li>Provide networking opportunities, including hosting guest speakers and career fairs.</li>
                        <li>Offset costs for club operations, ensuring we can continue to grow and support our members effectively.</li>
                    </Typography>

                    {/* FALL 2024 Section */}
                    <Typography variant="h5" sx={{ marginBottom: '10px' }}>Fall 2024 Projects</Typography>
                    <Typography component="ul" paragraph>
                        <li><strong>Amazon:</strong> Developing an automated ML pipeline for detecting anomalous satellite behavior.</li>
                        <li><strong>Booz Allen Hamilton:</strong> Creating an application that automates the tedious process of auditing Children's Health Insurance Program and Medicaid claims.</li>
                        <li><strong>Children’s National Hospital - TrachSense:</strong> Developing a medical app that monitors tracheostomy tube placement in children by analyzing CO₂ waveforms to trigger emergency alerts.</li>
                        <li><strong>Children’s National Hospital - X-ray analysis:</strong> Developing an ML training pipeline for chest disease detection.</li>
                        <li><strong>General Dynamics Information Technology:</strong> Continuing development on last semester’s application.</li>
                        <li><strong>MITRE:</strong> Creating an internal cybersecurity engineer onboarding tool for MITRE employees.</li>
                        <li><strong>National Ocean and Atmospheric Administration:</strong> Developed workflows that made fetching state-of-the-art NOAA space weather predictions systematic and easier for the space industry, thereby preventing weather-induced rocket launch failures.</li>
                        <li><strong>U.S News and World Report:</strong> Implementing a backend component with data heuristics and analysis capabilities to identify anomalies within internal API data and email real-time reports of those findings.</li>
                        <li><strong>Warriors Legacy Care:</strong> Developing a mobile application to increase veteran access to local healthcare options.</li>
                    </Typography>

                    <Typography paragraph>
                        Every dollar you contribute helps students gain invaluable skills and experiences, bringing us closer to our mission of preparing the next generation of tech leaders. Thank you for making a difference!
                    </Typography>
                </Box>
                
                <Divider sx={{ borderColor: 'rgba(0,0,0,0.18)' }} flexItem orientation="vertical" />
                
                {/* Sidebar */}
                <Box sx={{ minWidth: "30%", padding: '15px', bgcolor: '#f9f9f9', borderRadius: '16px' }}>
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
                        onClick={() => { window.location.href = "https://buy.stripe.com/aEUg2G8Xe1Kl0Ja3cc" }}
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
