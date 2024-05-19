import { Box, Typography, useMediaQuery } from "@mui/material";
import React, { useRef } from "react";
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
import "./stars.css";
import Footer from "../components/Footer";
import { useOnScreen } from "../utils/useOnScreen";
import Sparkles from "../components/Sparkles";
import AppThemeController from "../middleware/AppThemeController";
import SponsorCardsStack from "../components/SponsorCardsStack";
import VerticalCardStack from "../components/VerticalCardStack";

const LandingProjectCards = React.forwardRef(
  (
    props: {
      height: number;
      position: string;
      isLoading: boolean;
      error: Error | null;
      data: LandingProject[];
      mobileView?: boolean;
    },
    ref
  ) => {
    if (props.isLoading) {
      return "Loading...";
    }

    if (props.error) {
      return props.error.message;
    }

    return (
      (!props.mobileView) ?
        <Box
          ref={ref}
          sx={{
            display: "flex",
            gap: "30px",
            padding: "50px",
            maxWidth: "100%",
            overflowX: "hidden",
            position: props.position,
            top: window.scrollY > 200 ? "120px" : "100vh",
          }}
        >
          {props.data.map((project: LandingProject) => (
            <LandingProjectCard mobileView={false} key={project._id} project={project} />
          ))}
        </Box> :
        <VerticalCardStack title="Projects" sx={{ padding: '20px' }}>
          {
            props.data.map((project: LandingProject) => (
              <LandingProjectCard mobileView key={project._id} project={project} />
            ))
          }
        </VerticalCardStack>
    );
  }
);

/* Define WebAppBar Links */
const webAppBarLinks: WebAppBarLink[] = [
  { title: "About", anchor: "#about" },
  { title: "Projects", anchor: "#projects" },
  { title: "Our Team", anchor: "#team" },
  { title: "Sponsors", anchor: "#sponsors" },
  { title: "Highlights", anchor: "#highlights" },
  { title: "Contact Us", anchor: "#contact" },
];

