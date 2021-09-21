import { Box, Grid } from '@material-ui/core';
import { CallMade, CallReceived } from '@material-ui/icons';
import EmojiPeopleTwoToneIcon from '@material-ui/icons/EmojiPeopleTwoTone';
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
      <Grid container spacing="3">
        <Grid item xs={12} md={6} lg={4}>
          <StatisticItem
            icon={<EmojiPeopleTwoToneIcon fontSize="large" color="primary" />}
            label="male"
            value={statistics.maleCount}
          />
        </Grid>
        <Grid item xs={12} md={6} lg={4} xl={3}>
          <StatisticItem
            icon={<EmojiPeopleTwoToneIcon fontSize="large" color="primary" />}
            label="female"
            value={statistics.femaleCount}
          />
        </Grid>
        <Grid item xs={12} md={6} lg={4} xl={3}>
          <StatisticItem
            icon={<CallMade fontSize="large" color="primary" />}
            label="mark >=8"
            value={statistics.highMarkCount}
          />
        </Grid>
        <Grid item xs={12} md={6} lg={4} xl={3}>
          <StatisticItem
            icon={<CallReceived fontSize="large" color="primary" />}
            label="mark <=5"
            value={statistics.lowMarkCount}
          />
        </Grid>
      </Grid>
    </Box>
  );
}
