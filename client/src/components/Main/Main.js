import React from 'react';
import SwipeableTextMobileStepper from './MainSlider'
import HorizontalLabelPositionBelowStepper from './MainSteps'
import styles from './main.module.css';

function Main() {
  return (
    <>
    <div className={styles.Container}>
      <h1>Умный дом - это просто!</h1>
      <SwipeableTextMobileStepper />
      <div className={styles.Paragraph}>
        <p>Умный дом, построенный на базе Raspberry Pi 3 — многофункциональный комплекс, позволяющий контролировать и управлять всеми элементами вашего места проживания, будь то квартира, дача или частный дом. Под его «руководством» работают многие элементы, начиная от лампочек в помещениях, заканчивая системой отопления и запуском систем, распознающих присутствие человека.</p>
      </div>
      <div className={styles.Paragraph}>
        <p>Каков принцип работы умного дома? Какие характеристики и возможности актуальны? Что учесть при настройке и подготовке к работе? Как собрать систему умный дом на базе Raspberry Pi 3?</p>
      </div>
      <h2>МАЛИНКА+ решила эти вопросы за вас!</h2>
      <h3>Три простых шага:</h3>
    </div>
      <div>
        <HorizontalLabelPositionBelowStepper/>
      </div>
    </>
  )
}

export default Main

