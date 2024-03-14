import { Box, IconButton, Menu, MenuItem, SxProps, Toolbar, Typography } from "@mui/material";
import MenuIcon from '@mui/icons-material/Menu';
import React from "react";

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
    const linksMenuOpen = Boolean(anchorEl);

    const handleMenuClick = (event: React.MouseEvent<HTMLButtonElement>) => {
        setAnchorEl(event.currentTarget);
    };

    const handleMenuClose = () => {
        setAnchorEl(null);
    };

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
                margin: '25px 0px 25px 0px',
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
                            <Typography key={`${link.title}::${link.anchor}`} sx={{
                                fontSize: '1rem',
                                fontWeight: 600,
                                marginLeft: '15px',
                                marginRight: '10px'
                            }}
                            >{link.title}</Typography>
                        ))
                    }
                </Box>

                { /* Hamburger Button, Show only on Mobile */}
                <IconButton
                    onClick={handleMenuClick}
                    sx={{
                        color: 'inherit',
                        display: { xs: 'flex', md: 'none' }
                    }}
                ><MenuIcon sx={{ fontSize: '1.8rem' }} /></IconButton>

                { /* Define Menu Component */}
                <Menu
                    open={linksMenuOpen}
                    anchorEl={anchorEl}
                    onClose={handleMenuClose}
                    slotProps={{ paper: { sx: { minWidth: '150px' } } }}
                >
                    {
                        props.links.map((link) => (
                            <MenuItem
                                key={`${link.title}::${link.anchor}`}
                                onClick={handleMenuClose}
                            >{link.title}</MenuItem>
                        ))
                    }
                </Menu>
            </Toolbar>
        </Box>
    );
}