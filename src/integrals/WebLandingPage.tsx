import { Box, Typography } from "@mui/material";
import React from "react";
import WebEventsBar, { WebEvent } from "../components/WebEventsBar";
import WebAppBar, { WebAppBarLink } from "../components/WebAppBar";

export default function WebLandingPage() {
    const [liveEvents, setLiveEvents] = React.useState<WebEvent[]>([{ title: "General Body Meeting, 3/25 8pm @ Iribe" }]);
    const [translucentAppBarTop, setTranslucentAppBarTop] = React.useState(-120);

    /* Define WebAppBar Links */
    const webAppBarLinks: WebAppBarLink[] = [
        { title: "About", anchor: "" },
        { title: "Sponsors", anchor: "" },
        { title: "Projects", anchor: "" },
        { title: "Our Team", anchor: "" },
        { title: "Highlights", anchor: "" },
        { title: "Contact Us", anchor: "" },
    ];

    React.useEffect(() => {
        /* Detect Webpage Scroll */
        window.addEventListener("scroll", () => {
            /* Use Minimum Scroll Listeners. Performance is Important. */
            const scrollX = window.scrollX;
            const scrollY = window.scrollY;

            /* Set App Bar to Translucent Mode if Scroll is Over 100 */
            setTranslucentAppBarTop(Math.min(scrollY - 120, 0));
        });
    }, []);

    return (
        <Box sx={{ height: '200vh' }}>
            {
                /* Live Events bar */
                (liveEvents.length < 1) ? <></> :
                    <WebEventsBar events={liveEvents} />
            }

            { /* Fixed App Bar */}
            <WebAppBar links={webAppBarLinks} fullWidth />

            <Box>
                <Typography sx={{ fontSize: '5rem' }}>Hello</Typography>
            </Box>

            { /* Translucent App Bar, Last Element, On Top of All */}
            <WebAppBar
                links={webAppBarLinks}
                translucent={true}
                sx={{
                    position: 'fixed',
                    top: `${translucentAppBarTop}px`,
                    left: '0px'
                }}
            />
        </Box>
    );
}