/* eslint-disable react/destructuring-assignment */
/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable no-undef */
/* eslint-disable no-plusplus */
/* eslint-disable no-unused-expressions */
/* eslint-disable react/react-in-jsx-scope */
import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import PropTypes from 'prop-types';
import CircularProgress from '@material-ui/core/CircularProgress';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import BackgroundImg from '../../assets/newbg.jpeg';

const useStyles = makeStyles(() => ({
  loadingPage: {
    minHeight: '100vh',
    minWidth: '100vh',
    backgroundSize: 'cover',
    backgroundRepeat: 'repeat',
    backgroundAttachment: 'fixed',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'column',
    fontFamily: 'Nunito',
    backgroundImage: `url(${BackgroundImg})`,
  },
  loadingTitle: {
    fontSize: '3rem',
    color: 'rgb(220,216,181)',
  },
}));

const LoadingToRedirect = (props) => {
  const [count, setCount] = useState(5);
  const classes = useStyles();
  const history = useHistory();

  useEffect(() => {
    const interval = setInterval(() => {
      // eslint-disable-next-line no-param-reassign
      setCount((currentCount) => --currentCount);
    }, 1000);
    count === 0 && history.push('/');

    return () => clearInterval(interval);
  }, [count, history]);

  return (
    <>
      <div className={classes.loadingPage}>
        <div className={classes.loadingTitle}>
          <p>
            Redirecting you in
            {' '}
            {count}
            {' '}
            seconds
          </p>
        </div>
        <div className={classes.load}>
          <Box position="relative" display="inline-flex">
            <CircularProgress variant="determinate" {...props} />
            <Box
              top={0}
              left={0}
              bottom={0}
              right={0}
              position="absolute"
              display="flex"
              alignItems="center"
              justifyContent="center"
            >
              <Typography variant="caption" component="div" color="#ddd">
                {`${Math.round(
                  props.value,
                )}%`}
              </Typography>
            </Box>
          </Box>
        </div>
      </div>
    </>
  );
};

LoadingToRedirect.propTypes = {
  value: PropTypes.number.isRequired,
};

export default function CircularStatic() {
  const [progress, setProgress] = React.useState(10);

  React.useEffect(() => {
    const timer = setInterval(() => {
      setProgress((prevProgress) => (prevProgress >= 100 ? 0 : prevProgress + 10));
    }, 500);
    return () => {
      clearInterval(timer);
    };
  }, []);
  return <LoadingToRedirect color="secondary" value={progress} useStyles={useStyles} />;
}
