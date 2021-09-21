import { Box, Grid } from '@material-ui/core';
import { ChatBubble, LinearScaleRounded, PeopleAlt, MaleIcon } from '@material-ui/icons';
import { useAppDispatch, useAppSelector } from 'app/hooks';
import React, { useEffect } from 'react';
import StatisticItem from './components/StatisticsItem';
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
  return (
    <Box>
      <Grid container>
        <Grid item xs={12} md={6} lg={4} xl={3}>
          <StatisticItem
            icon={<MaleIcon fontSize="large" color="primary" />}
            label="male"
            value={statistics.maleCount}
          />
        </Grid>
        <Grid item xs={12} md={6} lg={4} xl={3}>
          <StatisticItem
            icon={<PeopleAlt fontSize="large" color="primary" />}
            label="female"
            value={statistics.femaleCount}
          />
        </Grid>
        <Grid item xs={12} md={6} lg={4} xl={3}>
          <StatisticItem
            icon={<ChatBubble fontSize="large" color="primary" />}
            label="mark >=8"
            value={statistics.highMarkCount}
          />
        </Grid>
        <Grid item xs={12} md={6} lg={4} xl={3}>
          <StatisticItem
            icon={<LinearScaleRounded fontSize="large" color="primary" />}
            label="mark <=5"
            value={statistics.lowMarkCount}
          />
        </Grid>
      </Grid>
    </Box>
  );
}
