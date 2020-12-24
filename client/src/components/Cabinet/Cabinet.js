/* eslint-disable import/extensions */
/* eslint-disable import/no-unresolved */
/* eslint-disable import/no-named-as-default */
import React from 'react';
import './style.css';
import { makeStyles } from '@material-ui/core/styles';
import { CssBaseline } from '@material-ui/core';
import BackgroundImg from '../../assets/newbg.jpeg';
import SwitchesGroup from './MaterialComponents/Light/index';
import StateOfMalinka from '../StateOfMalinka/StateOfMalinka';
import CabinetHeader from '../CabinetHeader/CabinetHeader';
import ControlPanel from './MaterialComponents/ControlPanel/ControlPanel';

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
    fontFamily: 'Nunito',
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
  bottomContainer: {
    display: 'flex',
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    color: 'rgb(220,216,181)',
    background: 'rgba(0,0,0,0.5)',
    borderRadius: '4px',
    margin: '10px',
    padding: '10px 20px',
    minWidth: '350px',
  },
}));

export default function Cabinet() {
  const classes = useStyles();
  return (
    <>
      <CabinetHeader />
      <div id="root" className={classes.root}>
        <CssBaseline />
        <h1>Панель управления</h1>
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

        <div className={classes.bottomContainer}>
          <ControlPanel />
        </div>
      </div>
    </>
  );
}
