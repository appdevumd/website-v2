import { Box, OutlinedInput, Typography } from "@mui/material";
import ContactUs from "./ContactUs";

export default function StayConnectedContainer(props: { id?: string }) {
    return (
        <Box
            id={props?.id}
            sx={{
                width: '100%',
                height: '100%',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center',
            }}
        >
            <Typography id="contact-us" sx={{ fontSize: '3rem', fontWeight: 'bold', textAlign: 'center' }}>Stay Connected!</Typography>
            <Typography sx={{ textAlign: 'center' }}>We hold a lot of events thoughout the year, Keep in touch with us!</Typography>
            <ContactUs sx={{ marginTop: '25px' }} fontSize="2rem" />
            <OutlinedInput sx={{ minWidth: { xs: '90%', md: '60%', lg: '40%' }, marginTop: '40px' }} placeholder="Drop us an Email!" />
        </Box>
    );
};