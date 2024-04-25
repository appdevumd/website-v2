import { Box, Typography } from "@mui/material";
import { animated, useSpring } from "react-spring";
import { StatsCounter } from "./interfaces";

const AnimatedTypography = animated(Typography);

function Stats({
  end,
  title,
  prefix,
  start,
  minWidth,
  alignSelf,
}: StatsCounter) {
  const { number } = useSpring({
    from: { number: start || 0 },
    number: end,
    config: { mass: 1, tension: 20, friction: 10 },
  });

  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        flexDirection: "column",
        flex: 1,
        minWidth: minWidth,
      }}
    >
      <Box
        sx={{
          display: "flex",
          flex: 1,
          alignItems: "center",
          flexDirection: "column",
        }}
      >
        <Box
          sx={{
            display: "flex",
            flex: 1,
            alignItems: "flex-start",
            alignSelf: alignSelf || "center",
          }}
        >
          <Box
            sx={{
              flexDirection: "row",
              alignItems: "center",
              alignSelf: "center",
              justifyContent: "center",
              display: "flex",
              flex: 1,
            }}
          >
            <Typography
              sx={{ fontSize: "calc(40px + 2vw)", fontWeight: "bold" }}
            >
              {prefix}
            </Typography>
            <AnimatedTypography
              sx={{
                fontSize: "calc(40px + 2vw)",
                fontWeight: "bold",
              }}
            >
              {number.to((n: number) => Math.floor(n).toLocaleString("en-US"))}
            </AnimatedTypography>
            <Typography
              sx={{ fontSize: "calc(40px + 2vw)", fontWeight: "bold" }}
            >
              +
            </Typography>
          </Box>
        </Box>
        <Typography
          sx={{
            fontSize: "calc(15px + 0.5vw)",
            alignSelf: alignSelf || "center",
          }}
        >
          {title}
        </Typography>
      </Box>
    </Box>
  );
}

export default Stats;
