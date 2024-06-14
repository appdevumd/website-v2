import { Box, SxProps } from "@mui/material"
import { Instagram } from "@mui/icons-material";
import { LinkedIn } from "@mui/icons-material";
import { GitHub } from "@mui/icons-material";
import { Email } from "@mui/icons-material";
import { BiLogoDiscord } from "react-icons/bi";
import { ContactLinks } from "./interfaces";
import React from "react";

export default function ContactUs(props: {
    sx?: SxProps,
    fontSize?: string
}) {
    /* Configure Contact Links */
    let contactLinks: ContactLinks[] = [
        {
            icon: <Instagram />,
            redirect: 'https://www.instagram.com/appdev_umd/'
        },
        {
            icon: <LinkedIn />,
            redirect: 'https://www.linkedin.com/company/app-development-club/'
        },
        {
            icon: <GitHub />,
            redirect: 'https://github.com/appdevumd'
        },
        {
            icon: <Email />,
            redirect: 'mailto:umdappdev@gmail.com'
        },
        {
            icon: <BiLogoDiscord />,
            redirect: 'https://discord.com/invite/scSeVbTT7G'
        }
    ];

    return (
        <Box sx={{ display: 'flex', gap: '10px', flexGrow: 1, ...props?.sx }}>
            {
                contactLinks.map((link) => (
                    React.cloneElement(
                        link.icon,
                        {
                            onClick: () => { window.open(link.redirect)?.focus() },
                            style: {
                                cursor: 'pointer',
                                maxHeight: '24px',
                                fontSize: props.fontSize ?? "22px",
                                zIndex: 2
                            }
                        }
                    )
                ))
            }
        </Box >
    )
}