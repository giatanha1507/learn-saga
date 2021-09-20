import * as React from 'react';
import { Redirect, RouteProps } from 'react-router-dom';

export interface PrivateRouteProps {}

export function PrivateRoute(props: RouteProps) {
  const isLoggedIn = Boolean(localStorage.getItem('access_token'));
  if (!isLoggedIn) return <Redirect to="/login" />;
  return <div></div>;
}
