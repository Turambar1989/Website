const square = document.createElement("div");
const divContainer = document.querySelector(".divContainer");
square.classList.add("square");
divContainer.appendChild(square);
let squareSize = 100;
square.style.height = squareSize + "px";
square.style.width = squareSize + "px";
let grow = true;
window.addEventListener("scroll", function () {
  if (grow == true) {
    squareSize += 5;
    square.style.height = squareSize + "px";
    square.style.width = squareSize + "px";
  } else {
    squareSize -= 5;
    square.style.height = squareSize + "px";
    square.style.width = squareSize + "px";
  }
  if (squareSize > window.innerWidth / 2) {
    grow = false;
  } else if (squareSize === 0) {
    grow = true;
  }
  if (squareSize > window.innerHeight / 2) {
    grow = false;
  } else if (squareSize === 0) {
    grow = true;
  }
});
