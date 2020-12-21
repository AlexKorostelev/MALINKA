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
  },
});

export default function StateCard({ state, id, name, pinNum, pinType }) {
  const classes = useStyles();
  return (
    <Card className={classes.root}>
      <CardContent>
        <Typography variant="h5" component="h2">
          {id}
        </Typography>

        <Typography variant="h5" component="h2">
          {name}
        </Typography>

        <Typography className={classes.pos} color="textSecondary">
          {state}
        </Typography>

        <Typography variant="body2" component="p">
          {pinNum}
        </Typography>

        <Typography variant="body2" component="p">
          {pinType}
        </Typography>
      </CardContent>
    </Card>
  );
}
