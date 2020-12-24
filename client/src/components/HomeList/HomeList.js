/* eslint-disable no-underscore-dangle */
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import './style.css';
import { makeStyles } from '@material-ui/core/styles';
import { CssBaseline } from '@material-ui/core';
import HomeWorkIcon from '@material-ui/icons/HomeWork';
import AddCircleOutlineSharpIcon from '@material-ui/icons/AddCircleOutlineSharp';
import { amber } from '@material-ui/core/colors';
import { Link } from 'react-router-dom';
import CabinetHeader from '../CabinetHeader/CabinetHeader';
import BackgroundImg from '../../assets/newbg.jpeg';
import { addHomes } from '../../redux/action-creators/actions';

const useStyles = makeStyles(() => ({
  root: {
    paddingTop: '100px',
    gridGap: '20px',
    width: '100%',
    minHeight: '100vh',
    backgroundImage: `url(${BackgroundImg})`,
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover',
    display: 'grid',
    alignContent: 'start',
    justifyContent: 'center',
    fontFamily: 'Nunito',
  },
  div: {
    display: 'flex',
    flex: 1,
    flexDirection: 'column',
    alignItems: 'center',
    background: 'rgba(0,0,0,0.5)',
    margin: '0 10px',
    padding: '10px 20px',
    borderRadius: '4px',
    minWidth: '350px',
  },
  icon: {
    margin: '0',
    color: amber[50],
    fontSize: 55,
    '&:hover': {
      color: '#EE3261',
      transition: '.4s',
      padding: '1px',
    },
  },
  iconCircle: {
    margin: '0',
    color: amber[50],
    fontSize: 55,
    '&:hover': {
      color: '#EE3261',
      transition: '.7s',
      padding: '1px',
      transform: 'rotate(180deg)',
    },
  },
  main: {
    display: 'flex',
  },
  childDiv: {
    display: 'flex',
    alignItems: 'center',
    flexDirection: 'column',
    justifyContent: 'space-around',
    margin: '15px',
  },
}));

export default function HomeList() {
  const homes = useSelector((state) => state.homes);
  const classes = useStyles();
  const dispatch = useDispatch();

  useEffect(() => {
    (async () => {
      const resp = await fetch('http://localhost:3001/data/homes');
      const data = await resp.json();
      dispatch(addHomes(data));
      console.log(data);
    })();
  }, []);

  return (
    <>
      <CabinetHeader />
      <div className={classes.root}>
        <h2>Выберите ваш дом</h2>
        <CssBaseline />
        <div className={classes.div}>
          <h3>Здесь будут находиться все ваши дома</h3>
          <div className={classes.main}>
            {homes.length ? homes.map((el) => (
              <div key={el._id} className={classes.childDiv}>
                <Link to="/cabinet">
                  <HomeWorkIcon className={classes.icon} fontSize="large" />
                </Link>
                <h4>{el.name}</h4>
              </div>
            )) : <div>пока нет домов</div>}
            <div className={classes.childDiv}>
              <Link to="/">
                <AddCircleOutlineSharpIcon className={classes.iconCircle} fontSize="large" />
              </Link>
              <h4>Добавить</h4>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
