import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { useHistory } from 'react-router-dom';
import {
  AppBar,
  IconButton,
  Toolbar,
} from '@material-ui/core';
import axios from 'axios';
import Tooltip from '@material-ui/core/Tooltip';
import logoutIcon from '../../assets/sign-out-alt-solid.svg';

const useStyles = makeStyles(() => ({
  root: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    fontFamily: 'Nunito',
  },
  appbar: {
    background: 'none',
  },
  appbarTitle: {
    userSelect: 'none',
  },
  appbarWrapper: {
    width: '80%',
    margin: '0 auto',
    display: 'flex',
    justifyContent: 'space-between',
  },
  colorText: {
    color: '#EE3261',
  },
  icon: {
    color: '#fff',
    fontSize: '2rem',
  },
}));

export default function CabinetHeader() {
  const classes = useStyles();
  const history = useHistory();
  const logoutHandler = () => {
    axios.get('http://192.168.1.53:3333/auth/logout')
      .then((res) => {
        console.log(res.data);
        history.push('/');
      });
  };
  return (
    <div className={classes.root} id="header">
      <AppBar className={classes.appbar} elevation={0}>
        <Toolbar className={classes.appbarWrapper}>
          <h1 className={classes.appbarTitle}>
            MALINKA
            <span className={classes.colorText}><i>plus</i></span>
          </h1>
          <IconButton onClick={logoutHandler}>
            <Tooltip title="Logout" placement="left-start">
              <img src={logoutIcon} width="30rem" alt="logout" />
            </Tooltip>
          </IconButton>
        </Toolbar>
      </AppBar>
    </div>
  );
}
