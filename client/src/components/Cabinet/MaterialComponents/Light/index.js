import React from 'react';
import './style.css';
import FormControl from '@material-ui/core/FormControl';
import FormGroup from '@material-ui/core/FormGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormHelperText from '@material-ui/core/FormHelperText';
import Switch from '@material-ui/core/Switch';

export default function SwitchesGroup() {
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
            control={<Switch checked={state.first} onChange={handleChange} name="first" />}
            label="Люстра"
          />
          <FormControlLabel
            control={<Switch checked={state.second} onChange={handleChange} name="second" />}
            label="Общий свет"
          />
          <FormControlLabel
            control={<Switch checked={state.third} onChange={handleChange} name="third" />}
            label="Таршер"
          />
        </FormGroup>
        <FormHelperText>220w</FormHelperText>
      </FormControl>
    </>
  );
}
