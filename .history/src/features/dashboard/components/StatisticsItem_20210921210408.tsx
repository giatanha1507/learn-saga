import { Paper } from '@material-ui/core';
import * as React from 'react';

const useStyles = makeStyles((theme) => ({
  root: {},
}));

export interface StatisticItemProps {
  icon: React.ReactElement;
  label: string;
  value: string | number;
}

export default function StatisticItem(props: StatisticItemProps) {
  const classes = useStyles();
  return <Paper></Paper>;
}