export default function WebLandingPage() {
  /* AppBar and Events State */
  const mobileView = useMediaQuery(AppThemeController.baseTheme.breakpoints.down('md'));
  const [translucentAppBarTop, setTranslucentAppBarTop] = React.useState(-120);
  const [liveEvents] = React.useState<WebEvent[]>([
    { title: "General Body Meeting, 3/25 8pm @ Iribe" },
  ]);

  /* Projects State */
  const projectsContainer = React.useRef<HTMLDivElement>();
  const [projectsContainerPosition, setProjectsContainerPosition] =
    React.useState<string>("fixed");
  const [projectsContainerHeight, setProjectsContainerHeight] =
    React.useState(0);

  const membersRef = useRef<HTMLDivElement>(null);
  const membersOnScreen = useOnScreen(membersRef);

  const [statsContainerPosition] = React.useState<"fixed" | "unset">("fixed");

  const { data, isLoading, error } = useQuery({
    queryKey: ["projects"],
    queryFn: async () => {
      let res = await ProjectAPI.getAll();
      res = res.concat(res).concat(res); //testing)
      setProjectsContainerHeight(res.length * 500);
      return res;
    },
  });

  React.useEffect(() => {
    function handleScroll() {
      /* Use Minimum Scroll Listeners. Performance is Important. */
      const scrollY = window.scrollY;
      const projectsComputedHeight =
        window.innerHeight + projectsContainerHeight;

      setProjectsContainerPosition(
        scrollY > projectsComputedHeight || scrollY < window.innerHeight
          ? "unset"
          : "fixed"
      );

      /* Set App Bar to Translucent Mode if Scroll is Over 100 */
      setTranslucentAppBarTop(Math.min(scrollY - 120, 0));

      if (projectsContainer.current) {
        const container = projectsContainer.current;
        const progress = 1 - (projectsContainerHeight - (scrollY - window.innerHeight - 100)) / projectsContainerHeight;
        const maxScrollLeft = container.scrollWidth - container.clientWidth;
        container.scrollLeft = (progress + 0.02) * maxScrollLeft;
      }
    }

    if (projectsContainerHeight != 0) {
      /* Detect Webpage Scroll */
      window.addEventListener("scroll", handleScroll);
    }

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [projectsContainerHeight]);

  return (
    <Box sx={{ position: "relative" }}>
      {/* This box isn't the best way? Prevents children hover without zIndex++ */}
      
      { /* THIS THINGY DOES THE GRADIENT SWITCH FOR THE PROJECTS */ }
      <Box
        sx={{
          position: "absolute",
          // Hacky way to account for Events Bar...
          top: `${JSON.parse(window.localStorage.getItem("events-visible") as string) ? 30 : 0}px`,
          left: 0,
          width: "100%",
          height: "100%",
          background:
            "radial-gradient(55% 55% at -3% 104%, #0F114AFF 13%, #07074178 41%, #00000014 76%, #073AFF00 99%),radial-gradient(25% 25% at 62% 54%, #2324A9C4 0%, #073AFF00 100%),radial-gradient(25% 44% at 83% 33%, #434EA3FF 0%, #44579D29 65%, #073AFF00 93%),radial-gradient(49% 81% at 45% 47%, #0891A245 0%, #073AFF00 100%),radial-gradient(113% 91% at 17% -2%, #6122A6FF 1%, #FF000000 99%),radial-gradient(142% 91% at 83% 7%, #0522A9FF 1%, #FF000000 99%),radial-gradient(142% 91% at -6% 74%, #1C2581FF 1%, #FF000000 99%),radial-gradient(142% 91% at 109% 60%, #131B36FF 0%, #205353FF 99%)",
          opacity: (scrollY > window.innerHeight - 700) ? 0 : 1,
          transition: "opacity 0.5s ease",
          backgroundAttachment: "fixed",
        }}
      />
      <Box
        sx={{
          //background:
          //  "radial-gradient(55% 50% at 48% 52%, #234ACCFF 0%, #234ACCFF 0%, #0B1E55FF 72%, #091038FF 100%)",
          background: "linear-gradient(312deg, rgba(0,191,255,1) 0%, rgba(74,105,232,1) 35%, rgba(111,62,220,1) 63%, rgba(156,0,255,1) 100%);",
          backgroundSize: "100% 100%",
          backgroundAttachment: "fixed",
        }}
      >
        {
          /* Live Events bar */
          liveEvents.length < 1 ? <></> : <WebEventsBar events={liveEvents} />
        }

        {/* Fixed App Bar */}
        <WebAppBar links={webAppBarLinks} fullWidth />
        <Box sx={{ height: "50px" }}></Box>
        <ScrollContainer
          style={{
            position: statsContainerPosition,
            scrollBehavior: "smooth",
            overflow: "visible",
            width: '100%',
            height: '100%',
          }}
        >
          <ScrollPage style={{
            width: '100%',
            overflow: "visible",
            flexDirection: 'column',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'flex-start',
          }}>
            <Animator
              style={{ width: "100%", overflow: "visible" }}
              animation={batch(
                DelayedFadeOut(1, -0.5, 0.0),
                DelayedZoomOut(3, 1, 0),
                DelayedMoveOut(0, -400, 0)
              )}
            >
              <div id="stars1"></div>
              <div id="stars2"></div>
              <div id="stars3"></div>
              <Typography
                sx={{
                  flexGrow: 1,
                  fontSize: "4vw",
                  fontWeight: "bold",
                  textAlign: "center",
                }}
              >
                Empower Code. Inspire Design.<br />Drive Innovation.
              </Typography>
              <Box
                sx={{
                  display: "flex",
                  flex: 1,
                  flexWrap: "wrap",
                  gap: 4,
                  marginLeft: { md: 8 },
                  marginRight: { md: 8 },
                  marginTop: "5vw",
                  flexDirection: { xs: "column", md: "row" },
                }}
              >
                <Stats
                  end={500000}
                  title={"Dollars Saved"}
                  prefix={"$"}
                  minWidth={336}
                  alignSelf={{ xs: "center", md: "flex-start" }}
                />
                <Stats end={150} title={"Members"} minWidth={81} />
                <Stats
                  end={50000}
                  title={"Lines of Code"}
                  minWidth={267}
                  alignSelf={{ xs: "center", md: "flex-end" }}
                />
              </Box>
            </Animator>
          </ScrollPage>
        </ScrollContainer>

        <Box sx={{ height: "100vh" }} />
        {
          (mobileView) ?
            <Box>
              <LandingProjectCards
                mobileView={true}
                data={data}
                isLoading={isLoading}
                error={error}
                ref={projectsContainer}
                position={projectsContainerPosition}
                height={projectsContainerHeight}
              />
            </Box> :
            <>
              {/* DO NOT EDIT: Horizontal Scroll Wrapper Start */}
              <Box
                id="projects"
                display={window.scrollY > window.innerHeight ? "block" : "none"}
                sx={{ height: `${projectsContainerHeight}px` }}
              ></Box>
              <LandingProjectCards
                data={data}
                isLoading={isLoading}
                error={error}
                ref={projectsContainer}
                position={projectsContainerPosition}
                height={projectsContainerHeight}
              />

              <Box
                display={
                  window.scrollY > projectsContainerHeight + window.innerHeight
                    ? "none"
                    : "block"
                }
                sx={{ height: "580px" }}
              />
              {/* DO NOT EDIT: Horizontal Scroll Wrapper End */}
            </>
        }

        {

            /* FUTURE: Add Appropriate Case */
            (mobileView && !mobileView) ? <></> :
            <Box
              sx={{
                paddingTop: "100px",
                background:
                  "linear-gradient(0deg, #00FFFF00 0%, #000000FF 44%, #000000FF 50%, #000000FF 56%, #073AFF00 100%)",
                transition: "opacity 0.5s ease",
                opacity: membersOnScreen ? 1 : 0,
              }}
            >
              <Sparkles
                id="members_sparkles"
                background="transparent"
                minSize={0.6}
                maxSize={1.4}
                particleDensity={50}
                particleColor="#FFFFFF"
              />
              <Box
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  justifyContent: "center",
                }}
                ref={membersRef}
              >
                <MemberCarousel id="team" />
              </Box>
              <Sparkles
                id="members_sparkles2"
                background="transparent"
                minSize={0.6}
                maxSize={1.4}
                particleDensity={50}
                particleColor="#FFFFFF"
              />
            </Box>
        }

        <Box sx={{ height: "150px" }}></Box>
        {
          (mobileView) ? <></> :
            <SponsorCardsStack />
        }

        <Box sx={{ height: "300px" }}></Box>
        {/* Translucent App Bar, Last Element, On Top of All */}

        <Footer />
        <WebAppBar
          links={webAppBarLinks}
          translucent={true}
          sx={{
            marginTop: "25px",
            zIndex: 2,
            position: "fixed",
            top: `${translucentAppBarTop}px`,
            left: "0px",
          }}
        />
      </Box>
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
