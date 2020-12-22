import React from 'react';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(() => ({
  div: {
    color: 'rgb(220,216,181)',
  },
}));

export default function ControlPanel() {
  const classes = useStyles();
  return (
    <>
      <div className={classes.div}>
        <p>Тут будет погода и возможно что-то еще</p>
        <p>asdasdasdasdasdasd</p>
      </div>
    </>
  );
}
