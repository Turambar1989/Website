const divCreated = document.createElement("div");
const clickButton = document.querySelector(".clickButton");
const resetButton = document.querySelector(".resetButton");
const clickCounterDiv = document.querySelector(".clickCounterDiv");
//globalna

// let number = 0;
// const countClick = () => {
//   number++;
//   divCreated.textContent = `Number of clicks = ${number}`;
//   clickCounterDiv.appendChild(divCreated);
// };
// const resetClick = () => {
//   number = 0;
//   divCreated.textContent = `Number of clicks = ${number}`;
// };
// clickButton.addEventListener("click", countClick);
// resetButton.addEventListener("click", resetClick);

//closures zmienna jest zablokowana w funkcji (zwraca funkcję)
const addClick = (start = 0) => {
  let number = start;
  return () => {
    number++;
    divCreated.textContent = `Number of clicks = ${number}`;
    clickCounterDiv.appendChild(divCreated);
  };
};
const reset = () => {
  let number = 0;
  return () => {
    number;
    divCreated.textContent = `Number of clicks = ${number}`;
    clickCounterDiv.appendChild(divCreated);
  };
};
const counter = addClick();
const resetClick = reset();
clickButton.addEventListener("click", counter);
resetButton.addEventListener("click", resetClick);

// przykład 2 z operatorem warunkowym (tylko pamiętać żeby zwracać funkcję)
const addingDiv = document.createElement("div");
const checkingAgeDiv = document.querySelector(".checkingAgeDiv");

const user = (name = "", age) => {
  let userName = name;
  let userAge = age;
  function showName() {
    checkingAgeDiv.appendChild(addingDiv);
    addingDiv.textContent = `Hello ${userName}, ${
      userAge >= 18 ? "You can buy a beer" : "You can't buy a beer"
    } `;
  }
  return showName;
};

const gary = user("Gary", 20);
const eve = user("Eve", 17);

gary();
eve();

//closures timer na stronie ilość sekund
//globalna
const counterTimer = document.querySelector(".counterTimer");
// let number = 0;
// const addTime = () => {
//   number++;
//   counterTimer.textContent = number;
// };
// setInterval(addTime, 1000);

//closures
const addTime = () => {
  let number = 0;
  function showTime() {
    number++;
    counterTimer.textContent = number;
  }
  return showTime;
};
const addTimer = addTime(); // trzeba pamiętać o wywołaniu funkcji
setInterval(addTimer, 1000);
