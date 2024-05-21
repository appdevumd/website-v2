import { Box, SxProps, Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";

function SponsorshipCard(props: {
  tier: string;
  backgroundColor: string;
  price: number;
  benefits: string[];
  prereq?: string;
  width?: string;
  aspectRatio?: string;
  sx?: SxProps
}) {
  return (
    <Box
      sx={{
        ...props?.sx,
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        alignItems: "center",
        width: props.width,
        backgroundColor: "white",
        borderRadius: "5px",
        boxShadow: 5,
        color: "black",
        wordBreak: "break-word", // To avoid overflow
      }}
    >
      <TierTitle
        tier={props.tier}
        backgroundColor={props.backgroundColor}
        price={props.price}
      />
      <TierDescription
        backgroundColor={props.backgroundColor}
        benefits={props.benefits}
        prereq={props.prereq}
      />
    </Box>
  );
}

function TierTitle(props: {
  tier: string;
  backgroundColor: string;
  price: number;
}) {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        width: "100%",
        height: "60%",
      }}
    >
      <Typography variant="h4" sx={{ textShadow: "-2px 2px 3px gray" }}>
        {props.tier}
      </Typography>
      <Typography variant="h2" sx={{ textShadow: "-2px 2px 3px gray" }}>
        ${props.price}+
      </Typography>
      <Typography
        variant="h6"
        gutterBottom={true}
        sx={{ textShadow: "-2px 2px 3px gray" }}
      >
        per year
      </Typography>
      <DetailsButton
        tier={props.tier}
        backgroundColor={props.backgroundColor}
      />
    </Box>
  );
}

function DetailsButton(props: { tier: string; backgroundColor: string }) {
  const navigate = useNavigate();
  
  return (
    <Box
      sx={{
        marginTop: "0.75rem",
        padding: "0.5rem 1rem",
        boxShadow: 1,
        backgroundColor: props.backgroundColor,
        borderRadius: "5px",
        width: "80%",
        textAlign: "center",
        cursor: "pointer",
      }}
      onClick={() => navigate(`/tier/${props.tier}`)}
    >
      <Typography>Select {props.tier} Tier →</Typography>
    </Box>
  );
}

function TierDescription(props: {
  backgroundColor: string;
  benefits: string[];
  prereq?: string;
}) {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "left",
        alignItems: "top",
        backgroundColor: props.backgroundColor,
        borderRadius: "5px",
        padding: "1.5rem",
        boxShadow: 12,
        width: "105.5%",
        height: "40%",
        boxSizing: "border-box" // To make width and height include padding
      }}
    >
      {props.prereq && <Typography gutterBottom>{`< Everything included in ${props.prereq}, plus...`}</Typography>}
      {props.benefits.map((benefit: string, index: number) => (
        <Typography key={index}>{`> ${benefit}`}</Typography>
      ))}
    </Box>
  );
}

export default SponsorshipCard;
