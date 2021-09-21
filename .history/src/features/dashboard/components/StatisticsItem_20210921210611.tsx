import { Box, Paper } from '@material-ui/core';
import * as React from 'react';

const useStyles = makeStyles((theme) => ({
  root: {},
}));

export interface StatisticItemProps {
  icon: React.ReactElement;
  label: string;
  value: string | number;
}

export default function StatisticItem({ icon, label, value }: StatisticItemProps) {
  const classes = useStyles();
  return (
    <Paper className={classes.root}>
      <Box>{icon}</Box>
      <Box></Box>
    </Paper>
  );
}
