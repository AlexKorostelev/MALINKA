import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Link as Scroll } from 'react-scroll';
import { IconButton } from '@material-ui/core';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import ImageCard from '../ImageCard/ImageCard';
import places from '../../static/places';
import useWindowPosition from '../../hook/useWindowPosition';

const useStyles = makeStyles((theme) => ({
  root: {
    minHeight: '100vh',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    [theme.breakpoints.down('md')]: {
      flexDirection: 'column',
    },
  },
  goDown: {
    color: '#EE3261',
    fontSize: '4rem',
  },
  arrow: {
    alignSelf: 'flex-end',
  },
}));

function MainInfo() {
  const classes = useStyles();
  const checked = useWindowPosition('header');
  return (
    <>
      <div className={classes.root} id="place-to-visit">
        <ImageCard places={places[0]} checked={checked} />
        <span className={classes.arrow}>
          <Scroll to="slider" smooth>
            <IconButton>
              <ExpandMoreIcon className={classes.goDown} />
            </IconButton>
          </Scroll>
        </span>
        <ImageCard places={places[1]} checked={checked} />
      </div>
    </>
  );
}

export default MainInfo;
