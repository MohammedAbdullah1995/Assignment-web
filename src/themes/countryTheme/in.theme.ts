// Import necessary components and utilities from Material-UI.
import { createTheme, Theme } from "@mui/material";

// Define an India-themed Material-UI theme using the createTheme function.
const INDIA_THEME: Theme = createTheme({
    // Define the color palette for the theme, specifying primary and secondary colors.
    palette: {
        primary: {
            main: '#f39c12' // Set the main color for the primary palette.
        },
        secondary: {
            main: '#FFFFFF' // Set the main color for the secondary palette.
        }
    }
});

// Export the India-themed theme for use in the application.
export default INDIA_THEME;
