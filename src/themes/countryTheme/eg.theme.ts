// Import necessary components and utilities from Material-UI.
import { createTheme, Theme } from "@mui/material";

// Define an Egypt-themed Material-UI theme using the createTheme function.
const EGYPT_THEME: Theme = createTheme({
    // Define the color palette for the theme, specifying primary and secondary colors.
    palette: {
        primary: {
            main: '#3498db' // Set the main color for the primary palette.
        },
        secondary: {
            main: '#FFFFFF' // Set the main color for the secondary palette.
        }
    },
}); // Use the Arabic locale (arEG) for proper language and text rendering.

// Export the Egypt-themed theme for use in the application.
export default EGYPT_THEME;
