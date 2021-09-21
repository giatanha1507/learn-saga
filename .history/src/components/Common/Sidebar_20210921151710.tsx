import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import { makeStyles } from '@material-ui/core/styles';
import { DashboardTwoTone } from '@material-ui/icons';
import DraftsIcon from '@material-ui/icons/Drafts';
import InboxIcon from '@material-ui/icons/Inbox';
import React from 'react';

const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
    maxWidth: 360,
    backgroundColor: theme.palette.background.paper,
  },
}));

export function Sidebar() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <List component="nav" aria-label="main mailbox folders">
        <ListItem button>
          <ListItemIcon>
            <DashboardTwoTone />
          </ListItemIcon>
          <ListItemText primary="Dashboard" />
        </ListItem>
        <ListItem button>
          <ListItemIcon>
            <PeopleAlt />
          </ListItemIcon>
          <ListItemText primary="Students" />
        </ListItem>
      </List>
    </div>
  );
}
