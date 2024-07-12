import { useQuery } from "@tanstack/react-query";
import { useParams } from "react-router-dom";
import ProjectAPI from "../api/projects.api";
import {
  Alert,
  Avatar,
  Box,
  Card,
  CardMedia,
  CircularProgress,
  Divider,
  Typography,
} from "@mui/material";
import { Member } from "../components/LandingProjectCard/interfaces";
import stringAvatar from "../components/LandingProjectCard/utils";
import { useEffect } from "react";

export default function WebProjectsPage() {
  const { projectId } = useParams();

  const { data, isFetching, error } = useQuery({
    queryKey: ["project"],
    queryFn: async () => {
      return await ProjectAPI.getById(projectId as string);
    },
  });

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  if (isFetching) {
    return (
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          width: "100vw",
          minHeight: "100vh",
        }}
      >
        <CircularProgress />
      </Box>
    );
  }

  if (error) {
    return (
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          width: "100vw",
          minHeight: "100vh",
        }}
      >
        <Alert variant="filled" severity="error">
          Unable to retrieve project data...
        </Alert>
      </Box>
    );
  }

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        gap: "20px",
        justifyContent: "center",
        alignItems: "center",
        minHeight: "100vh",
      }}
    >
      <ProjectTitle name={data.name} organization={data.organization} />
      <ProjectOverview description={data.description} />
      <ProjectDemo demo={data.demo} />
      <ProjectMembers members={data.members} />
    </Box>
  );
}

function ProjectTitle(props: { name: string; organization: string }) {
  return (
    <Box
      sx={{
        width: "clamp(25rem, 50vw, 60rem)",
      }}
    >
      <Typography
        variant="h2"
        sx={{
          fontWeight: "bold",
        }}
      >
        {props.name}
      </Typography>
      <Typography
        variant="h4"
        sx={{
          fontStyle: "italic",
        }}
      >
        In collaboration with {props.organization}
      </Typography>
    </Box>
  );
}

function ProjectOverview(props: { description: string }) {
  return (
    <Box
      sx={{
        width: "clamp(25rem, 50vw, 60rem)",
      }}
    >
      <Typography
        variant="h5"
        sx={{
          fontWeight: "bold",
        }}
      >
        Project Overview
      </Typography>
      <Divider sx={{ margin: "0.5rem 0", backgroundColor: "white" }} />
      <Typography>{props.description}</Typography>
    </Box>
  );
}

function ProjectDemo(props: { demo: string }) {
  return (
    <Box>
      <Typography
        variant="h5"
        sx={{
          fontWeight: "bold",
        }}
      >
        Project Demo
      </Typography>
      <Divider sx={{ margin: "0.5rem 0", backgroundColor: "white" }} />
      <Card
        sx={{
          marginTop: "15px",
          borderRadius: "5px",
          width: "clamp(25rem, 50vw, 60rem)",
          backgroundColor: "white",
          color: "black",
        }}
      >
        {
          (props.demo) ?
          <CardMedia
          component="iframe"
          image={props.demo}
          sx={{
            width: "inherit",
            aspectRatio: "16/9",
            border: "none",
          }}
        />:
        <Typography sx={{ padding: '15px' }}>
          To see a demo of this product, please contact us at umdappdev@gmail.com
        </Typography>
        }
      </Card>
    </Box>
  );
}

function ProjectMembers(props: { members: Member[] }) {
  return (
    <Box
      sx={{
        width: "clamp(25rem, 50vw, 60rem)",
      }}
    >
      <Typography
        variant="h5"
        sx={{
          fontWeight: "bold",
        }}
      >
        Project Members
      </Typography>
      <Divider sx={{ margin: "0.5rem 0", backgroundColor: "white" }} />
      <Box
        sx={{
          marginTop: "15px",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          flexWrap: "wrap",
          gap: "10px",
        }}
      >
        {props.members.map((member: Member, index: number) => (
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
              backgroundColor: "white",
              borderRadius: "5px",
              color: "black",
              minWidth: "15%",
              padding: "1rem",
            }}
          >
            {member.memberInfo.profileUrl ? (
              <Avatar
                src={member.memberInfo.profileUrl}
                key={index}
                sx={{ width: "50px", height: "50px" }}
              />
            ) : (
              <Avatar
                {...stringAvatar(
                  `${member.memberInfo.firstName} ${member.memberInfo.lastName}`
                )}
                sx={{ width: "50px", height: "50px" }}
                key={index}
              />
            )}
            <Typography
              variant="subtitle1"
              sx={{
                fontWeight: "bold",
                marginTop: "5px",
              }}
            >
              {`${member.memberInfo.firstName} ${member.memberInfo.lastName}`}
            </Typography>
            <Typography
              variant="subtitle2"
              sx={{
                opacity: "0.75",
              }}
            >
              {member.role}
            </Typography>
          </Box>
        ))}
      </Box>
    </Box>
  );
}
