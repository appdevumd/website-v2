import {
  Box,
  Drawer,
  IconButton,
  Link,
  SxProps,
  Toolbar,
  Typography,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import React from "react";
import { Close } from "@mui/icons-material";
import { WebAppBarLink } from "./interfaces";
import { useNavigate } from "react-router-dom";

function WebAppBar(props: {
  sx?: SxProps;
  fullWidth?: boolean;
  translucent?: boolean;
  links: WebAppBarLink[];
}) {
  // const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const [drawerOpen, setDrawerOpen] = React.useState<boolean>(false);
  const nav = useNavigate();

  return (
    <Box
      sx={{
        ...props.sx,
        width: "100%",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Toolbar
        sx={{
          background: props.translucent
            ? "rgba(67,86,127, 0.5)"
            : "transparent",
          backdropFilter: props.translucent ? "blur(20px)" : "unset",
          margin: "5px 0px",
          borderRadius: "41px",
          paddingLeft: "40px !important",
          paddingRight: "40px !important",
          boxShadow: props.translucent ? 3 : 0,
          width: props.fullWidth ? "100%" : "90%",
          height: "80px",
          userSelect: "none",
        }}
      >
        <Box
          onClick={() => { nav("/"); }}
          sx={{
            height: "65%",
            display: "flex",
            flexGrow: 1,
            alignItems: 'center',
            cursor: 'pointer'
          }}
        >
          <img
            alt="adc-logo"
            src="/logo256.png"
            style={{ maxHeight: "100%", margin: "10px 0px 10px 0px" }}
          />
          <Typography
            sx={{
              fontSize: "1.3rem",
              fontWeight: "bold",
              marginLeft: "15px",
            }}
          >
            App Dev Club
          </Typography>
        </Box>

        {/* Links, Hide In Mobile. Provide Dropdown Instead */}
        <Box sx={{ display: { xs: "none", md: "flex" } }}>
          {props.links.map((link) => (
            <Link
              href={link.anchor}
              underline="hover"
              key={`${link.title}::${link.anchor}`}
              sx={{
                fontSize: "1rem",
                fontWeight: 600,
                marginLeft: "15px",
                marginRight: "10px",
                color: "inherit",
                ":hover": {
                  cursor: "pointer",
                },
              }}
            >
              {link.title}
            </Link>
          ))}
        </Box>

        {/* Hamburger Button, Show only on Mobile */}
        <IconButton
          onClick={() => {
            setDrawerOpen(true);
          }}
          sx={{
            color: "inherit",
            display: { xs: "flex", md: "none" },
          }}
        >
          <MenuIcon sx={{ fontSize: "1.8rem" }} />
        </IconButton>

        {/* Define Navigation Bar */}
        <Drawer
          anchor="right"
          open={drawerOpen}
          onClose={() => {
            setDrawerOpen(false);
          }}
          PaperProps={{
            sx: {
              width: "180px",
              bgcolor: "background.default",
              padding: "25px",
              backgroundImage: "unset",
            },
          }}
        >
          <IconButton
            onClick={() => {
              setDrawerOpen(false);
            }}
            sx={{
              alignSelf: "end",
              maxWidth: "40px",
              marginBottom: "10px",
            }}
          >
            <Close />
          </IconButton>
          {props.links.map((link: WebAppBarLink, index: number) => (
            <Link
              key={index}
              underline="hover"
              color="inherit"
              sx={{
                fontSize: "1.3rem",
                marginTop: "7px",
                marginBottom: "7px",
              }}
            >
              {link.title}
            </Link>
          ))}
        </Drawer>
      </Toolbar>
    </Box>
  );
}

export default WebAppBar;
