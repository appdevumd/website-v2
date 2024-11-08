import { Box, Paper, SxProps } from "@mui/material";
import React from "react";
import { Highlight } from "./interfaces";
import Marquee from "react-fast-marquee";
import Sparkles from "../Sparkles";
import api from "../../api/axios.config";

const RandomizeArray = (array: any[]) => {
    /* Uses the Fisher-Yates (Knuth) Shuffle algorithm */
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }

    return array;
}

const HighlightsCarousel = (props: {
    id?: string,
    sx?: SxProps,
    scale?: string,
    marquee?: any,
    highlights: Highlight[],
}) => {
    console.warn(props.highlights);
    return (
        <Box sx={{ width: '100%', ...props.sx }} id={props.id}>
            <Marquee
                autoFill
                {...props.marquee}
                style={{
                    padding: (props.scale == "") ? '15px' : '20px',
                    margin: (props.scale == "") ? '0px' : '-35px 0px -35px 0px'
                }}
            >
                {
                    RandomizeArray(props.highlights).map((highlight) => (
                        <Paper
                            elevation={8}
                            sx={{
                                display: 'flex',
                                borderRadius: '20px',
                                background: 'white',
                                position: 'relative',
                                margin: '0px 50px 0px 50px',
                                scale: props.scale,
                                overflow: 'hidden',
                            }}
                        >
                            <img
                                src={highlight.img}
                                style={{
                                    maxWidth: '400px',
                                    maxHeight: '300px'
                                }}
                            />
                        </Paper>
                    ))
                }
            </Marquee>
        </Box>
    );
}

export default function HighlightsContainer() {
    /* Highlights State */
    const [highlights, setHighlights] = React.useState<Highlight[]>([]);

    React.useEffect(() => {
        api.get('/api/highlights').then((res) => {
            if (res.status != 200)
                return null;

            /* We Fetched Highlights Sucessfully! Set 'em */
            setHighlights(res.data);
        });
    }, []);

    return (
        (highlights.length < 1) ? <p><center>Check us out on Instagram @appdev_umd</center></p> : 
        <Box
            sx={{
                width: '100%',
                height: '100%',
                position: 'relative',
                display: 'flex',
                flexDirection: 'column',
            }}
        >
            <Sparkles
                background="transparent"
                minSize={0.5}
                maxSize={1.3}
                particleDensity={40}
                sx={{ 
                    position: 'absolute', 
                    zIndex: 1, 
                    width: '100%', 
                    height: '100%', 
                    top: '50px' 
                }}
            />
            <HighlightsCarousel
                id="bg01-highlightscontainer"
                marquee={{ direction: "left", speed: 70 }}
                highlights={highlights.slice(0, 4)}
                scale="0.6"
                sx={{ filter: 'blur(6px)', opacity: '0.4', zIndex: 1 }}
            />
            <HighlightsCarousel
                id="fg-highlightscontainer"
                marquee={{ direction: "right", speed: 50 }}
                highlights={highlights}
                scale=""
                sx={{
                    position: 'absolute',
                    top: '50%',
                    transform: 'translateY(-50%)',
                    zIndex: 4,
                }}
            />
            <HighlightsCarousel
                id="bg02-highlightscontainer"
                marquee={{ direction: "left", speed: 90 }}
                highlights={highlights.slice(0, 4)}
                scale="0.6"
                sx={{ filter: 'blur(6px)', marginTop: '-170px', zIndex: 3, opacity: '0.4' }}
            />
            <HighlightsCarousel
                id="bg03-highlightscontainer"
                marquee={{ direction: "left", speed: 110 }}
                highlights={highlights.slice(0, 4)}
                scale="0.6"
                sx={{ filter: 'blur(6px)', marginTop: '-140px', opacity: '0.4', zIndex: 2 }}
            />
            <HighlightsCarousel
                id="bg04-highlightscontainer"
                marquee={{ direction: "left", speed: 40 }}
                highlights={highlights.slice(0, 4)}
                scale="0.6"
                sx={{ filter: 'blur(6px)', marginTop: '-170px', opacity: '0.4', zIndex: 1 }}
            />
        </Box>
    )
}