import * as React from 'react';
import { Redirect, Route, RouteProps } from 'react-router-dom';

export function PrivateRoute(props: RouteProps) {
  const isLoggedIn = Boolean(localStorage.getItem('access_token'));
  // if (!isLoggedIn) return <Redirect to="/login" />;
  if (!isLoggedIn) {
    <Redirect to="/login" />;
  } else {
    <Redirect to="/admin" />;
  }
  return <Route {...props} />;
}
