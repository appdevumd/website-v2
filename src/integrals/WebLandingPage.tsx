import { Box, Typography, useMediaQuery } from "@mui/material";
import React, { forwardRef, useRef } from "react";
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
import Sparkles from "../components/Sparkles";
import AppThemeController from "../middleware/AppThemeController";
import SponsorCardsStack from "../components/SponsorCardsStack";
import VerticalCardStack from "../components/VerticalCardStack";
import { useScroll } from "framer-motion";
import "./WebLandingPage.css";

const LandingProjectCards = forwardRef((props: {
  id?: string,
  sx: any,
  isLoading: boolean,
  error: Error | null,
  data: LandingProject[],
  mobileView?: boolean,
}, ref) => {
  if (props.isLoading) {
    return "Loading...";
  }

  if (props.error) {
    return props.error.message;
  }

  const cardContainer = React.useRef<HTMLDivElement>(null);
  const cardsRef = React.useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: cardContainer,
    offset: ['start start', 'end end']
  });

  React.useEffect(() => {
    scrollYProgress.on("change", (e) => {
      if (cardsRef.current)
        cardsRef.current.scrollLeft = (cardsRef.current.scrollWidth - cardsRef.current.clientWidth) * e;
    });
  }, []);

  return (
    <Box ref={ref}>
      {
        (!props.mobileView) ?
          <Box
            ref={cardContainer}
            sx={{
              height: `${props.data.length * 600}px`
            }}
          >
            <Box
              id={props.id}
              ref={cardsRef}
              sx={{
                display: "flex",
                gap: "30px",
                padding: "80px 50px 80px 50px",
                maxWidth: "100%",
                overflowX: "hidden",
                top: '100px',
                position: 'sticky',
              }}
            >
              {props.data.map((project: LandingProject) => (
                <LandingProjectCard mobileView={false} key={project._id} project={project} />
              ))}
            </Box>
          </Box> :
          <VerticalCardStack title="Projects" sx={{ padding: '20px' }}>
            {
              props.data.map((project: LandingProject) => (
                <LandingProjectCard mobileView key={project._id} project={project} />
              ))
            }
          </VerticalCardStack>
      }
    </Box>
  );
});

/* Define WebAppBar Links */
const webAppBarLinks: WebAppBarLink[] = [
  { title: "About", anchor: "#maindiv-001" },
  { title: "Projects", anchor: "#subdiv-002" },
  { title: "Our Team", anchor: "#team" },
  { title: "Sponsors", anchor: "#sponsors" },
  { title: "Highlights", anchor: "#highlights" },
  { title: "Contact Us", anchor: "#contact" },
];

