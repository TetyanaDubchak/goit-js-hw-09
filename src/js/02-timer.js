import flatpickr from "flatpickr";
import "flatpickr/dist/flatpickr.min.css";

const startBtnElem = document.querySelector('button[data-start]');
const inputElem = document.querySelector('input[id="datetime-picker"]');
const daysElem = document.querySelector('span[data-days]');
const hoursElem = document.querySelector('span[data-hours]');
const minutesElem = document.querySelector('span[data-minutes]');
const secondsElem = document.querySelector('span[data-seconds]');


const date = {
    minDate: new Date(),
};

const options = {
  enableTime: true,
  time_24hr: true,
  defaultDate: new Date(),
  minuteIncrement: 1,
  onClose(selectedDates) {
      // console.log(selectedDates[0]);
      if (selectedDates[0] <= date.minDate) {
            window.alert("Please choose a date in the future");
            startBtnElem.setAttribute('disabled', true);
    } else {
        startBtnElem.removeAttribute('disabled');
    }
  },
};

function convertMs(ms) {
  // Number of milliseconds per unit of time
  const second = 1000;
  const minute = second * 60;
  const hour = minute * 60;
  const day = hour * 24;

  // Remaining days
  const days = Math.floor(ms / day);
  // Remaining hours
  const hours = Math.floor((ms % day) / hour);
  // Remaining minutes
  const minutes = Math.floor(((ms % day) % hour) / minute);
  // Remaining seconds
  const seconds = Math.floor((((ms % day) % hour) % minute) / second);

  return { days, hours, minutes, seconds };
}

const datePicker = flatpickr(inputElem, options);

const timerHandler = (selectedDates) => {
  setInterval(() => {
    const startTime = datePicker.selectedDates[0].getTime();
    console.log(startTime);

    const currentTime = Date.now();
    console.log(currentTime);

    const deltaTime = startTime - currentTime;
    console.log(deltaTime);

    // повертає окремо days, hours, minutes, seconds
    const convertData = convertMs(deltaTime);  

    console.log(convertData);

    const addLeadingZero = (value) => {
      const UIvalue = value.padStart(2, '0');
      return UIvalue;
    };

    const days = convertData.days;
    const hours = convertData.hours;
    const minutes = convertData.minutes;
    const seconds = convertData.seconds;
     

    daysElem.innerHTML = addLeadingZero(days);
    hoursElem.innerHTML = addLeadingZero(hours);
    minutesElem.innerHTML = addLeadingZero(minutes);
    secondsElem.innerHTML = caddLeadingZero(seconds);

      
  }, 1000);
  
};

const fp = flatpickr(inputElem, options);
startBtnElem.addEventListener('click', timerHandler);




 