import { useAppDispatch, useAppSelector } from 'app/hooks';
import React, { useEffect } from 'react';
import {
  dashboardAction,
  selectDashboardLoading,
  selectDashboardStatistics,
  selectHighestStudentList,
  selectLowestStudentList,
  selectRankingListByCity,
} from './dashboardSlice';

export default function Dashboard() {
  const dispatch = useAppDispatch();
  const loading = useAppSelector(selectDashboardLoading);
  const statistics = useAppSelector(selectDashboardStatistics);
  const highStudentList = useAppSelector(selectHighestStudentList);
  const lowStudentList = useAppSelector(selectLowestStudentList);
  const rankingByCiTy = useAppSelector(selectRankingListByCity);

  useEffect(() => {
    dispatch(dashboardAction.fetchData());
  }, [dispatch]);
  return <div></div>;
}
