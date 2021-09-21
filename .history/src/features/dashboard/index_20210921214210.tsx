import { Box, Grid, LinearProgress, makeStyles } from '@material-ui/core';
import { CallMade, CallReceived } from '@material-ui/icons';
import EmojiPeopleTwoToneIcon from '@material-ui/icons/EmojiPeopleTwoTone';
import { useAppDispatch, useAppSelector } from 'app/hooks';
import React, { useEffect } from 'react';
import StatisticItem from './components/StatisticsItem';
import Widget from './components/Widget';
import {
  dashboardAction,
  selectDashboardLoading,
  selectDashboardStatistics,
  selectHighestStudentList,
  selectLowestStudentList,
  selectRankingListByCity,
} from './dashboardSlice';

const useStyles = makeStyles((theme) => ({
  root: {
    position: 'relative',
    paddingTop: theme.spacing(1),
  },
  loading: {
    position: 'absolute',
    top: theme.spacing(-1),
    width: '100%',
  },
}));

export default function Dashboard() {
  const dispatch = useAppDispatch();
  const loading = useAppSelector(selectDashboardLoading);
  const statistics = useAppSelector(selectDashboardStatistics);
  const highStudentList = useAppSelector(selectHighestStudentList);
  const lowStudentList = useAppSelector(selectLowestStudentList);
  const rankingByCiTy = useAppSelector(selectRankingListByCity);

  const classes = useStyles();

  useEffect(() => {
    dispatch(dashboardAction.fetchData());
  }, [dispatch]);
  return (
    <Box className={classes.root}>
      {loading && <LinearProgress className={classes.loading} />}
      <Grid container spacing={3}>
        <Grid item xs={12} md={6} lg={3}>
          <StatisticItem
            icon={<EmojiPeopleTwoToneIcon fontSize="large" color="primary" />}
            label="male"
            value={statistics.maleCount}
          />
        </Grid>
        <Grid item xs={12} md={6} lg={3}>
          <StatisticItem
            icon={<EmojiPeopleTwoToneIcon fontSize="large" color="primary" />}
            label="female"
            value={statistics.femaleCount}
          />
        </Grid>
        <Grid item xs={12} md={6} lg={3}>
          <StatisticItem
            icon={<CallMade fontSize="large" color="primary" />}
            label="mark >=8"
            value={statistics.highMarkCount}
          />
        </Grid>
        <Grid item xs={12} md={6} lg={3}>
          <StatisticItem
            icon={<CallReceived fontSize="large" color="primary" />}
            label="mark <=5"
            value={statistics.lowMarkCount}
          />
        </Grid>
      </Grid>
      <Box mt={4}>
        <Grid container spacing={3}>
          <Grid item xs={12} md={6} lg={3}>
            <Widget />
          </Grid>
        </Grid>
      </Box>
    </Box>
  );
}
