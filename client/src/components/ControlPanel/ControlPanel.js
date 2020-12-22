import React from 'react';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(() => ({
  div: {
    color: 'lightsalmon',
  },
}));

export default function ControlPanel() {
  const classes = useStyles();
  return (
    <>
      <div className={classes.div}>
        <h1>Тут будет погода и прочая херабора</h1>
      </div>
    </>
  );
}
