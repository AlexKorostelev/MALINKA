import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import BackgroundImg from '../../assets/error.gif';

const useStyles = makeStyles(() => ({
  err: {
    backgroundImage: `url(${BackgroundImg})`,
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
  },
  errText: {
    color: '#EE3261',
    fontSize: '70px',
  },
}));

export default function PageNotFound() {
  const classes = useStyles();
  return (
    <>
      <div className={classes.err}>
        <h2 className={classes.errText}>
          404 - Page not found
        </h2>
      </div>
    </>
  );
}
