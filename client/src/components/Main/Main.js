import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { CssBaseline } from '@material-ui/core';
import BackgroundImg from '../../assets/newbg.jpeg';
import Headers from '../Header/Header';
import MainInfo from './MainInfo';
import MainSlider from '../MainSlider/MainSlider';
import useWindowPosition from '../../hook/useWindowPosition';

const useStyles = makeStyles(() => ({
  root: {
    minHeight: '100vh',
    backgroundImage: `url(${BackgroundImg})`,
    backgroundSize: 'cover',
    backgroundAttachment: 'fixed',
    backgroundRepeat: 'repeat',
  },
}));

export default function Main() {
  const classes = useStyles();
  const checked = useWindowPosition('info');
  return (
    <div className={classes.root}>
      <CssBaseline />
      <Headers />
      <MainInfo />
      <MainSlider checked={checked} />
    </div>
  );
}
