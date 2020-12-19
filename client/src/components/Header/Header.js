import React, { useState, useEffect } from 'react';
import {makeStyles} from '@material-ui/core/styles';
import { AppBar, Collapse, IconButton, Toolbar } from '@material-ui/core';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import { Link as Scroll } from 'react-scroll'


const useStyles = makeStyles((theme) => ({
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
    width: "80%",
    margin: '0 auto',
  },
  appbarTitle: {
    flexGrow: '1',
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
  }
}))

export default function Headers() {
  const classes = useStyles();
  const [checked, setChecked] = useState(false)
  useEffect(() => {
    setChecked(true);
  },[])
  return (
    <div className={classes.root} id="header">
      <AppBar className={classes.appbar} elevation={0}>
        <Toolbar className={classes.appbarWrapper}>
          <h1 className={classes.appbarTitle}>MALINKA<span className={classes.colorText}><i>plus</i></span></h1>
          <IconButton>
            <AccountCircleIcon className={classes.icon}/>
          </IconButton>
        </Toolbar>
      </AppBar>

      <Collapse in={checked} {...(checked ? { timeout: 1000 } : {})} collapsedHeight={50} >
        <div className={classes.container}>
          <h1 className={classes.title}>
            Добро пожаловать в<br /> 
            MALINKA<span className={classes.colorText}><i>plus</i></span>
          </h1>
          <Scroll to='place-to-visit' smooth={true}>
            <IconButton>
              <ExpandMoreIcon className={classes.goDown}/>
            </IconButton>
          </Scroll>
        </div>
      </Collapse>

    </div>
  )
}