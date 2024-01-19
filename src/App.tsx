// The main App component that wraps the entire application

// Import necessary dependencies and components
import { RouterProvider } from 'react-router-dom';
import router from './routes';
import { ThemeProvider } from '@emotion/react';
import getTheme from './themes/getTheme';
import { I18nextProvider } from 'react-i18next';
import i18n from './config/i18n';
import { useReducer } from 'react';
import reducer from './context/reducer';
import initialAppState from './context/state';
import { DispatchContext, StateContext } from './context';
import { COUNTRY_NAME } from './util/enums';

// The main App component
function App() {
  // Use reducer to manage global state
  const [contextState, contextDispatch] = useReducer(reducer, initialAppState);

  return (
    // Wrap the entire application with ThemeProvider for theme management
    <ThemeProvider theme={getTheme(contextState?.selectedCountry || COUNTRY_NAME.UAE)}>
      {/* Internationalization provider for translations */}
      <I18nextProvider i18n={i18n}>
        {/* Provide the application state globally */}
        <StateContext.Provider value={contextState}>
          {/* Provide the application dispatcher globally */}
          <DispatchContext.Provider value={contextDispatch as any}>
            {/* Use RouterProvider for routing */}
            <RouterProvider router={router} />
          </DispatchContext.Provider>
        </StateContext.Provider>
      </I18nextProvider>
    </ThemeProvider>
  );
}

// Export the App component as the default export
export default App;
