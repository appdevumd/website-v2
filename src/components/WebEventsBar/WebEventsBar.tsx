import { Close } from "@mui/icons-material";
import { Box, IconButton, Link } from "@mui/material";
import React from "react";
import { WebEvent } from "./interfaces";

function WebEventsBar(props: { events: WebEvent[] }) {
  const [eventsVisible, setEventsVisible] = React.useState(false);

  const handleEventsClose = () => {
    window.localStorage.setItem("events-visible", "false");
    setEventsVisible(false);
  };

  React.useEffect(() => {
    if (window.localStorage.getItem("events-visible") == null)
      window.localStorage.setItem("events-visible", "true");

    /* Set Events Visible */
    const visibility = window.localStorage.getItem("events-visible");
    setEventsVisible(visibility != null ? JSON.parse(visibility) : true);
  }, []);

  return (
    <Box
      sx={{
        background: "#16F4D0",
        color: "#000000",
        fontWeight: 600,
        display: eventsVisible ? "flex" : "none",
        justifyContent: "center",
        alignItems: "center",
        height: "30px",
      }}
    >
      <Box sx={{ flexGrow: 1, display: "flex", justifyContent: "center" }}>
        {props.events.map((event) => (
          <Link
            key={`${event.title}::${event.href}`}
            underline="hover"
            href={event.href}
            color="inherit"
          >
            {event.title}
          </Link>
        ))}
      </Box>
      <IconButton
        // Attribute used for testing purposes
        data-testid='events-close-button'
        onClick={handleEventsClose}
        sx={{
          color: "inherit",
          width: "25px",
          height: "25px",
          marginRight: "5px",
        }}
      >
        <Close sx={{ color: "inherit" }} />
      </IconButton>
    </Box>
  );
}

export default WebEventsBar;
