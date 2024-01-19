/**
 * Router Configuration
 * Configures the routes using react-router-dom.
 */

import { createBrowserRouter } from 'react-router-dom';
import SignIn from "../screens/login";
import Dashboard from '../screens/Dashboard';

// Define the routes with their corresponding components
const router = createBrowserRouter([
    {
        path: '/',
        element: <SignIn />,
    },
    {
        path: '/dashboard',
        element: <Dashboard />,
    },
]);

export default router;
