import { Box, Button, CircularProgress, makeStyles, Paper, Typography } from '@material-ui/core';
import { useAppDispatch, useAppSelector } from 'app/hooks';
import * as React from 'react';
import { Redirect } from 'react-router-dom';
import { authActions } from '../authSlice';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexFlow: 'row nowrap',
    justifyContent: 'center',
    alignItems: 'center',
    minHeight: '100vh',
  },
  box: {
    padding: theme.spacing(3),
  },
}));

export default function LoginPage() {
  const classes = useStyles();
  const dispatch = useAppDispatch();
  const isLoggedIn = useAppSelector((state) => state.auth.login);
  // if (isLoggedIn) return <Redirect to="/admin" />;

  const handleLogin = () => {
    dispatch(
      authActions.login({
        username: '',
        password: '',
      })
    );
  };
  return (
    <div className={classes.root}>
      <Paper elevation={1} className={classes.box}>
        <Typography variant="h5" component="h1">
          Student Management
        </Typography>
        <Box mt={4}>
          <Button fullWidth variant="contained" color="primary" onClick={handleLogin}>
            {isLoggedIn && <CircularProgress size={20} color="secondary" />} &nbsp; Fake Login
          </Button>
        </Box>
      </Paper>
    </div>
  );
}
