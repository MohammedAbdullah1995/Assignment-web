// Import necessary components and utilities from Material-UI.
import { createTheme, Theme } from "@mui/material";

// Define a Pakistan-themed Material-UI theme using the createTheme function.
const PAKISTAN_THEME: Theme = createTheme({
    // Define the color palette for the theme, specifying primary and secondary colors.
    palette: {
        primary: {
            main: '#9b59b6', // Set the main color for the primary palette (Purple color for Pakistan).
        },
        secondary: {
            main: '#FFFFFF' // Set the main color for the secondary palette.
        }
    }
});

// Export the Pakistan-themed theme for use in the application.
export default PAKISTAN_THEME;
