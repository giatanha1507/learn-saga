import { useAppDispatch } from 'app/hooks';
import React, { useEffect } from 'react';
import { dashboardAction } from './dashboardSlice';

export default function Dashboard() {
  const dispatch = useAppDispatch();
  useEffect(() => {
    dispatch(dashboardAction.fetchData());
  }, [dispatch]);
  return <div></div>;
}
