//pierwszy akapit actual date
const dateSpan = document.querySelector(".dateSpan");
const clockSpan = document.querySelector(".clockSpan");
const clock = () => {
  const time = new Date();
  // time.toLocaleString();
  const seconds =
    time.getSeconds() < 10 ? "0" + time.getSeconds() : time.getSeconds();
  const minutes =
    time.getMinutes() < 10 ? "0" + time.getMinutes() : time.getMinutes();
  const hours = time.getHours() < 10 ? "0" + time.getHours() : time.getHours();
  dateSpan.textContent = time.toLocaleDateString();
  clockSpan.textContent = `${hours}:${minutes}:${seconds}`;
};
clock();
setInterval(clock, 1000);

//drugi akapit counting to

const changeTime = () => {
  const daysSpan = document.querySelector(".d");
  const hoursSpan = document.querySelector(".h");
  const minutesSpan = document.querySelector(".m");
  const secondsSpan = document.querySelector(".s");
  const nowTime = new Date().getTime(); // wartość w milisekudach
  const endTime = new Date("2025-06-04 13:00:00").getTime();
  //   const time = Math.floor((endTime - nowTime) / 1000); // ilość sekund
  const time = endTime - nowTime;
  let days = Math.floor(time / (1000 * 60 * 60 * 24));
  days = days < 10 ? `0${days}` : days;
  daysSpan.textContent = days;
  let hours = Math.floor((time / (1000 * 60 * 60)) % 24);
  hours = hours < 10 ? `0${hours}` : hours;
  hoursSpan.textContent = hours;
  let minutes = Math.floor((time / (1000 * 60)) % 60);
  minutes = minutes < 10 ? `0${minutes}` : minutes;
  minutesSpan.textContent = minutes;
  let seconds = Math.floor((time / 1000) % 60);
  seconds = seconds < 10 ? `0${seconds}` : seconds;
  secondsSpan.textContent = seconds;
};
changeTime();
setInterval(changeTime, 1000);

// 3 akapit stoper stopwatch
const startBtn = document.querySelector(".startBtn");
const resetBtn = document.querySelector(".resetBtn");
const watchContainer = document.querySelector(".watchContainer");
let clockTime = 0;
let active = false;
let intervalIndex;

const timerClock = () => {
  if (active === false) {
    active = true;
    startBtn.textContent = "Pauza";
    intervalIndex = setInterval(startClock, 10);
  } else if (active === true) {
    active = false;
    startBtn.textContent = "Start";
    clearInterval(intervalIndex);
  }
};
const startClock = () => {
  clockTime++;
  watchContainer.textContent = (clockTime / 100).toFixed(2);
};
const resetClock = () => {
  clockTime = 0;
  watchContainer.textContent = "---";
  clearInterval(intervalIndex);
  startBtn.textContent = "Start";
  active = false;
};
startBtn.addEventListener("click", timerClock);
resetBtn.addEventListener("click", resetClock);
