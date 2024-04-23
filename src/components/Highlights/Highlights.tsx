import { Box, Typography } from "@mui/material";
import { Highlight } from "./interfaces";

function Highlights(props: {
  highlights: Highlight[];
  width: string;
}) {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        gap: "2rem",
        color: "white",
        width: props.width,
      }}
    >
      <HighlightsTitle />
      <Box sx={{
        display: "flex",
        flexWrap: "wrap",
        justifyContent: "start",
        alignItems: "center",
        gap: "2rem",
      }}>
        {props.highlights.map((highlight: Highlight, index: number) => (
          <HighlightDisplay key={index} highlight={highlight} primary={index == 0} />
        ))}
      </Box>
    </Box>
  )
}

function HighlightsTitle() {
  return (
    <Box
      style={{
        borderLeft: "solid white 8px",
        paddingLeft: "1rem",
      }}
    >
      <Typography
        variant="h2"
        sx={{
          fontWeight: "bold",
        }}
      >
        Highlights
      </Typography>
    </Box>
  )
}

function HighlightDisplay(props: {
  highlight: Highlight;
  primary: boolean;
}) {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: props.primary ? "row" : "column",
        gap: props.primary ? "2rem" : "0.25rem",
        width: props.primary ? "100%" : "calc(50% - 1rem)",
      }}
    >
      <Box
        sx={{
          width: props.primary ? "50%" : "100%"
        }}
      >
        <img
          src={props.highlight.imageUrl}
          width="100%"
          style={{
            aspectRatio: "16/9",
            background: "white",
            objectFit: "contain",
            borderRadius: "5px",
            boxSizing: "border-box",
            padding: "25px",
            marginBottom: props.primary ? "0" : "0.5rem",
            cursor: "pointer",
          }}
        />
      </Box>
      <Box
        sx={{
          width: props.primary ? "50%" : "100%"
        }}
      >
        <Typography
          sx={{
            fontWeight: "bold",
          }}
          variant="h5"
        >
          {props.highlight.title}
        </Typography>
        <Typography
          sx={{
            fontWeight: "semibold"
          }}
          variant="subtitle1"
        >
          {props.highlight.body}
        </Typography>
      </Box>
    </Box>
  )
}

export default Highlights;