import { Box, Paper, Typography } from "@mui/material";
import Atropos from "atropos/react";
import { useNavigate } from "react-router-dom";
import { LandingProject } from "./interfaces";

function LandingProjectCard(props: { project: LandingProject }) {
  const navigate = useNavigate();
  const handleCardClick = (project: LandingProject) =>
    navigate(`/project/${project.id}`);

  return (
    <Atropos
      highlight={false}
      onClick={() => {
        handleCardClick(props.project);
      }}
      style={{ minWidth: "50vw", height: "480px", cursor: "pointer" }}
    >
      <Paper
        sx={{
          borderRadius: "35px",
          padding: "30px",
          display: "flex",
          gap: "15px",
          color: "#000000",
          bgcolor: "#ffffff",
          width: "100%",
          height: "100%",
        }}
      >
        <Box sx={{ display: "flex", flexDirection: "column", flexGrow: 1 }}>
          <Typography sx={{ fontSize: "1.5rem", fontWeight: 700 }}>
            {props.project.name}
          </Typography>
          <Typography sx={{ fontSize: "1.3rem", fontWeight: 500 }}>
            {props.project.organization}
          </Typography>
          <Typography sx={{ marginTop: "10px" }} variant="body1">
            {props.project.description}
          </Typography>
        </Box>

        {/* Image Goes Here */}
        <Box
          data-atropos-offset="5"
          sx={{
            borderRadius: "35px",
            background: "pink",
            minWidth: "40%",
            height: "100%",
          }}
        ></Box>
      </Paper>
    </Atropos>
  );
}

export default LandingProjectCard;
