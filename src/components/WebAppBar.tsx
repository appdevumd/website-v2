import { Box, Drawer, IconButton, Link, Menu, MenuItem, SxProps, Toolbar, Typography } from "@mui/material";
import MenuIcon from '@mui/icons-material/Menu';
import React from "react";
import { Close } from "@mui/icons-material";

export interface WebAppBarLink {
    title: string,
    anchor: string
};

export default function WebAppBar(props: {
    sx?: SxProps,
    fullWidth?: boolean,
    translucent?: boolean,
    links: WebAppBarLink[]
}) {
    const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
    const [drawerOpen, setDrawerOpen] = React.useState<boolean>(false);

    return (
        <Box sx={{
            ...props.sx,
            width: '100%',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
        }}>
            <Toolbar sx={{
                background: (props.translucent) ? 'rgba(67,86,127, 0.5)' : 'transparent',
                backdropFilter: (props.translucent) ? 'blur(20px)' : 'unset',
                margin: '25px 0px 0px 0px',
                borderRadius: '41px',
                paddingLeft: '40px !important',
                paddingRight: '40px !important',
                boxShadow: (props.translucent) ? 3 : 0,
                width: (props.fullWidth) ? '100%' : '90%',
                height: '80px',
                userSelect: 'none',
            }}>
                <img src="/logo256.png" style={{ maxHeight: '65%', margin: '10px 0px 10px 0px' }} />
                <Typography sx={{ flexGrow: 1, fontSize: '1.3rem', fontWeight: "bold", marginLeft: '15px' }}>App Dev Club</Typography>

                { /* Links, Hide In Mobile. Provide Dropdown Instead */}
                <Box sx={{ display: { xs: 'none', md: 'flex' } }}>
                    {
                        props.links.map((link) => (
                            <Link underline="hover" key={`${link.title}::${link.anchor}`} sx={{
                                fontSize: '1rem',
                                fontWeight: 600,
                                marginLeft: '15px',
                                marginRight: '10px',
                                color: 'inherit',
                                ":hover": {
                                    cursor: 'pointer'
                                }
                            }}
                            >{link.title}</Link>
                        ))
                    }
                </Box>

                { /* Hamburger Button, Show only on Mobile */}
                <IconButton
                    onClick={() => { setDrawerOpen(true) }}
                    sx={{
                        color: 'inherit',
                        display: { xs: 'flex', md: 'none' }
                    }}
                ><MenuIcon sx={{ fontSize: '1.8rem' }} /></IconButton>

                { /* Define Navigation Bar */}
                <Drawer
                    anchor="right"
                    open={drawerOpen}
                    onClose={() => { setDrawerOpen(false); }}
                    PaperProps={{
                        sx: {
                            width: '180px',
                            bgcolor: 'background.default',
                            padding: '25px',
                            backgroundImage: 'unset'
                        }
                    }}
                >
                    <IconButton onClick={() => { setDrawerOpen(false) }} sx={{
                        alignSelf: 'end',
                        maxWidth: '40px',
                        marginBottom: '10px'
                    }}><Close /></IconButton>
                    {
                        props.links.map((link) => (
                            <Link
                                underline="hover"
                                color="inherit"
                                sx={{
                                    fontSize: '1.3rem',
                                    marginTop: '7px',
                                    marginBottom: '7px'
                                }}
                            >{link.title}</Link>
                        ))
                    }
                </Drawer>
            </Toolbar>
        </Box>
    );
}