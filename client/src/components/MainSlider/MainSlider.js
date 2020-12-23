/* eslint-disable react/prop-types */
/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import {
  Collapse,
  Paper,
  Typography,
} from '@material-ui/core';
import SwipeableViews from 'react-swipeable-views';
import { autoPlay } from 'react-swipeable-views-utils';
import DaniilFace from '../../assets/faces/DANYA.png';
import DaniusFace from '../../assets/faces/DEN.png';
import AlekseyFace from '../../assets/faces/LEHA.png';
import AleksFace from '../../assets/faces/SANYA.png';
import StanislavFace from '../../assets/faces/STAN.png';

const AutoPlaySwipeableViews = autoPlay(SwipeableViews);

const tutorialSteps = [
  {
    label: 'Александр Коростелев',
    imgPath: AleksFace,
  },
  {
    label: 'Дайнюс Пулокас',
    imgPath: DaniusFace,
  },
  {
    label: 'Даниил Мишарев',
    imgPath: DaniilFace,
  },
  {
    label: 'Станислав Гришин',
    imgPath: StanislavFace,
  },
  {
    label: 'Алексей Максимушкин',
    imgPath: AlekseyFace,
  },
];

const useStyles = makeStyles((theme) => ({
  sliderContainer: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    minHeight: '100vh',
    padding: '10px',
    background: 'transparent',
  },
  root: {
    maxWidth: 545,
    flexGrow: 1,
    background: 'transparent',
  },
  header: {
    display: 'flex',
    alignItems: 'flex-start',
    justifyContent: 'center',
    backgroundColor: 'transparent',
    height: '80px',
    paddingLeft: theme.spacing(4),
    color: '#ddd',
  },
  img: {
    // height: 255,
    display: 'block',
    // maxWidth: 400,
    overflow: 'hidden',
    width: '100%',
    height: '100%',
    padding: '10px',
    margin: '0',
  },
  typo: {
    fontSize: '1.65rem',
    fontFamily: 'Nunito',
  },
  title: {
    color: '#EE3261',
    marginTop: '10vh',
    fontFamily: 'Nunito',
  },
}));

export default function MainSlider({ checked }) {
  const classes = useStyles();
  const theme = useTheme();
  const [activeStep, setActiveStep] = React.useState(0);

  const handleStepChange = (step) => {
    setActiveStep(step);
  };

  return (
    <>
      <div className={classes.sliderContainer}>
        <div className={classes.root} id="slider">
          <Collapse in={checked} {...(checked ? { timeout: 1000 } : {})}>
            <h1 className={classes.title}>
              Наша команда
            </h1>
            <div className={classes.root}>
              <AutoPlaySwipeableViews
                axis={theme.direction === 'rtl' ? 'x-reverse' : 'x'}
                index={activeStep}
                onChangeIndex={handleStepChange}
                enableMouseEvents
              >
                {tutorialSteps.map((step, index) => (
                  <div key={step.label}>
                    {Math.abs(activeStep - index) <= 2 ? (
                      <img className={classes.img} src={step.imgPath} alt={step.label} />
                    ) : null}
                  </div>
                ))}
              </AutoPlaySwipeableViews>
              <Paper square elevation={0} className={classes.header}>
                <Typography className={classes.typo}>{tutorialSteps[activeStep].label}</Typography>
              </Paper>
            </div>
          </Collapse>
        </div>
      </div>
    </>
  );
}
