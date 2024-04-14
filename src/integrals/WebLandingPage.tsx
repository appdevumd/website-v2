import { Box, Typography } from "@mui/material";
import React from "react";
import WebEventsBar from "../components/WebEventsBar";
import { WebEvent } from "../components/WebEventsBar/interfaces";
import WebAppBar from "../components/WebAppBar";
import { WebAppBarLink } from "../components/WebAppBar/interfaces";
import LandingProjectCard from "../components/LandingProjectCard";
import MemberCarousel from "../components/MemberCarousel";
import Stats from "../components/Stats";
import {
  Animator,
  Move,
  ScrollContainer,
  ScrollPage,
  batch,
  Animation,
} from "react-scroll-motion";

export default function WebLandingPage() {
  const projectsContainer = React.useRef<HTMLDivElement>();
  const [liveEvents, setLiveEvents] = React.useState<WebEvent[]>([
    { title: "General Body Meeting, 3/25 8pm @ Iribe" },
  ]);
  const [translucentAppBarTop, setTranslucentAppBarTop] = React.useState(-120);
  const [projectsContainerPosition, setProjectsContainerPosition] =
    React.useState<string>("fixed");

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
      setProjectsContainerPosition(
        scrollY > 2600 || scrollY < 400 ? "unset" : "fixed"
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
      <ScrollContainer>
        <ScrollPage>
          <Animator
            animation={batch(
              DelayedFadeOut(1, -1, 0.2),
              DelayedZoomOut(2, 1, 0.2),
              Move(0, -150)
            )}
            style={{ width: "100%" }}
          >
            <Typography
              sx={{
                flexGrow: 1,
                fontSize: "4vw",
                fontWeight: "bold",
                margin: 5,
                marginTop: "5vw",
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
                marginTop: 10,
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

      <Box sx={{ height: "2000px" }}></Box>
      <Box
        ref={projectsContainer}
        sx={{
          display: "flex",
          gap: "30px",
          padding: "50px",
          maxWidth: "100%",
          overflowX: "hidden",
          position: projectsContainerPosition,
          top: window.scrollY > 200 ? "120px" : "720px",
        }}
      >
        <LandingProjectCard
          project={{
            id: "1234567",
            name: "Space Safety Visualizer",
            organization: "Amazon",
            description:
              "The Fall 2023 Amazon project was a low Earth orbit satellite visualization system. This was designed for Project Kuiper as a way to visualize satellite collision risk to non-technical stakeholders at Amazon.",
            members: [
              "Samai Patel",
              "Ishan Revankar",
              "Nitish Vobilisetti",
              "Neil Hajela",
              "Hadijat Oke",
              "Nand Vinchhi",
            ],
            cover: "null",
          }}
        />
        <LandingProjectCard
          project={{
            id: "1234567",
            name: "Space Safety Visualizer",
            organization: "Amazon",
            description:
              "The Fall 2023 Amazon project was a low Earth orbit satellite visualization system. This was designed for Project Kuiper as a way to visualize satellite collision risk to non-technical stakeholders at Amazon.",
            members: [
              "Samai Patel",
              "Ishan Revankar",
              "Nitish Vobilisetti",
              "Neil Hajela",
              "Hadijat Oke",
              "Nand Vinchhi",
            ],
            cover: "null",
          }}
        />
        <LandingProjectCard
          project={{
            id: "1234567",
            name: "Space Safety Visualizer",
            organization: "Amazon",
            description:
              "The Fall 2023 Amazon project was a low Earth orbit satellite visualization system. This was designed for Project Kuiper as a way to visualize satellite collision risk to non-technical stakeholders at Amazon.",
            members: [
              "Samai Patel",
              "Ishan Revankar",
              "Nitish Vobilisetti",
              "Neil Hajela",
              "Hadijat Oke",
              "Nand Vinchhi",
            ],
            cover: "null",
          }}
        />
      </Box>
      <Box sx={{ height: "700px" }}></Box>
      <MemberCarousel />

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
