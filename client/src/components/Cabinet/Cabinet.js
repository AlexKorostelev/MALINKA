import React from 'react';
import './style.css'
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import SwitchesGroup from './MaterialComponents/Light/index'
import StateOfMalinka from '../StateOfMalinka/StateOfMalinka'

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(3),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },
}));

export default function Cabinet() {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <h1>Control Panel</h1>
      <Grid container spacing={1}>

        <Grid item xs={6}>
          <Paper className={`${classes.paper} blocks`}>
            <SwitchesGroup />
          </Paper>
        </Grid>

        <Grid item xs={6}>
          <Paper className={`${classes.paper} blocks`}>
            <StateOfMalinka />
          </Paper>
        </Grid>

      </Grid>
    </div>
  );
}
