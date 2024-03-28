import { createTheme } from "@mui/material";

const baseTheme = createTheme({
    palette: {
        mode: 'dark',
        text: {
            primary: '#FFFFFF',
        },
        background: {
            default: "#14213D",
        }
    },
    typography: {
        fontFamily: "Inter, sans-serif",
    },
});

export default { baseTheme };