export default function WebLandingPage() {
  function GetGradient(variant: number): string {
    switch (variant) {
      case 0: return "linear-gradient(to bottom, #000428, #004e92);"
      case 1: return "linear-gradient(to right, #667db6, #0082c8, #0082c8, #667db6);"
      case 2: return "linear-gradient(135deg, #5F0F40, #310E68);";
      default: return "black";
    }
  };

  /* AppBar and Events State */
  const mobileView = useMediaQuery(AppThemeController.baseTheme.breakpoints.down('md'));
  const [translucentAppBarTop, setTranslucentAppBarTop] = React.useState(-120);
  const [liveEvents] = React.useState<WebEvent[]>([
    { title: "General Body Meeting, 3/25 8pm @ Iribe" },
  ]);

  /* Background Gradients */
  const [transitionBackground, setTransitionBackground] = React.useState({ start: 0, end: 0 });
  const [isTransitioning, setIsTransitioning] = React.useState(false);
  React.useEffect(() => {
    if (isTransitioning) {
      setTimeout(() => {
        setTransitionBackground((tb) => {
          setIsTransitioning(false);
          tb.start = tb.end;
          return tb;
        });
      }, 200);
    }
  }, [isTransitioning]);

  /* Gradient Change */
  function SetBackgroundMode(variant: number) {
    setTransitionBackground((tb) => {
      if (tb.end != variant) {
        setIsTransitioning(true);
        tb.start = tb.end;
        tb.end = variant;
        console.warn(`Gradient Transition: ${tb.start} -> ${tb.end}`);
      }

      return tb;
    });
  }

  /* Section Refs */
  const mainBoxRef = useRef<HTMLDivElement>(null);
  const aboutBoxRef = useRef<HTMLDivElement>(null);
  const projectsBoxRef = useRef<HTMLDivElement>(null);
  const sponsorsBoxRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: mainBoxRef,
    offset: ['start start', 'end end'],
  });

  React.useEffect(() => {
    scrollYProgress.on("change", (e) => {
      /* App Bar Controller */
      setTranslucentAppBarTop(Math.min(-120 * (1 - (30 * e)), 0));

      /* Gradient Controller */
      const mainBoxPos = (mainBoxRef.current?.offsetHeight ?? 0) * e;
      const projectsBoxStart = (projectsBoxRef?.current?.offsetTop ?? 0) - 100;
      const projectsBoxEnd = projectsBoxStart + (projectsBoxRef?.current?.offsetHeight ?? 0);
      const sponsorsBoxStart = (sponsorsBoxRef?.current?.offsetTop ?? 0) + 50;
      const sponsorsBoxEnd = sponsorsBoxStart + (sponsorsBoxRef?.current?.offsetHeight ?? 0);

      if (mainBoxPos > projectsBoxStart && mainBoxPos < projectsBoxEnd)
        SetBackgroundMode(1)

      else if (mainBoxPos > sponsorsBoxStart && mainBoxPos < sponsorsBoxEnd)
        SetBackgroundMode(2);

      else
        SetBackgroundMode(0);
    
    });
  }, []);

  const [statsContainerPosition] = React.useState<"fixed" | "unset">("fixed");

  const { data, isLoading, error } = useQuery({
    queryKey: ["projects"],
    queryFn: async () => {
      let res = await ProjectAPI.getAll();
      res = res.concat(res).concat(res); //testing
      return res;
    },
  });

  return (
    <>
      <Box
        ref={mainBoxRef}
        id="maindiv-001"
        sx={{ position: "relative" }}
      >
        {
          /* Live Events bar */
          liveEvents.length < 1 ? <></> : <WebEventsBar events={liveEvents} />
        }

        {/* Fixed App Bar */}
        <WebAppBar links={webAppBarLinks} fullWidth />
        <Box id="paddingdiv-001" sx={{ height: "50px" }}></Box>
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
                id="subdiv-001"
                ref={aboutBoxRef}
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

        <Box id="paddingdiv-002" sx={{ height: "100vh" }} />
        {
          (mobileView) ?
            <Box ref={projectsBoxRef} sx={{ padding: '10px' }} id="subdiv-002">
              <LandingProjectCards
                sx={{}}
                mobileView={true}
                data={data}
                isLoading={isLoading}
                error={error}
              />
            </Box> :
            <Box ref={projectsBoxRef} id="subdiv-002">
              <LandingProjectCards
                sx={{ height: '300vh' }}
                data={data}
                isLoading={isLoading}
                error={error}
              />
            </Box>
        }

        {

          /* FUTURE: Add Appropriate Case */
          (mobileView && !mobileView) ? <></> :
            <Box
              id="team"
              sx={{
                paddingTop: "100px",
                background:
                  "linear-gradient(0deg, #00FFFF00 0%, #000000FF 44%, #000000FF 50%, #000000FF 56%, #073AFF00 100%)",
                transition: "opacity 0.5s ease",
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
              >
                <MemberCarousel id="member-carousel" />
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

        <Box id="paddingdiv-003" sx={{ height: "150px" }}></Box>
        {
          (mobileView) ? <></> :
            <Box id="sponsors" ref={sponsorsBoxRef}>
              <SponsorCardsStack />
            </Box>
        }

        <Box id="paddingdiv-004" sx={{ height: "300px" }}></Box>
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
      <Box
        id="maindiv-002"
        sx={{
          height: '100vh',
          width: '100vw',
          position: 'fixed',
          zIndex: -1,
          top: '0px',
          '::before': {
            content: '""',
            position: 'absolute',
            top: 0,
            right: 0,
            bottom: 0,
            left: 0,
            background: GetGradient(transitionBackground.start),
            transition: 'opacity 0.4s',
            animation: 'plasma 6s ease infinite',
            opacity: isTransitioning ? 0.5 : 1,
            zIndex: 1,
          },
          '::after': {
            content: '""',
            position: 'absolute',
            top: 0,
            right: 0,
            bottom: 0,
            left: 0,
            background: GetGradient(transitionBackground.end),
            animation: 'plasma 6s ease infinite',
            transition: 'opacity 0.4s',
            opacity: isTransitioning ? 1 : 0.5,
            zIndex: 0,
          },
        }}
      />
    </>
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
