import { Close } from "@mui/icons-material";
import { Box, IconButton, Link, Typography } from "@mui/material";

export interface WebEvent {
    title: string,
    href?: string
}

export default function WebEventsBar(props: { events: WebEvent[] }) {
    return (
        <Box sx={{
            background: "#16F4D0",
            color: "#000000",
            fontWeight: 600,
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            height: '30px'
        }}>
            <Box sx={{ flexGrow: 1, display: 'flex', justifyContent: 'center' }}>
                {
                    props.events.map((event) => (
                        <Link
                            key={`${event.title}::${event.href}`}
                            underline="hover"
                            href={event.href}
                            color="inherit"
                        >{event.title}</Link>
                    ))
                }
            </Box>
            <IconButton sx={{ color: 'inherit', width: '25px', height: '25px', marginRight: '5px' }}><Close sx={{ color: 'inherit' }} /></IconButton>
        </Box>
    );
}