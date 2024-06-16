import React from "react";
import { Outlet } from "react-router-dom";
import { WebEvent } from "./components/WebEventsBar/interfaces";
import WebEventsBar from "./components/WebEventsBar";
import WebAppBar from "./components/WebAppBar";
import { WebAppBarLink } from "./components/WebAppBar/interfaces";
import { Box } from "@mui/material";
import Footer from "./components/Footer";

/* Define WebAppBar Links */
const webAppBarLinks: WebAppBarLink[] = [
  { title: "Home", anchor: "/#maindiv-001" },
  { title: "Projects", anchor: "/#subdiv-002" },
  { title: "Our Team", anchor: "/#team" },
  { title: "Sponsors", anchor: "/#sponsors" },
  { title: "Contact Us", anchor: "/#contact" },
];

function App() {
  /* AppBar and Events State */
  const [translucentAppBarTop, setTranslucentAppBarTop] = React.useState(-120);
  const [liveEvents,] = React.useState<WebEvent[]>([
    { title: "General Body Meeting, 3/25 8pm @ Iribe" },
  ]);

  React.useEffect(() => {
    function handleScrollWebAppBar() {
      /* Use Minimum Scroll Listeners. Performance is Important. */
      const scrollY = window.scrollY;
    
      /* Set App Bar to Translucent Mode if Scroll is Over 100 */
      setTranslucentAppBarTop(Math.min(scrollY - 120, 0));
    }

    /* Detect Webpage Scroll */
    window.addEventListener("scroll", handleScrollWebAppBar);

    /* Cleanup Function */
    return () => {
      window.removeEventListener("scroll", handleScrollWebAppBar);
    }
  }, []);

  return (
    <>
      {
        /* Live Events bar */
        liveEvents.length < 1 ? <></> : <WebEventsBar events={liveEvents} />
      }

      {/* Fixed App Bar */}
      <WebAppBar links={webAppBarLinks} fullWidth sx={{ backgroundColor: "transparent" }} />

      {/* Translucent App Bar, Last Element, On Top of All */}
      <WebAppBar
        links={webAppBarLinks}
        translucent={true}
        sx={{
          zIndex: 2,
          marginTop: "25px",
          position: "fixed",
          top: `${translucentAppBarTop}px`,
          left: "0px",
        }}
      />

      <Outlet />

      <Box sx={{ position: "relative" }}>
        <Footer />
      </Box>
    </>
  );
}

export default App;
