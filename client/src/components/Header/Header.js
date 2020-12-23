/* eslint-disable react/jsx-props-no-spreading */
import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import {
  AppBar,
  Button,
  Collapse,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  IconButton,
  TextField,
  Toolbar,
} from '@material-ui/core';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import { Link as Scroll } from 'react-scroll';
import axios from 'axios';
import Tooltip from '@material-ui/core/Tooltip';

const useStyles = makeStyles(() => ({
  root: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: '100vh',
    fontFamily: 'Nunito',
  },
  appbar: {
    background: 'none',
  },
  appbarWrapper: {
    width: '80%',
    margin: '0 auto',
    display: 'flex',
    justifyContent: 'space-between',
  },
  appbarTitle: {
    // flexGrow: '1',
    userSelect: 'none',
  },
  icon: {
    color: '#fff',
    fontSize: '2rem',
  },
  colorText: {
    color: '#EE3261',
  },
  container: {
    textAlign: 'center',
  },
  title: {
    color: '#fff',
    fontSize: '4rem',
  },
  goDown: {
    color: '#EE3261',
    fontSize: '4rem',
  },
  unselectable: {
  },
}));

export default function Headers() {
  const classes = useStyles();
  const [checked, setChecked] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errorEmail, setErrorEmail] = useState(false);
  const [errorPassword, setErrorPassword] = useState(false);

  const history = useHistory();

  useEffect(() => {
    setChecked(true);
  }, []);

  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleSendUser = () => {
    axios.post('http://192.168.1.53:3333/auth/login', { email, password })
      .then((res) => {
        console.log(res.data);
        setOpen(false);
        // store.dispatch(AC.userLogin(data));
        history.push('/homelist');
      })
      .catch((err) => {
        setErrorEmail(true);
        setErrorPassword(true);
        console.log(err);
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
          <IconButton onClick={handleClickOpen}>
            <Tooltip title="Login" placement="left-start">
              <AccountCircleIcon className={classes.icon} />
            </Tooltip>
          </IconButton>
          <Dialog open={open} onClose={handleClose} aria-labelledby="Authorization" className={classes.modal}>
            <DialogTitle id="Authorization">Authorization</DialogTitle>
            <DialogContent>
              <DialogContentText>Пройдите авторизацию</DialogContentText>
              <TextField
                autoFocus
                error={errorEmail}
                margin="dense"
                value={email}
                id="name"
                label="Email Address"
                onChange={(e) => setEmail(e.target.value)}
                type="email"
                fullWidth
              />
              <TextField
                error={errorPassword}
                margin="dense"
                value={password}
                id="pass"
                onChange={(e) => setPassword(e.target.value)}
                label="Password"
                type="password"
                fullWidth
              />
            </DialogContent>
            <DialogActions>
              <Button onClick={handleClose} color="primary">Отменить</Button>
              <Button onClick={handleSendUser} color="primary">Войти</Button>
            </DialogActions>
          </Dialog>
        </Toolbar>
      </AppBar>

      <Collapse in={checked} {...(checked ? { timeout: 1000 } : {})} collapsedHeight={50}>
        <div className={classes.container}>
          <h1 className={classes.title}>
            Добро пожаловать в
            <br />
            MALINKA
            <span className={classes.colorText}><i>plus</i></span>
          </h1>
          <Scroll to="place-to-visit" smooth>
            <IconButton>
              <ExpandMoreIcon className={classes.goDown} />
            </IconButton>
          </Scroll>
        </div>
      </Collapse>

    </div>
  );
}
