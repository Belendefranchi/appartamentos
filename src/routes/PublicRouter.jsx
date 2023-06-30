import React from 'react'
import { Navigate, Route } from 'react-router-dom';

export const PublicRouter = ({ component: Component, restricted, ...rest }) => {
  const isLoggedIn = false;

  if (isLoggedIn && restricted) {
    return <Navigate to="/dashboard" replace />;
  }

  if (isLoggedIn && !restricted) {
    return <Navigate to="/dashboard" replace />;
  }

  return <Route {...rest} element={<Component />} />;
}
