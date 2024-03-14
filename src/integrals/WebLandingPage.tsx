import { Box, Typography } from "@mui/material";
import React from "react";
import WebEventsBar, { WebEvent } from "../components/WebEventsBar";
import WebAppBar from "../components/WebAppBar";

export default function WebLandingPage() {
    const [liveEvents, setLiveEvents] = React.useState<WebEvent[]>([]);
    const [translucentAppBarTop, setTranslucentAppBarTop] = React.useState(-120);

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

            { /* Translucent App Bar */}
            <WebAppBar translucent={true} sx={{ position: 'fixed', top: `${translucentAppBarTop}px`, left: '0px' }} />

            { /* Fixed App Bar */}
            <WebAppBar fullWidth />

            <Box>
                <Typography sx={{ fontSize: '20rem' }}>Hello</Typography>
            </Box>
        </Box>
    );
}