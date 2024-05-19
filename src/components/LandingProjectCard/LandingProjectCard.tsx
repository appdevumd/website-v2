import { Avatar, Box, Chip, Paper, Typography } from "@mui/material";
import Atropos from "atropos/react";
import { useNavigate } from "react-router-dom";
import { LandingProject, Member } from "./interfaces";
import stringAvatar from "./utils";
import "./LandingProjectCard.css";

function LandingProjectCard(props: { mobileView: boolean, project: LandingProject }) {
  const navigate = useNavigate();
  const handleCardClick = (project: LandingProject) =>
    navigate(`/project/${project._id}`);

  return (
    (!props.mobileView) ?
      <Atropos
        highlight={false}
        onClick={() => {
          handleCardClick(props.project);
        }}
        style={{ minWidth: "800px", height: "60vh", cursor: "pointer" }}
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
            <AvatarChips
              members={props.project.members}
            />
          </Box>

          {/* Image Goes Here
        <Box
          data-atropos-offset="5"
          sx={{
            borderRadius: "35px",
            background: "pink",
            minWidth: "40%",
            height: "100%",
          }}
        ></Box>
        */}
        </Paper>
      </Atropos> :
      <Paper
        sx={{
          borderRadius: "35px",
          padding: "30px",
          display: "flex",
          flexDirection: 'column',
          gap: "15px",
          color: "#000000",
          bgcolor: "#ffffff",
          maxWidth: "100%",
          height: "400px",
          overflow: 'hidden'
        }}
      >
        <Box sx={{ display: "flex", flexDirection: "column", flexGrow: 1, overflow: 'hidden', width: '100%' }}>
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
        <AvatarChips
          autoScroll
          members={props.project.members}
        />
      </Paper>
  );
}

function AvatarChips(props: { autoScroll?: boolean, members: Member[] }) {
  return (
    <Box
      className={(props.autoScroll) ? "avatar-chips-autoscroll" : ""}
      sx={{
        marginTop: "10px",
        display: "flex",
        flexWrap: (props.autoScroll) ? "nowrap" : "wrap",
        gap: "10px", //need fixes
        animation: (props.autoScroll) ? `achips-autoscroll ${props.members.length}s linear infinite` : "",
      }}
    >
      {props.members.map((member: Member, index: number) => (
        <Chip
          sx={{
            color: "black",
          }}
          key={index}
          avatar={
            member.memberInfo.profileUrl ? (
              <Avatar src={member.memberInfo.profileUrl} />
            ) : (
              <Avatar {...stringAvatar(`${member.memberInfo.firstName} ${member.memberInfo.lastName}`)} />
            )
          }
          label={`${member.memberInfo.firstName} ${member.memberInfo.lastName}`}
          variant="outlined"
        />
      ))}
    </Box>
  )
}

export default LandingProjectCard;
