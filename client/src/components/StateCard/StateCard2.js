/* eslint-disable max-len */
/* eslint-disable react/prop-types */
/* eslint-disable react/jsx-indent */
import React from 'react';
import EmojiObjectsIcon from '@material-ui/icons/EmojiObjects';
import { green } from '@material-ui/core/colors';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  root: {
    '& > svg': {
      margin: theme.spacing(2),
    },
  },
  mainContainer: {
    display: 'flex',
    alignItems: 'center',
  },
  stateName: {
    margin: '5px 15px 10px 0',
    paddingTop: '1px',
    fontWeight: '400',
    fontSize: '1rem',
    letterSpacing: '0.00938em',
  },
}));

export default function StateCard2({ state, name }) {
  const classes = useStyles();
  return (
    <>
      <div className={classes.mainContainer}>
        <span className={classes.stateName}>{name}</span>
        {state ? <EmojiObjectsIcon className={classes.root} style={{ color: green[500] }} /> : <EmojiObjectsIcon className={classes.root} />}
      </div>
    </>
  );
}
