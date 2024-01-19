// Import necessary components and utilities from Material-UI and other sources.
import { ThemeProvider } from "@mui/material";
import getTheme from "../themes/getTheme";
import { COUNTRY_NAME } from "../util/enums";
import { ReactElement } from "react";
import { RenderOptions, render } from "@testing-library/react";

// Define a functional component, AllTheProviders, to wrap the entire application with the MUI ThemeProvider.
const AllTheProviders: React.FC = ({ children }: any) => {
    return (
        // Provide the MUI ThemeProvider with a theme obtained from the getTheme function, using the default country (UAE).
        <ThemeProvider theme={getTheme(COUNTRY_NAME.UAE)}>
            {children} {/* Render the children components within the ThemeProvider. */}
        </ThemeProvider>
    );
}

// Define a custom render function, customRender, to override the default render function from '@testing-library/react'.
const customRender = (
    ui: ReactElement,
    options?: Omit<RenderOptions, 'wrapper'>,
) => render(ui, { wrapper: AllTheProviders, ...options }); // Utilize the AllTheProviders wrapper in the custom render function.

// Export all functions from '@testing-library/react' for convenient access.
export * from '@testing-library/react';
// Export the customRender function as 'render' for consistent usage across the application.
export { customRender as render };
