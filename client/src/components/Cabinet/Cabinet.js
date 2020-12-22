import React from 'react';
import './style.css';
import { makeStyles } from '@material-ui/core/styles';
import { CssBaseline } from '@material-ui/core';
import BackgroundImg from '../../assets/bg.jpg';
import SwitchesGroup from './MaterialComponents/Light/index';
import StateOfMalinka from '../StateOfMalinka/StateOfMalinka';
import CabinetHeader from './MaterialComponents/CabinetHeader/CabinetHeader';

const useStyles = makeStyles(() => ({
  root: {
    paddingTop: '100px',
    gridGap: '20px',
    width: '100%',
    minHeight: '100vh',
    backgroundImage: `url(${BackgroundImg})`,
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover',
    display: 'grid',
    alignContent: 'start',
    justifyContent: 'center',
  },
  div: {
    display: 'flex',
    flex: 1,
    flexDirection: 'column',
    alignItems: 'center',
    background: 'rgba(0,0,0,0.5)',
    margin: '0 10px',
    padding: '10px 20px',
    borderRadius: '4px',
    minWidth: '350px',
  },
  contentContainer: {
    display: 'flex',
  },
}));

export default function Cabinet() {
  const classes = useStyles();
  return (
    <>
      <CabinetHeader />
      <div id="root" className={classes.root}>
        <CssBaseline />
        <h1>Control Panel</h1>
        <div className={classes.contentContainer}>
          <div className={classes.div}>
            <h2>Управление</h2>
            <SwitchesGroup />
          </div>

          <div className={classes.div}>
            <h2>Состояние</h2>
            <h3>Все приборы</h3>
            <StateOfMalinka />
          </div>
        </div>

      </div>
    </>
  );
}
