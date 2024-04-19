import { Box, Typography } from "@mui/material";
import React from "react";
import WebEventsBar from "../components/WebEventsBar";
import { WebEvent } from "../components/WebEventsBar/interfaces";
import WebAppBar from "../components/WebAppBar";
import { WebAppBarLink } from "../components/WebAppBar/interfaces";
import LandingProjectCard from "../components/LandingProjectCard";
import MemberCarousel from "../components/MemberCarousel";
import Stats from "../components/Stats";
import { useQuery } from "@tanstack/react-query";
import ProjectAPI from "../api/projects.api";
import { LandingProject } from "../components/LandingProjectCard/interfaces";
import {
  Animator,
  ScrollContainer,
  ScrollPage,
  batch,
  Animation,
} from "react-scroll-motion";
import MeetOurSponsorsTitle from "../components/MeetOurSponsorsTitle";
import SponsorCreditCards from "../components/SponsorCreditCards";

const LandingProjectCards = React.forwardRef(
  (props: { position: string }, ref) => {
    const { data, isLoading, error } = useQuery({
      queryKey: ["projects"],
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
        {data.map((project: LandingProject) => (
          <LandingProjectCard key={project._id} project={project} />
        ))}
      </Box>
    );
  }
);

export default function WebLandingPage() {
  const projectsContainer = React.useRef<HTMLDivElement>();
  const [liveEvents, setLiveEvents] = React.useState<WebEvent[]>([
    { title: "General Body Meeting, 3/25 8pm @ Iribe" },
  ]);
  const [translucentAppBarTop, setTranslucentAppBarTop] = React.useState(-120);
  const [projectsContainerPosition, setProjectsContainerPosition] =
    React.useState<string>("fixed");
  const [statsContainerPosition, setStatsContainerPosition] = React.useState<
    "fixed" | "unset"
  >("fixed");

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
        scrollY > 2600 || scrollY < 800 ? "unset" : "fixed"
      );
      setStatsContainerPosition(scrollY > 400 ? "unset" : "fixed");

      if (projectsContainer.current) {
        const container = projectsContainer.current;
        const progress = 1 - (2000 - scrollY + 900) / 2000;
        const maxScrollLeft = container.scrollWidth - container.clientWidth;
        container.scrollLeft = (progress + 0.02) * maxScrollLeft;
      }
    });
  }, []);

  return (
    <Box
      sx={{
        minHeight: "500vh",
        background:
          "radial-gradient(40% 21% at 40% 24%, #080C44AB 0%, #26346D00 100%),radial-gradient(113% 91% at 17% -2%, #084788FF 1%, #FF000000 99%),radial-gradient(42% 21% at 84% -5%, #6913A1FF 1%, #FF000000 99%),radial-gradient(142% 91% at 101% 2%, #171139FF 1%, #FF000000 99%),radial-gradient(50% 20% at 109% 98%, #3D386DFF 1%, #FF000000 99%),radial-gradient(120% 65% at 34% 108%, #161838FF 0%, #062182FF 99%)",
        backgroundSize: "100% 100%",
      }}
    >
      {
        /* Live Events bar */
        liveEvents.length < 1 ? <></> : <WebEventsBar events={liveEvents} />
      }

      {/* Fixed App Bar */}
      <WebAppBar links={webAppBarLinks} fullWidth />
      <Box sx={{ height: "500px" }}></Box>
      <ScrollContainer
        style={{
          position: statsContainerPosition,
          top: "200px",
          scrollBehavior: "smooth",
          overflow: "visible",
        }}
      >
        <ScrollPage style={{ overflow: "visible" }}>
          <Animator
            animation={batch(
              DelayedFadeOut(1, -0.5, 0.2),
              DelayedZoomOut(3, 1, 0.2),
              DelayedMoveOut(0, -200, 0.2)
            )}
            style={{ width: "100%", overflow: "visible" }}
          >
            <Typography
              sx={{
                flexGrow: 1,
                fontSize: "4vw",
                fontWeight: "bold",
                marginLeft: 5,
                marginRight: 5,
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
                gap: 4,
                paddingLeft: 5,
                paddingRight: 5,
                marginTop: "5vw",
                marginBottom: 10,
                flexDirection: { xs: "column", md: "row" },
              }}
            >
              <Stats
                end={500000}
                title={"Dollars Saved"}
                prefix={"$"}
                minWidth={336}
              />
              <Stats end={150} title={"Members"} minWidth={81} />
              <Stats end={100000} title={"Lines of Code"} minWidth={267} />
            </Box>
          </Animator>
        </ScrollPage>
      </ScrollContainer>

      <Box sx={{ height: "1400px" }}></Box>
      <LandingProjectCards
        ref={projectsContainer}
        position={projectsContainerPosition}
      />

      <Box sx={{ height: "700px" }}></Box>
      <MemberCarousel />
      <Box sx={{ height: "300px" }}></Box>
      <MeetOurSponsorsTitle />
      <Box sx={{ height: "250px" }}></Box>
      <SponsorCreditCards project={{
        tier:"Platinum",
        members:[],
        logos:""
      }}
      />
      <Box sx={{ height: "300px" }}></Box>
      <SponsorCreditCards project={{
        tier:"Gold",
        members:[],
        logos:""
        
      }}/>
      <Box sx={{ height: "300px" }}></Box>
      <SponsorCreditCards project={{
        tier:"Bronze",
        members:[],
        logos:""
        
      }}/>
      <Box sx={{ height: "300px" }}></Box>

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

const DelayedZoomOut = (
  from: number,
  to: number,
  delay: number
): Animation => ({
  out: {
    style: {
      transform: (value: number) => {
        value = Math.max(value - delay, 0);
        return `scale(${to * (1 - value) + from * value})`;
      },
    },
  },
});

const DelayedFadeOut = (
  from: number,
  to: number,
  delay: number
): Animation => ({
  out: {
    style: {
      opacity: (value: number) => {
        value = Math.max(value - delay, 0);
        return from * (1 - value) + to * value;
      },
    },
  },
});

const DelayedMoveOut = (dx: number, dy: number, delay: number): Animation => ({
  out: {
    style: {
      transform: (value: number) => {
        value = Math.max(value - delay, 0);
        return `translate(${0 * (1 - value) + dx * value}px, ${0 * (1 - value) + dy * value}px)`;
      },
    },
  },
});
