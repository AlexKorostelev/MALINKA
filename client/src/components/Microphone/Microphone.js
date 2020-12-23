/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import React, { useEffect, useState } from 'react';
import SpeechRecognition, { useSpeechRecognition } from 'react-speech-recognition';
import styles from './microphone.module.scss';

let timerId;

const Microphone = () => {
  const { transcript, resetTranscript } = useSpeechRecognition();

  const [click, setClick] = useState(false);

  function clickHandler() {
    if (!click) {
      SpeechRecognition.startListening();
      setClick(true);
    } else {
      resetTranscript();
      setClick(false);
    }
  }

  function sendCommand(command) {
    fetch('http://192.168.1.53:3333/command', {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ command }),
    });
  }

  useEffect(() => {
    // eslint-disable-next-line no-lone-blocks
    /* if (transcript) */ {
      timerId = setTimeout(() => {
        sendCommand(transcript);
        setClick(false);
        // eslint-disable-next-line no-console
        console.log('\x1b[32m%s\x1b[0m', transcript);
      }, 1000);
    }
    return () => clearTimeout(timerId);
  }, [transcript]);

  if (!SpeechRecognition.browserSupportsSpeechRecognition()) {
    return null;
  }

  return (
    <>
      <div className={styles.container}>
        <div className={styles.mic_container} onClick={clickHandler}>
          <div className={click ? `${styles.mic_animate} ${styles.mic_body}` : styles.mic_body}>
            <div className={styles.mic_pill} />
            <div className={styles.mic_hole} />
            <div className={styles.mic_stand} />
            <div className={styles.mic_bottom} />
          </div>
          <div className={click ? `${styles.animate} ${styles.dots}` : `${styles.dots}`}>
            <div className={click ? `${styles.animate} ${styles.dots_left}` : `${styles.dots_left}`} />
            <div className={click ? `${styles.animate} ${styles.dots_middle}` : `${styles.dots_middle}`} />
            <div className={click ? `${styles.animate} ${styles.dots_right}` : `${styles.dots_right}`} />
          </div>
        </div>
        <div className={styles.mic_text}>
          <span>{transcript}</span>
        </div>
      </div>
    </>
  );
};
export default Microphone;
