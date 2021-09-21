import { Paper, makeStyles, Typography, Box, Button, CircularProgress } from '@material-ui/core';
import { useAppDispatch, useAppSelector, useAppSelector } from 'app/hooks';
import * as React from 'react';
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
            <CircularProgress size={20} color="secondary" /> Fake Login
          </Button>
        </Box>
      </Paper>
    </div>
  );
}
