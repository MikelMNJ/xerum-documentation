import React from 'react';
import { Outlet, Navigate } from 'react-router-dom';

const AuthRoute = props => {
  const { authed, redirect } = props;
  return authed ? <Outlet /> : <Navigate to={redirect || "/login"} />;
};

export default AuthRoute;