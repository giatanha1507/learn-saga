import { Box, makeStyles } from '@material-ui/core';
import * as React from 'react';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'grid',
    gridTemplateRows: 'auto 1fr',
    gridTemplateColumns: '300px 1fr',
    gridTemplateAreas: `"header header" "sidebar main"`,
    minHeight: '100vh',
  },
  header: {
    gridArea: 'header',
  },
  sidebar: {
    gridArea: 'sidebar',
  },
  main: {
    gridArea: 'main',
  },
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
