import { ReactElement } from "react";
import { Box, SxProps, Typography } from "@mui/material"
import { useScroll } from "framer-motion";
import React from "react";


export default function VerticalCardStack(props: { sx?: SxProps, children: ReactElement[], title?: String }): ReactElement {
    const cardContainer = React.useRef(null);
    const [cardContainerScale, setCardContainerScale] = React.useState(1);
    const [topBuffer, setTopBuffer] = React.useState(0);
    const { scrollYProgress } = useScroll({
        target: cardContainer,
        offset: ['start start', 'end end']
    });

    React.useEffect(() => {
        scrollYProgress.on('change', (e) => {
            if (e < 0.9) {
                setCardContainerScale(Math.abs(1 - ((e * 0.08))));
                setTopBuffer(Math.abs(200 * e));
            }
        });
    }, []);

    return (
        <Box
            sx={{
                ...props?.sx,
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                gap: '50px',
                minHeight: `calc(${(400 * (props.children.length + 1))}px)`,
                transform: `scale(${cardContainerScale})`
            }}
        >
            <Typography 
                sx={{ 
                    position: 'sticky',
                    top: `calc(130px - ${topBuffer}px)`,
                    fontSize: '2.3rem', 
                    fontWeight: 'bold', 
                }}
            >
                {props.title}
            </Typography>
            {
                props.children.map((ChildElement: JSX.Element, index) => (
                    React.cloneElement(ChildElement, { sx: {
                        position: 'sticky',
                        top: `calc(25vh + ${index * 40}px - ${topBuffer}px)`,
                        transform: `scale(${1 + (index * 0.03)})` 
                    } })
                ))
            }
        </Box>
    );
}