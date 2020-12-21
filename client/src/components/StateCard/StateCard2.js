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
}));

export default function StateCard2({ state, name }) {
  const classes = useStyles();
  return (
    <>
      <div>
        <p>
          {name}
        -
         {state ? <EmojiObjectsIcon className={classes.root} style={{ color: green[500] }} /> : <EmojiObjectsIcon className={classes.root} />}
        </p>
      </div>
    </>
  );
}
