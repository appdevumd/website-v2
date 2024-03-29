import { Box, Typography } from "@mui/material";
import { animated, useSpring } from "react-spring";
import { StatsCounter } from "./interfaces";

const AnimatedTypography = animated(Typography);

function Stats({ end, title, prefix, start }: StatsCounter) {
  const { number } = useSpring({
    from: { number: start || 0 },
    number: end,
    config: { mass: 1, tension: 20, friction: 10 },
  });

  return (
    <Box
      sx={{
        display: "inline-block",
        justifyContent: "center",
        flexDirection: "column",
        border: 1,
        width: "33%",
      }}
    >
      <Box
        sx={{
          marginRight: 10,
          left: end == 150 ? "30%" : "",
          position: "relative",
          border: 1,
        }}
      >
        <Box
          sx={{
            flexDirection: "row",
            alignItems: "center",
            alignSelf: "center",
            display: "inline-flex",
          }}
        >
          <Typography sx={{ fontSize: "60px", fontWeight: "bold" }}>
            {prefix}
          </Typography>
          <AnimatedTypography sx={{ fontSize: "80px", fontWeight: "bold" }}>
            {number.to((n: number) => Math.floor(n).toLocaleString("en-US"))}
          </AnimatedTypography>
          <Typography sx={{ fontSize: "45px", fontWeight: "bold" }}>
            +
          </Typography>
        </Box>
        <Typography sx={{ fontSize: "20px" }}>{title}</Typography>
      </Box>
    </Box>
  );
}

export default Stats;
