const clickBtn = document.querySelector(".button");
const resetButton1 = document.querySelector(".resetButton1");
//const ulList = document.querySelector(".ullist");
const liList = [...document.querySelectorAll("li")];
let fontNumber = 20;
//First Try// on Ul
// const ShowAndSize = function () {
//   ulList.style.display = "block";
//   ulList.style.fontSize = fontNumber + "px";
//   fontNumber++;
// };
// Second Try// on Li// for
const ShowAndSize = function () {
  for (let i = 0; i < liList.length; i++) {
    liList[i].style.display = "block";
    liList[i].style.fontSize = fontNumber + "px";
  }
  fontNumber++;
};
//Third Try// method for Each
// const ShowAndSize = function () {
//   liList.forEach((liItem) => {
//     liItem.style.display = "block";
//     liItem.style.fontSize = fontNumber + "px";
//   });
//   fontNumber++;
// };
clickBtn.addEventListener("click", ShowAndSize);
resetButton1.addEventListener("click", () => {
  for (let i = 0; i < liList.length; i++) {
    liList[i].style.display = "none";
  }
});

let size = 10;
let orderElement = 1;
const divContainer = document.querySelector(".secondContainer");
const ulCreate = document.createElement("ul");
const firstButtonContainer = document.querySelector(".firstButtonContainer");
const secondButtonContainer = document.querySelector(".secondButtonContainer");

const init = () => {
  const btn = document.createElement("button");
  const btn2 = document.createElement("button");
  btn.textContent = "ClickMe++";
  btn.style.marginBottom = `${2}px`;
  btn.classList.add("button");
  firstButtonContainer.appendChild(btn);
  btn2.textContent = "Hide&RemoveLi's";
  btn2.style.marginBottom = `${12}px`;
  btn2.classList.add("button");
  secondButtonContainer.appendChild(btn2);
  ulCreate.classList.add("list-group");
  ulCreate.style.listStyle = "none";
  ulCreate.style.display = "inline";
  divContainer.appendChild(ulCreate);
  btn.addEventListener("click", createLiElements);
  btn2.addEventListener("click", resetLiElements);
};

const createLiElements = () => {
  for (let i = 0; i < 10; i++) {
    const liCreate = document.createElement("li");
    liCreate.textContent = `Element ${orderElement}`;
    orderElement++;
    liCreate.style.fontSize = size + "px";
    liCreate.style.display = "block";
    size++;
    liCreate.style.color = "#2c3930";
    ulCreate.appendChild(liCreate);
  }
};
const resetLiElements = () => {
  while (ulCreate.firstChild) {
    ulCreate.removeChild(ulCreate.firstChild);
  }
};

init();
