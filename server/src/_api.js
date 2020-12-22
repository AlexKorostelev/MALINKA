const request = require('request');
const fetch = require('node-fetch');
const fs = require('fs');
const { URLSearchParams } = require('url');

// eslint-disable-next-line no-unused-vars
function Text2Sound(text, voice) {
  const params = new URLSearchParams();

  params.append('text', text);
  params.append('voice', voice);
  params.append('emotion', 'good');
  params.append('lang', 'ru-RU');
  params.append('speed', '1.0');
  params.append('format', 'oggopus');
  params.append('folderId', 'b1g136cbcbciridkm95t');

  fetch('https://tts.api.cloud.yandex.net/speech/v1/tts:synthesize', {
    method: 'post',
    body: params,
    headers: {
      Authorization: 'Bearer t1.9euelZqamImbyMfKjZaNlZTKisiNkO3rnpWayMaPyc-aj5WLjc6Xk8mSlp3l9PcMF1gB-u9PNzeI3fT3TEVVAfrvTzc3iA.Ag7Bpe1m5wpSwXDtlUVh59Rs3h03iQuGGtP3IzauniPgB1DS8JtLKkA5cslGy0oSvtyOPBWnfIpFVxnPuL1cDw',
    },
  })
    .then((res) => {
      console.log(res.status);
      const dest = fs.createWriteStream('data/output.ogg');
      res.body.pipe(dest);
    })
    .catch((err) => {
      console.error(err);
    });
}

// eslint-disable-next-line no-unused-vars
function Sound2Text(fileName) {
  const options = {
    method: 'POST',
    url: 'https://stt.api.cloud.yandex.net/speech/v1/stt:recognize?lang=ru-RU&topic=general&profanityFilter=false&format=oggopus&sampleRateHertz=48000&folderId=b1g136cbcbciridkm95t',
    headers: {
      Authorization: 'Bearer t1.9euelZqamImbyMfKjZaNlZTKisiNkO3rnpWayMaPyc-aj5WLjc6Xk8mSlp3l9PcMF1gB-u9PNzeI3fT3TEVVAfrvTzc3iA.Ag7Bpe1m5wpSwXDtlUVh59Rs3h03iQuGGtP3IzauniPgB1DS8JtLKkA5cslGy0oSvtyOPBWnfIpFVxnPuL1cDw',
      'Content-Type': 'audio/ogg',
    },
    body: fs.readFileSync(`data/${fileName}`),
  };
  request(options, (error, response) => {
    if (error) throw new Error(error);
    console.log(response.status);
    console.log('\x1b[1m\x1b[33m%s\x1b[0m', JSON.parse(response.body).result);
  });
}

// Sound2Text('333.wav');
module.exports = { Text2Sound, Sound2Text }