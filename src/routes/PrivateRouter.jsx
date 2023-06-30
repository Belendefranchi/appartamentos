import React from 'react'
import { Navigate, Route } from 'react-router-dom';

export const PrivateRouter = ({ component: Component, ...rest }) => {
  const isLoggedIn = false;

  if (!isLoggedIn) {
    return <Navigate to="/login" replace />;
  }

  return <Route {...rest} element={<Component />} />;
}
