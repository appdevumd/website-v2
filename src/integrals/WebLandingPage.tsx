import { Box } from "@mui/material";
import React from "react";
import WebEventsBar, { WebEvent } from "../components/WebEventsBar";
import WebAppBar, { WebAppBarLink } from "../components/WebAppBar";
import LandingProjectCard from "../components/LandingProjectCard";

export default function WebLandingPage() {
    const projectsContainer = React.useRef<HTMLDivElement>();
    const [liveEvents, setLiveEvents] = React.useState<WebEvent[]>([{ title: "General Body Meeting, 3/25 8pm @ Iribe" }]);
    const [translucentAppBarTop, setTranslucentAppBarTop] = React.useState(-120);
    const [projectsContainerPosition, setProjectsContainerPosition] = React.useState<string>("fixed");

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
            setProjectsContainerPosition((scrollY > 2000) ? 'unset' : 'fixed')

            if (projectsContainer.current) {
                let container = projectsContainer.current;
                let progress = (1 - ((2000 - scrollY) / 2000));
                let maxScrollLeft = (container.scrollWidth - container.clientWidth);
                container.scrollLeft = ((progress + 0.02) * maxScrollLeft)
            }
        });
    }, []);

    return (
        <Box sx={{ minHeight: '500vh' }}>
            {
                /* Live Events bar */
                (liveEvents.length < 1) ? <></> :
                    <WebEventsBar events={liveEvents} />
            }

            { /* Fixed App Bar */}
            <WebAppBar links={webAppBarLinks} fullWidth />

            <Box sx={{ height: '2000px' }}></Box>
            <Box ref={projectsContainer} sx={{
                display: 'flex',
                gap: '30px',
                padding: '50px',
                maxWidth: '100%',
                overflowX: 'hidden',
                position: projectsContainerPosition,
                top: '120px',
            }}>
                <LandingProjectCard project={{
                    id: "1234567",
                    name: "Space Safety Visualizer",
                    organization: "Amazon",
                    description: "The Fall 2023 Amazon project was a low Earth orbit satellite visualization system. This was designed for Project Kuiper as a way to visualize satellite collision risk to non-technical stakeholders at Amazon.",
                    members: ["1234567", "12345678"],
                    cover: "null",
                }} />
                <LandingProjectCard project={{
                    id: "1234567",
                    name: "Space Safety Visualizer",
                    organization: "Amazon",
                    description: "The Fall 2023 Amazon project was a low Earth orbit satellite visualization system. This was designed for Project Kuiper as a way to visualize satellite collision risk to non-technical stakeholders at Amazon.",
                    members: ["1234567", "12345678"],
                    cover: "null",
                }} />
                <LandingProjectCard project={{
                    id: "1234567",
                    name: "Space Safety Visualizer",
                    organization: "Amazon",
                    description: "The Fall 2023 Amazon project was a low Earth orbit satellite visualization system. This was designed for Project Kuiper as a way to visualize satellite collision risk to non-technical stakeholders at Amazon.",
                    members: ["1234567", "12345678"],
                    cover: "null",
                }} />
            </Box>

            { /* Translucent App Bar, Last Element, On Top of All */}
            <WebAppBar
                links={webAppBarLinks}
                translucent={true}
                sx={{
                    zIndex: 2,
                    position: 'fixed',
                    top: `${translucentAppBarTop}px`,
                    left: '0px'
                }}
            />
        </Box>
    );
}