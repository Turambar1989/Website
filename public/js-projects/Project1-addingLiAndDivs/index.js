const btn = document.querySelector(".button");
const resetBtn = document.querySelector(".resetButton");
const unOrderedListElement = document.querySelector(".unOrderedList");
let number = 1;
function addLi() {
  const newLi = document.createElement("li");
  newLi.textContent = number;
  if (number % 3 === 0) {
    newLi.classList.add("big");
  }
  number = number + 2;
  unOrderedListElement.appendChild(newLi);
}
btn.addEventListener("click", function () {
  addLi();
});
resetBtn.addEventListener("click", () => {
  unOrderedListElement.innerHTML = "";
  number = 1;
});
const addButton = document.querySelector(".btn");
let numberSquare = 1;
addButton.addEventListener("click", function () {
  const CreatedDocument = document.createElement("div");
  CreatedDocument.classList.add("square");
  CreatedDocument.textContent = numberSquare;
  document.querySelector(".containerDiv").appendChild(CreatedDocument);
  if (numberSquare % 5 === 0) {
    CreatedDocument.classList.remove("square");
    CreatedDocument.classList.add("circle");
  }
  numberSquare = numberSquare + 1;
});
const resetSquareButton = document.querySelector(".resetSquareButton");
resetSquareButton.addEventListener("click", () => {
  numberSquare = 1;
  document.querySelector(".containerDiv").innerHTML = "";
});
