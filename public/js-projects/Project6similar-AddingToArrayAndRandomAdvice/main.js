const arrayButton = document.querySelector(".arrayButton");
const names = [];
const arrayContainer = document.querySelector(".arrayContainer");
const addToArray = (e) => {
  e.preventDefault();
  const input = document.querySelector(".inputName");
  const newName = input.value;
  if (input.value.length > 0) {
    for (const name of names) {
      if (name === newName) {
        alert("You are trying to add the same word!");
        return;
      }
    }
    names.push(newName);
    arrayContainer.textContent += newName + ", ";
    input.value = "";
  }
};
arrayButton.addEventListener("click", addToArray);

// Second Input

let advicesArray = ["Fight!", "Run!"];
const posAddButton = document.querySelector(".posAddButton");

const addAdvice = (e) => {
  e.preventDefault();
  const inputPos2 = document.querySelector(".inputPos2");
  const newAdvice = inputPos2.value;
  if (inputPos2.value.length > 0) {
    for (const advice of advicesArray) {
      if (advice === newAdvice) {
        alert("You are trying to add the same word!");
        return;
      }
    }
    advicesArray.push(newAdvice);
    alert(`You add "${newAdvice}" to list`);
    inputPos2.value = "";
  }
  console.log(advicesArray);
};
posAddButton.addEventListener("click", addAdvice);

const resetButton = document.querySelector(".resetButton");
const posContainer = document.querySelector(".posContainer");

const resetArray = () => {
  advicesArray = [];
  console.log(advicesArray);
  posContainer.textContent = "";
};

resetButton.addEventListener("click", resetArray);

const showButton = document.querySelector(".showButton");

const showAdvice = () => {
  const indexArray = Math.floor(Math.random() * advicesArray.length);
  console.log(indexArray);
  posContainer.textContent = advicesArray[indexArray];
};
showButton.addEventListener("click", showAdvice);

const showPosButton = document.querySelector(".showPosButton");
const showPos = () => {
  const posContainer = document.querySelector(".posContainer");
  posContainer.textContent = advicesArray;
  console.log(advicesArray);
  alert(advicesArray.join(" --- "));
};
showPosButton.addEventListener("click", showPos);
