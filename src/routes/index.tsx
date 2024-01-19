/**
 * Router Configuration
 * Configures the routes using react-router-dom.
 */

import { Route, Routes } from 'react-router-dom';
import SignIn from "../screens/login";
import Dashboard from '../screens/Dashboard';
import ProtectedRoutes from './ProtectedRoutes'

export const AppRoutes = () => {
    return (
      <Routes>
        <Route path="/" element={<SignIn />} />
        <Route element={<ProtectedRoutes />}>
          <Route path="/dashboard" element={<Dashboard />} />
        </Route>
      </Routes>
    );
  };

export default AppRoutes;
