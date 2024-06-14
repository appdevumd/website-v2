import { Box, Link, SxProps, Typography } from "@mui/material"
import { useScroll } from "framer-motion";
import React from "react";
import { SponsorTier } from "../SponsorCreditCard/interfaces";
import SponsorCreditCard from "../SponsorCreditCard";
import VerticalCardStack from "../VerticalCardStack";

export default function SponsorCardsStack(props?: { sx?: SxProps, mobileView?: boolean }) {
    const cardContainer = React.useRef(null);
    const [cardContainerScale, setCardContainerScale] = React.useState(1);
    const [sponsorData, setSponsorData] = React.useState<SponsorTier[]>([]);
    const { scrollYProgress } = useScroll({
        target: cardContainer,
        offset: ['start start', 'end end']
    });

    React.useEffect(() => {
        scrollYProgress.on('change', (e) => {
            if (e < 0.9)
                setCardContainerScale(Math.abs(1 - ((e * 0.08))));
        });

        /* YOU CAN ALWAYS ADD MORE CARDS IF THE MEMBERS DONT FIT :-) */
        setSponsorData(() => ([{
            tier: "Gold",
            members: [
                'Amazon Project Kuiper',
                'Fischell Institute',
                'Children\'s National Hospital',
                'Praxis Engineering'
            ],
        }, {
            tier: "Gold",
            members: [
                'US News',
                'General Dynamics IT',
                'MITRE',
            ],
        }, {
            tier: "Silver",
            members: [
                'MCERSI',
                'SECU'
            ],
        }, {
            tier: "Bronze",
            members: [
                'NSA'
            ],
        }]));
    }, []);

    return (
        <Box sx={{
            width: '100%',
            height: '100%',
            display: 'flex',
            position: 'relative',
            justifyContent: 'center',
            padding: { xs: '15px', md: '0px 100px 0px 50px' }
        }}>
            <Box sx={{
                display: { xs: 'none', md: 'flex' }, flexDirection: 'column', width: '100%',
                height: 'max-content',
                position: 'sticky',
                top: '45vh',
                left: '0px', textAlign: 'center'
            }}>
                <Typography
                    sx={{
                        fontSize: '2.5rem',
                        fontWeight: 'bold',
                    }}
                >
                    Our Sponsors
                </Typography>
                <Link href="/sponsor-us" color="text.primary" sx={{ fontWeight: 'bold' }}>
                    Want to be a part of something amazing? Sponsor us today!
                </Link>
            </Box>
            {
                (!props?.mobileView) ?
                    <Box
                        ref={cardContainer}
                        sx={{
                            ...props?.sx,
                            flexGrow: 1,
                            display: 'flex',
                            flexDirection: 'column',
                            alignItems: 'center',
                            gap: '50px',
                            width: '100%',
                            minHeight: `${(60 * (sponsorData.length + 1))}vh`,
                            transform: `scale(${cardContainerScale})`
                        }}
                    >
                        {
                            sponsorData.map((sponsor, index) => (
                                <SponsorCreditCard
                                    project={sponsor}
                                    sx={{
                                        top: `calc(22vh + ${index * 40}px)`,
                                        transform: `scale(${1 + (index * 0.03)})`
                                    }}
                                />
                            ))
                        }
                    </Box> :
                    <Box sx={{ display: 'flex', flexDirection: 'column' }}>
                        <VerticalCardStack title="Our Sponsors" stickyPosition="40vh">
                            {
                                sponsorData.map((sponsor) => (
                                    <SponsorCreditCard
                                        project={sponsor}
                                    />
                                ))
                            }
                        </VerticalCardStack>
                        <Link href="/sponsor-us" color="text.primary" sx={{ fontWeight: 'bold', textAlign: 'center' }}>
                            Want to be a part of something amazing? Sponsor us today!
                        </Link>
                    </Box>
            }
        </Box>
    );
}