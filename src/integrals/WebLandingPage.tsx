import { Box, Typography } from "@mui/material";
import React from "react";
import WebEventsBar from "../components/WebEventsBar";
import { WebEvent } from "../components/WebEventsBar/interfaces";
import WebAppBar from "../components/WebAppBar";
import { WebAppBarLink } from "../components/WebAppBar/interfaces";
import LandingProjectCard from "../components/LandingProjectCard";
import Stats from "../components/Stats";
import { useQuery } from "@tanstack/react-query";
import ProjectAPI from "../api/projects.api";
import { LandingProject } from "../components/LandingProjectCard/interfaces";

const LandingProjectCards = React.forwardRef((props: { position: string; }, ref) => {
  const { data, isLoading, error } = useQuery({
    queryKey: ['projects'],
    queryFn: ProjectAPI.getAll,
  });

  if (isLoading) {
    return "Loading...";
  }
  
  if (error) {
    return error.message;
  }

  return (
    <Box
      ref={ref}
      sx={{
        display: "flex",
        gap: "30px",
        padding: "50px",
        maxWidth: "100%",
        overflowX: "hidden",
        position: props.position,
        top: window.scrollY > 200 ? "120px" : "720px",
      }}
    >
      {data.map((project: LandingProject) => <LandingProjectCard key={project._id} project={project}/>)}
    </Box>
  );
});

export default function WebLandingPage() {
  const projectsContainer = React.useRef<HTMLDivElement>();
  const [liveEvents, setLiveEvents] = React.useState<WebEvent[]>([
    { title: "General Body Meeting, 3/25 8pm @ Iribe" },
  ]);
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
      const scrollY = window.scrollY;

      /* Set App Bar to Translucent Mode if Scroll is Over 100 */
      setTranslucentAppBarTop(Math.min(scrollY - 120, 0));
      setProjectsContainerPosition(
        scrollY > 2600 || scrollY < 600 ? "unset" : "fixed"
      );

      if (projectsContainer.current) {
        const container = projectsContainer.current;
        const progress = 1 - (2000 - scrollY + 700) / 2000;
        const maxScrollLeft = container.scrollWidth - container.clientWidth;
        container.scrollLeft = (progress + 0.02) * maxScrollLeft;
      }
    });
  }, []);

  return (
    <Box sx={{ minHeight: "500vh" }}>
      {
        /* Live Events bar */
        liveEvents.length < 1 ? <></> : <WebEventsBar events={liveEvents} />
      }

      {/* Fixed App Bar */}
      <WebAppBar links={webAppBarLinks} fullWidth />

      <Typography
        sx={{
          flexGrow: 1,
          fontSize: 40,
          fontWeight: "bold",
          margin: 10,
          textAlign: "center",
        }}
      >
        Empower Code. Inspire Design. Drive Innovation.
      </Typography>
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-evenly",
          flex: 1,
          flexWrap: "wrap",
        }}
      >
        <Stats end={500000} title={"Dollars Saved"} prefix={"$"} width={436} />
        <Stats end={150} title={"Members"} width={181} />
        <Stats end={100000} title={"Lines of Code"} width={367} />
      </Box>
      <Box sx={{ height: "300px" }}></Box>

      <LandingProjectCards
        ref={projectsContainer}
        position={projectsContainerPosition}
      />

      {/* Translucent App Bar, Last Element, On Top of All */}
      <WebAppBar
        links={webAppBarLinks}
        translucent={true}
        sx={{
          zIndex: 2,
          position: "fixed",
          top: `${translucentAppBarTop}px`,
          left: "0px",
        }}
      />
    </Box>
  );
}
