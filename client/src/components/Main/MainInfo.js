import React from 'react';
import {makeStyles} from '@material-ui/core/styles';
import ImageCard from '../ImageCard/ImageCard';
import places from '../../static/places';
import useWindowPosition from '../../hook/useWindowPosition'

const useStyles = makeStyles((theme) => ({
  root: {
    minHeight: '100vh',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    [theme.breakpoints.down("md")]:{
      flexDirection: 'column',
    },
  },
}));

function MainInfo() {
  const classes = useStyles();
  const checked = useWindowPosition('header');
  return (
    <div className={classes.root} id="place-to-visit">
      <ImageCard places={places[0]} checked={checked} />
      <ImageCard places={places[1]} checked={checked} />
    </div>
  )
}

export default MainInfo