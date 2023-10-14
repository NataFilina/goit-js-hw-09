import flatpickr from "flatpickr";
import "flatpickr/dist/flatpickr.min.css";
import Notiflix from 'notiflix';

const elements = {
  input: document.querySelector('#datetime-picker'),
  btnStart: document.querySelector('[data-start]'),
  day: document.querySelector('[data-days]'),
  hour: document.querySelector('[data-hours]'),
  minute: document.querySelector('[data-minutes]'),
  second: document.querySelector('[data-seconds]')
}

elements.btnStart.setAttribute("disabled", true);
elements.btnStart.addEventListener('click', onChangeTime)

let content = {};
let counter = 0;

const options = {
  enableTime: true,
  time_24hr: true,
  defaultDate: new Date(),
  minuteIncrement: 1,
  onClose(selectedDates) {
    const now = new Date();
    let chose = Number(selectedDates[0]);
    if (now > chose) {
      Notiflix.Report.info('Please choose a date in the future', "To start the timer correctly, please select a date in the future");
      return;
    } else elements.btnStart.removeAttribute("disabled");
    counter = chose - now;
    content = convertMs(counter);
    addLeadingZero(content);
    
  },
};

flatpickr(elements.input, options); 

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

function addLeadingZero({ days, hours, minutes, seconds }) {
  return elements.day.textContent = `${days}`.padStart(2, "0"),
    elements.hour.textContent = `${hours}`.padStart(2, "0"),
    elements.minute.textContent = `${minutes}`.padStart(2, "0"),
    elements.second.textContent = `${seconds}`.padStart(2, "0");
}

function onChangeTime() {
  const timerId = setInterval(() => {
    if (counter <= 1000) {
      clearInterval(timerId);
      Notiflix.Report.success('Time is over', 'Congratulations, the time has come', 'Hooray!');
      return;
    } 
    counter -= 1000;
    content = convertMs(counter);
    addLeadingZero(content);
    
  }, 1000);
  elements.btnStart.setAttribute("disabled", true);
}