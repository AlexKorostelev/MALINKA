import React from 'react';
import BackgroundImg from '../../assets/bg.jpg'
import {makeStyles} from '@material-ui/core/styles'
import { CssBaseline } from '@material-ui/core';
import Headers from '../Header/Header';
import MainInfo from './MainInfo';


const useStyles = makeStyles((theme) => ({
  root: {
    minHeight: '100vh',
    backgroundImage: `url(${BackgroundImg})`,
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover',
  }
}));

export default function Main() {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <CssBaseline />
      <Headers />
      <MainInfo />
    </div>
  )
}