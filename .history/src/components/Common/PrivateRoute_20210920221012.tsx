import * as React from 'react';
import { Redirect } from 'react-router';

export interface PrivateRouteProps {}

export function PrivateRoute(props: PrivateRouteProps) {
  const isLoggedIn = Boolean(localStorage.getItem('access_token'));
  if (!isLoggedIn) return <Redirect />;
  return <div></div>;
}
