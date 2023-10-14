const elements = {
    btnStart: document.querySelector('[data-start]'),
    btnStop: document.querySelector('[data-stop]'),
    body: document.querySelector('body')
}

elements.btnStart.addEventListener('click', onStart);
elements.btnStop.addEventListener('click', onStop);

let timerId = null;

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16).padStart(6, 0)}`;
}

function onStart() {
    elements.btnStart.setAttribute("disabled", true);
    timerId = setInterval(() => elements.body.style.backgroundColor = getRandomHexColor(), 1000);
}

function onStop() {
    elements.btnStart.removeAttribute("disabled");
    clearInterval(timerId);
}