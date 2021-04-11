import colors from "./colors.js";

const DELAY_TIME = 1000;

const ref = {
    'body': document.querySelector('body'),
    'startBtn': document.querySelector('button[data-action="start"]'),
    'stopBtn': document.querySelector('button[data-action="stop"]')
}

ref.startBtn.addEventListener("click", onStartBtnClick);
ref.stopBtn.addEventListener("click", onStopBtnClick);

//let isActive = false;
let intervalId;


function onStartBtnClick() {
    //if (isActive) {
    //  return;
    //}
    //isActive = true;
    intervalId = setInterval(() => {
        const randomChoise = randomIntegerFromInterval(colors.length);

        ref.body.style.backgroundColor = colors[randomChoise];
    }, DELAY_TIME);
    ref.startBtn.disabled = true
}
//  as min is always 0, so I made this function easier
function randomIntegerFromInterval(maxNumber) {
    return Math.floor(Math.random() * maxNumber);
}

function onStopBtnClick() {
    clearInterval(intervalId);
    //isActive = false;
    ref.startBtn.disabled = false;
}