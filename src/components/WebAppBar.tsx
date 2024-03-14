import { Box, SxProps, Toolbar, Typography } from "@mui/material";

export default function WebAppBar(props: {
    sx?: SxProps,
    fullWidth?: boolean,
    translucent?: boolean
}) {
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
                <Typography sx={{ fontSize: '1.3rem', fontWeight: "bold", marginLeft: '15px' }}>App Dev Club</Typography>
            </Toolbar>
        </Box>
    );
}