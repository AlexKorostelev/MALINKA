/* eslint-disable no-underscore-dangle */
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
// import StateCard from '../StateCard/StateCard';
import StateCard2 from '../StateCard/StateCard2';

import { addPinSettings } from '../../redux/action-creators/actions';

export default function StateOfMalinka() {
  const pinSettings = useSelector((state) => state.pinSettings);
  const dispatch = useDispatch();

  useEffect(() => {
    (async () => {
      const resp = await fetch('http://localhost:3001/data');
      const data = await resp.json();
      dispatch(addPinSettings(data));
    })();
  }, []);

  if (pinSettings.length) {
    return (
      <>
        {pinSettings.map((el) => (
          <StateCard2
            key={el._id}
            state={el.state}
            name={el.name}
          />
        ))}
      </>
    );
  }

  return (
    <>
      <h3>Состояние</h3>
      Пока неизвестно
    </>
  );
}
