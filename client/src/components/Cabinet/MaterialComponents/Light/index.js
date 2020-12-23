/* eslint-disable no-console */
import React from 'react';
import './style.css';
import FormControl from '@material-ui/core/FormControl';
import FormGroup from '@material-ui/core/FormGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Switch from '@material-ui/core/Switch';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(() => ({
  toggle: {
    display: 'grid',
    justifyItems: 'start',
    gridGap: '10px',
    direction: 'rtl',
    gridTemplateColumns: '1fr auto',
  },
  track: {
    backgroundColor: 'gray',
  },
}));

export default function SwitchesGroup() {
  const classes = useStyles();

  const [state, setState] = React.useState({
    first: false,
    second: false,
    third: false,
  });

  const handleChange = (event) => {
    setState({ ...state, [event.target.name]: event.target.checked });
  };

  const clickHandlerLight = (event) => {
    const requestOptionsOn = {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ command: 'включить свет' }),
    };
    // eslint-disable-next-line no-unused-vars
    const requestOptionsOff = {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ command: 'выключить свет' }),
    };
    if (event.target.checked) {
      fetch('http://192.168.1.53:3333/command', requestOptionsOn)
        .then((response) => response.json())
        .then((data) => console.log(data));
    } else {
      fetch('http://192.168.1.53:3333/command', requestOptionsOff)
        .then((response) => response.json())
        .then((data) => console.log(data));
    }
  };

  const clickHandlerSound = (event) => {
    const requestOptionsOn = {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ command: 'включить музыку' }),
    };
    // eslint-disable-next-line no-unused-vars
    const requestOptionsOff = {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ command: 'выключить музыку' }),
    };
    if (event.target.checked) {
      fetch('http://192.168.1.53:3333/command', requestOptionsOn)
        .then((response) => response.json())
        .then((data) => console.log(data));
    } else {
      fetch('http://192.168.1.53:3333/command', requestOptionsOff)
        .then((response) => response.json())
        .then((data) => console.log(data));
    }
  };
  return (
    <>
      <FormControl component="fieldset">
        <h3>Прихожая</h3>
        <FormGroup>
          <FormControlLabel
            control={(
              <Switch
                checked={state.first}
                onChange={handleChange}
                name="first"
                classes={{
                  track: classes.track,
                }}
              />
            )}
            label="Люстра"
            labelPlacement="start"
            className={classes.toggle}
            onClick={clickHandlerLight}
          />
          <FormControlLabel
            control={(
              <Switch
                checked={state.second}
                onChange={handleChange}
                name="second"
                classes={{
                  track: classes.track,
                }}
              />
            )}
            label="Музыка"
            labelPlacement="start"
            className={classes.toggle}
            onClick={clickHandlerSound}
          />
          <FormControlLabel
            control={(
              <Switch
                checked={state.third}
                onChange={handleChange}
                classes={{
                  track: classes.track,
                }}
                name="third"
              />
            )}
            label="Гирлянда"
            labelPlacement="start"
            className={classes.toggle}
            onClick={clickHandlerSound}
          />
        </FormGroup>
      </FormControl>
      <FormControl component="fieldset">
        <h3>Кухня</h3>
        <FormGroup>
          <FormControlLabel
            control={(
              <Switch
                checked={state.first}
                onChange={handleChange}
                name="first"
                classes={{
                  track: classes.track,
                }}
              />
            )}
            label="Общий свет"
            labelPlacement="start"
            className={classes.toggle}
            onClick={clickHandlerLight}
          />
          <FormControlLabel
            control={(
              <Switch
                checked={state.first}
                onChange={handleChange}
                name="first"
                classes={{
                  track: classes.track,
                }}
              />
            )}
            label="Подсветка"
            labelPlacement="start"
            className={classes.toggle}
            onClick={clickHandlerLight}
          />
          <FormControlLabel
            control={(
              <Switch
                checked={state.second}
                onChange={handleChange}
                name="second"
                classes={{
                  track: classes.track,
                }}
              />
            )}
            label="Вытяжка"
            labelPlacement="start"
            className={classes.toggle}
            onClick={clickHandlerSound}
          />
          <FormControlLabel
            control={(
              <Switch
                checked={state.third}
                onChange={handleChange}
                classes={{
                  track: classes.track,
                }}
                name="third"
              />
            )}
            label="Розетка 1"
            labelPlacement="start"
            className={classes.toggle}
            onClick={clickHandlerSound}
          />
        </FormGroup>
      </FormControl>
      <FormControl component="fieldset">
        <h3>Спальня</h3>
        <FormGroup>
          <FormControlLabel
            control={(
              <Switch
                checked={state.first}
                onChange={handleChange}
                name="first"
                classes={{
                  track: classes.track,
                }}
              />
            )}
            label="Общий свет"
            labelPlacement="start"
            className={classes.toggle}
            onClick={clickHandlerLight}
          />
          <FormControlLabel
            control={(
              <Switch
                checked={state.second}
                onChange={handleChange}
                name="second"
                classes={{
                  track: classes.track,
                }}
              />
            )}
            label="Лампа"
            labelPlacement="start"
            className={classes.toggle}
            onClick={clickHandlerSound}
          />
          <FormControlLabel
            control={(
              <Switch
                checked={state.third}
                onChange={handleChange}
                classes={{
                  track: classes.track,
                }}
                name="third"
              />
            )}
            label="Таршер"
            labelPlacement="start"
            className={classes.toggle}
            onClick={clickHandlerSound}
          />
        </FormGroup>
      </FormControl>
    </>
  );
}
