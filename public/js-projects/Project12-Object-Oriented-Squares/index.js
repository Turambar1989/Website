class AddSquare {
  constructor(selector, startNumber, step, reset) {
    this.addButton = document.querySelector(selector);
    this.numberSquare = startNumber;
    this.step = step;
    this.addButton.addEventListener("click", this.addElement.bind(this));
    this.resetSquareButton = document.querySelector(reset);
    this.resetSquareButton.addEventListener("click", this.resetAll.bind(this));
  }
  addElement() {
    const CreatedDocument = document.createElement("div");
    CreatedDocument.classList.add("square");
    CreatedDocument.textContent = this.numberSquare;
    this.numberSquare = this.numberSquare + this.step;
    if ((this.numberSquare - this.step) % 5 === 0) {
      {
        CreatedDocument.classList.remove("square");
        CreatedDocument.classList.add("circle");
      }
    }
    document.querySelector(".containerDiv").appendChild(CreatedDocument);
  }
  resetAll() {
    document.querySelector(".containerDiv").innerHTML = "";
    this.numberSquare = 3;
    this.step = 2;
  }
}

const newAddSquare = new AddSquare(".btn", 3, 2, ".resetSquareButton");
console.log(newAddSquare);

// const addButton = document.querySelector(".btn");
// let numberSquare = 1;
// addButton.addEventListener("click", function () {
//   const CreatedDocument = document.createElement("div");
//   CreatedDocument.classList.add("square");
//   CreatedDocument.textContent = numberSquare;
//   document.querySelector(".containerDiv").appendChild(CreatedDocument);
//   if (numberSquare % 5 === 0) {
//     CreatedDocument.classList.remove("square");
//     CreatedDocument.classList.add("circle");
//   }
//   numberSquare = numberSquare + 1;
// });
// const resetSquareButton = document.querySelector(".resetSquareButton");
// resetSquareButton.addEventListener("click", () => {
//   numberSquare = 1;
//   document.querySelector(".containerDiv").innerHTML = "";
// });
