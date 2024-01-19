// Import necessary components and utilities from Material-UI.
import { createTheme, Theme } from "@mui/material";

// Define a UAE-themed Material-UI theme using the createTheme function.
const UAE_THEME: Theme = createTheme({
    // Define the color palette for the theme, specifying primary and secondary colors.
    palette: {
        primary: {
            main: '#2ecc71', // Set the main color for the primary palette (Green color for UAE).
        },
        secondary: {
            main: '#FFFFFF' // Set the main color for the secondary palette.
        }
    }
});

// Export the UAE-themed theme for use in the application.
export default UAE_THEME;
