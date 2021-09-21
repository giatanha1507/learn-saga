import { Box, makeStyles } from '@material-ui/core';
import * as React from 'react';

const useStyles = makeStyles((theme) => ({
  root: {},
  header: {},
  sidebar: {},
  main: {},
}));

export function AdminLayout() {
  const classes = useStyles();
  return (
    <Box className={classes.root}>
      <Box className={classes.header}></Box>
      <Box className={classes.sidebar}></Box>
      <Box className={classes.main}></Box>
    </Box>
  );
}
