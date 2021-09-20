import { Paper, makeStyles, Typography } from '@material-ui/core';
import * as React from 'react';

const useStyles = makeStyles((theme) => ({
  root: {},
}));

export default function LoginPage() {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <Paper>
        <Typography variant="h5" component="h1">
          Student Management
        </Typography>
      </Paper>
    </div>
  );
}
