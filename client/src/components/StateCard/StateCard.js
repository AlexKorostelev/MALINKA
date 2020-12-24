/* eslint-disable max-len */
/* eslint-disable react/prop-types */
/* eslint-disable react/jsx-indent */
import React from 'react';
import EmojiObjectsIcon from '@material-ui/icons/EmojiObjects';
import { green } from '@material-ui/core/colors';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(() => ({
  root: {
    marginBottom: '7px',
  },
  mainContainer: {
    display: 'flex',
    alignItems: 'center',
  },
  stateName: {
    margin: '5px 15px 10px 0',
    paddingTop: '1px',
    fontSize: '1rem',
    letterSpacing: '0.00938em',
    fontWeight: 400,
    fontFamily: 'Roboto',
  },
  leftState: {
    display: 'flex',
    minWidth: '170px',
  },
  rightLamps: {
    display: 'flex',
  },
}));

export default function StateCard({ state, name }) {
  const classes = useStyles();
  return (
    <>
      <div className={classes.mainContainer}>
        <div className={classes.leftState}>
          <span className={classes.stateName}>{name}</span>
        </div>
        <div className={classes.rightLamps}>
          {state ? <EmojiObjectsIcon className={classes.root} style={{ color: green[500] }} /> : <EmojiObjectsIcon className={classes.root} />}
        </div>
      </div>
    </>
  );
}
