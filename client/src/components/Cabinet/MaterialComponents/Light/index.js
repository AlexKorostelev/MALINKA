import React from 'react';
import './style.css';
import FormControl from '@material-ui/core/FormControl';
import FormGroup from '@material-ui/core/FormGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormHelperText from '@material-ui/core/FormHelperText';
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

  return (
    <>
      <FormControl component="fieldset">
        <h3>Прихожая Свет</h3>
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
            label="Общий свет"
            labelPlacement="start"
            className={classes.toggle}

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
          />
        </FormGroup>
        <FormHelperText>220w</FormHelperText>
      </FormControl>
    </>
  );
}
