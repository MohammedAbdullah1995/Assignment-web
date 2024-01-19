// Import enums representing country names and specific country-themed Material-UI themes.
import { COUNTRY_NAME } from "../util/enums";
import EGYPT_THEME from "./countryTheme/eg.theme";
import INDIA_THEME from "./countryTheme/in.theme";
import PAKISTAN_THEME from "./countryTheme/pk.theme";
import UAE_THEME from "./countryTheme/uae.theme";

// Define a function, getTheme, that returns the Material-UI theme based on the provided countryName.
const getTheme = (countryName: COUNTRY_NAME) => {
    return themeMapper[countryName];
};

// Create a themeMapper object that maps each country to its respective theme.
const themeMapper: any = {
    [COUNTRY_NAME.UAE]: UAE_THEME,
    [COUNTRY_NAME.EG]: EGYPT_THEME,
    [COUNTRY_NAME.IN]: INDIA_THEME,
    [COUNTRY_NAME.PK]: PAKISTAN_THEME
};

// Export the getTheme function for use throughout the application.
export default getTheme;
