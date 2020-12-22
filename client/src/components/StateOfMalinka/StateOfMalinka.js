/* eslint-disable no-underscore-dangle */
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
// import StateCard from '../StateCard/StateCard';
import io from 'socket.io-client';
import StateCard2 from '../StateCard/StateCard2';

import { addPinSettings } from '../../redux/action-creators/actions';

const socket = io('http://localhost:3001',
  { transports: ['websocket'] });

export default function StateOfMalinka() {
  const pinSettings = useSelector((state) => state.pinSettings);
  const dispatch = useDispatch();

  useEffect(() => {
    (async () => {
      socket.on('connect', () => {
        console.log('connected');
      });
      socket.on('message', (data) => {
        console.log('message');
        dispatch(addPinSettings(data));
      });
      const resp = await fetch('http://localhost:3001/data');
      const data = await resp.json();
      dispatch(addPinSettings(data));
    })();
  }, []);

  console.log(pinSettings);

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
