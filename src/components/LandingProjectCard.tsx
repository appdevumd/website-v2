import { Box, Button, Paper, Typography } from "@mui/material";
import Atropos from "atropos/react";

export interface LandingProject {
    id: String,
    name: string,
    organization: string,
    description: string,
    members: string[], /* Array of MongoDB User IDs */
    cover: string, /* Cover Image URL */
};

export default function LandingProjectCard(props: { project: LandingProject }) {
    const handleCardClick = (project: LandingProject) => {
        console.log(`Clicked: ${project.id}`)
    }
    
    return (
        <Atropos onClick={() => { handleCardClick(props.project) }} style={{ width: '50vw', height: '100%', cursor: 'pointer' }}>
            <Paper sx={{ borderRadius: '35px', padding: '30px', display: 'flex', gap: '15px', color: '#000000', bgcolor: "#ffffff", width: '100%', height: '100%' }}>
                <Box sx={{ display: 'flex', flexDirection: 'column', flexGrow: 1 }}>
                    <Typography sx={{ fontSize: '1.5rem', fontWeight: 700 }}>{props.project.name}</Typography>
                    <Typography sx={{ fontSize: '1.3rem', fontWeight: 500 }}>{props.project.organization}</Typography>
                    <Typography sx={{ marginTop: '10px' }} variant="body1">{props.project.description}</Typography>
                </Box>

                { /* Image Goes Here */}
                <Box data-atropos-offset="5" sx={{
                    borderRadius: '35px',
                    background: 'pink',
                    minWidth: '40%',
                    height: '100%',
                }}></Box>
            </Paper>
        </Atropos>
    );
}