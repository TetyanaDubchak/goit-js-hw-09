function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16).padStart(6, 0)}`;
}

const body = document.querySelector('body');
const startBtnElem = document.querySelector('button[data-start]');
const stopBtnElem = document.querySelector('button[data-stop]');

let timerId = null;

startBtnElem.addEventListener('click', onStartBtnHandler);
stopBtnElem.addEventListener('click', onStopBtnHandler);

function onStartBtnHandler(evt) {
    timerId = setInterval(() => {
        body.style.backgroundColor = getRandomHexColor()
    }, 1000);
    evt.currentTarget.setAttribute('disabled', true);
    stopBtnElem.removeAttribute('disabled');
};

function onStopBtnHandler(evt) {
    clearInterval(timerId);
    evt.currentTarget.setAttribute('disabled', true);
    startBtnElem.removeAttribute('disabled');
}
