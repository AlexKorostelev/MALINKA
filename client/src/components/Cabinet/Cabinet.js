import React from 'react';
import './style.css';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import { CssBaseline } from '@material-ui/core';
import BackgroundImg from '../../assets/bg.jpg';
import SwitchesGroup from './MaterialComponents/Light/index';
import StateOfMalinka from '../StateOfMalinka/StateOfMalinka';

const useStyles = makeStyles(() => ({
  root: {
    flexGrow: 1,
    minHeight: '100vh',
    backgroundImage: `url(${BackgroundImg})`,
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover',
  },
  div: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    maxWidth: 545,
    background: 'rgba(0,0,0,0.5)',
    margin: '10px',
  },
}));

export default function Cabinet() {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <CssBaseline />
      <h1>Control Panel</h1>
      <Grid container spacing={1}>

        <Grid item xs={6}>
          <div className={classes.div}>
            <h3>Управление</h3>
            <SwitchesGroup />
          </div>
        </Grid>

        <Grid item xs={6}>
          <div className={classes.div}>
            <h3>Состояние</h3>
            <StateOfMalinka />
          </div>
        </Grid>

      </Grid>
    </div>
  );
}
