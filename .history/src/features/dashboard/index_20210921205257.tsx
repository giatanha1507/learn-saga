import { useAppDispatch } from 'app/hooks';
import React from 'react';
import { useEffect } from 'react-router/node_modules/@types/react';
import { dashboardAction } from './dashboardSlice';

export default function Dashboard() {
  const dispatch = useAppDispatch();
  useEffect(() => {
    dispatch(dashboardAction.fetchData());
  });
  return <div></div>;
}
