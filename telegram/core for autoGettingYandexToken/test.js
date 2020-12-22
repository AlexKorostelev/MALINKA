const { spawn } = require("child_process");

const getYandexToken = spawn('node',['test1.js']);

getYandexToken.stdout.on("data", data => {
    console.log(`I have got this data from test1 file: ${data} Thank you`);
});

getYandexToken.stderr.on("data", data => {
    console.log(`stderr: ${data}`);
});

getYandexToken.on('error', (error) => {
    console.log(`error: ${error.message}`);
});

getYandexToken.on("close", code => {
    console.log(`child process exited with code ${code}`);
});
