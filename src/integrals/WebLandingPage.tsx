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
//import HighlightsContainer from "../components/HighlightsContainer";
import StayConnectedContainer from "../components/StayConnectedContainer";
import HighlightsContainer from "../components/HighlightsContainer";

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
  { title: "About", anchor: "/#maindiv-001" },
  { title: "Projects", anchor: "/#subdiv-002" },
  { title: "Our Team", anchor: "/#team" },
  { title: "Sponsors", anchor: "/#sponsors" },
  { title: "Highlights", anchor: "/#highlights" },
  { title: "Contact Us", anchor: "/#contact" },
];

export default function WebLandingPage() {
  function GetGradient(variant: number): string {
    switch (variant) {
      case 1: return "linear-gradient(30deg, #1e1e1e, #5626a1);"
      case 0: return "radial-gradient(55% 55% at -3% 104%, #0F114AFF 13%, #07074178 41%, #00000014 76%, #073AFF00 99%),radial-gradient(25% 25% at 62% 54%, #2324A9C4 0%, #073AFF00 100%),radial-gradient(25% 44% at 83% 33%, #434EA3FF 0%, #44579D29 65%, #073AFF00 93%),radial-gradient(49% 81% at 45% 47%, #0891A245 0%, #073AFF00 100%),radial-gradient(113% 91% at 17% -2%, #6122A6FF 1%, #FF000000 99%),radial-gradient(142% 91% at 83% 7%, #0522A9FF 1%, #FF000000 99%),radial-gradient(142% 91% at -6% 74%, #1C2581FF 1%, #FF000000 99%),radial-gradient(142% 91% at 109% 60%, #131B36FF 0%, #205353FF 99%)0"
      case -1: return "linear-gradient(to right, #667db6, #0082c8, #0082c8, #667db6);"
      case 2: return "linear-gradient(135deg, #000000, #120037, #2e002b, #170018);"
      case 3: return "radial-gradient(circle at 30% 30%, #5F0F40 0%, #310E68 30%, #5626a1 50%, #1e1e1e 70%, #330136 80%, #560bad 100%), linear-gradient(135deg, #5F0F40, #310E68);";
      case 4: return "linear-gradient(135deg, #060101, #0e0202, #160303, #1e0404);"
      case -2: return "linear-gradient(to right, #667db6, #0082c8, #0082c8, #667db6);"
      default: return "black";
    }
  };

  /* AppBar and Events State */
  const mobileView = useMediaQuery(AppThemeController.baseTheme.breakpoints.down('md'));
  const [translucentAppBarTop, setTranslucentAppBarTop] = React.useState(-120);
  const [liveEvents] = React.useState<WebEvent[]>([]);

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
  const teamBoxRef = useRef<HTMLDivElement>(null);
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
      const projectsBoxEnd = projectsBoxStart + (projectsBoxRef?.current?.offsetHeight ?? 0) + 50;
      const teamBoxStart = (teamBoxRef?.current?.offsetTop ?? 0) - 50;
      const teamBoxEnd = teamBoxStart + (teamBoxRef?.current?.offsetHeight ?? 0) + 100;
      const sponsorsBoxStart = (sponsorsBoxRef?.current?.offsetTop ?? 0) - 100;
      const sponsorsBoxEnd = sponsorsBoxStart + (sponsorsBoxRef?.current?.offsetHeight ?? 0) + 400;
      const highlightsBoxStart = sponsorsBoxEnd;
      //const highlightsBoxEnd = highlightsBoxStart + 1000;


      if (mainBoxPos > projectsBoxStart && mainBoxPos < projectsBoxEnd)
        SetBackgroundMode(1);

      else if (mainBoxPos > teamBoxStart && mainBoxPos < teamBoxEnd)
        SetBackgroundMode(2);

      else if (mainBoxPos > sponsorsBoxStart && mainBoxPos < sponsorsBoxEnd)
        SetBackgroundMode(2);

      else if (mainBoxPos > highlightsBoxStart)
        SetBackgroundMode(4);

      else
        SetBackgroundMode(0);

    });
  }, []);

  const [statsContainerPosition] = React.useState<"fixed" | "unset">("fixed");

  const { data, isLoading, error } = useQuery({
    queryKey: ["projects"],
    queryFn: async () => {
      let res = await ProjectAPI.getAll();
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
                  end={1000000}
                  title={"Dollars Saved"}
                  prefix={"$"}
                  minWidth={336}
                  alignSelf={{ xs: "center", md: "flex-start" }}
                />
                <Stats end={300} title={"Members"} minWidth={81} />
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
              ref={teamBoxRef}
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
        <Box id="sponsors" ref={sponsorsBoxRef}>
          <SponsorCardsStack mobileView={mobileView} />
        </Box>

        <Box id="paddingdiv-004" sx={{ height: "300px" }}></Box>
        <Typography id="highlights" sx={{ fontSize: '3rem', fontWeight: 'bold', textAlign: 'center' }}>Highlights</Typography>
        <HighlightsContainer />
       
        <Box id="paddingdiv-006" sx={{ height: "200px" }}></Box>
        <StayConnectedContainer id="contact" />
        
        {/* Translucent App Bar, Last Eleme,nt, On Top of All */}
        <Box id="paddingdiv-006" sx={{ height: "200px" }}></Box>

        <Footer />
        <WebAppBar
          links={webAppBarLinks}
          translucent={true}
          sx={{
            marginTop: "25px",
            zIndex: 5,
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
            backgroundBlendMode: transitionBackground.start == 3 ? 'color-dodge' : 'unset',
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
