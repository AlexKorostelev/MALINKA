/* eslint-disable react/prop-types */
import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles({
  root: {
    minWidth: 275,
  },
  title: {
    fontSize: 14,
  },
  pos: {
    marginBottom: 12,
    color: 'rgb(168,164,136)',
  },
});

export default function StateCard({ state, name }) {
  const classes = useStyles();
  return (
    <Card className={classes.root}>
      <CardContent>
        <Typography variant="h5" component="h2">
          {name}
        </Typography>

        <Typography className={classes.pos} color="textSecondary">
          {state ? 'Включено' : 'Выключено'}
        </Typography>
      </CardContent>
    </Card>
  );
}
