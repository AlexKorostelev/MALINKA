/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import { Collapse } from '@material-ui/core';

const useStyles = makeStyles({
  root: {
    maxWidth: 545,
    background: 'rgba(0,0,0,0.5)',
    margin: '20px',
  },
  media: {
    height: 340,
  },
  title: {
    fontFamily: 'Nunito',
    fontWeight: 'bold',
    fontSize: '2rem',
    color: '#EE3261',
  },
  description: {
    fontFamily: 'Nunito',
    fontSize: '1.1rem',
    color: '#ddd',
  },
});

export default function ImageCard({ places, checked }) {
  const classes = useStyles();

  return (
    <Collapse in={checked} {...(checked ? { timeout: 1000 } : {})}>
      <Card className={classes.root}>
        <CardMedia
          className={classes.media}
          image={places.imageUrl}
          title="Contemplative Reptile"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h1" className={classes.title}>
            {places.title}
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p" className={classes.description}>
            {places.description}
          </Typography>
        </CardContent>
      </Card>
    </Collapse>
  );
}
