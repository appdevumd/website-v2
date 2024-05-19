import { Avatar, Box, Chip, Paper, SxProps, Typography } from "@mui/material";
import Atropos from "atropos/react";
import { useNavigate } from "react-router-dom";
import { LandingProject, Member } from "./interfaces";
import stringAvatar from "./utils";
import Marquee from "react-fast-marquee";
import { ReactElement } from "react";

function LandingProjectCard(props: { sx?: SxProps, mobileView: boolean, project: LandingProject }) {
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
            ...props?.sx,
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
        </Paper>
      </Atropos> :
      <Paper
        elevation={5}
        sx={{
          ...props?.sx,
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
  function AvatarChipsChildren(): ReactElement {
    return (
      <>
        {props.members.map((member: Member, index: number) => (
          <Chip
            key={index}
            label={`${member.memberInfo.firstName} ${member.memberInfo.lastName}`}
            variant="outlined"
            sx={{
              color: "black",
              margin: '5px'
            }}
            avatar={
              member.memberInfo.profileUrl ? (
                <Avatar src={member.memberInfo.profileUrl} />
              ) : (
                <Avatar {...stringAvatar(`${member.memberInfo.firstName} ${member.memberInfo.lastName}`)} />
              )
            }
          />
        ))}
      </>
    );
  }

  return (
    (props.autoScroll) ?
      <Marquee>
        <AvatarChipsChildren />
      </Marquee> :
      <Box
        sx={{
          marginTop: "10px",
          display: "flex",
          flexWrap: "wrap",
        }}
      >
        <AvatarChipsChildren />
      </Box>
  )
}

export default LandingProjectCard;
