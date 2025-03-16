const createDiv = document.createElement("div");
const divContainer = document.querySelector(".containerDiv");
createDiv.classList.add("createdDiv");
divContainer.appendChild(createDiv);
let heightSize = 100;
createDiv.style.height = heightSize + "px";
createDiv.style.backgroundColor = "#a27b5c";

let flague = true;
const resizeDiv = function () {
  if (flague == true) {
    heightSize += 5;
    createDiv.style.height = heightSize + "px";
    createDiv.style.backgroundColor = "#a27b5c";
  } else {
    heightSize -= 5;
    createDiv.style.height = heightSize + "px";
    createDiv.style.backgroundColor = "#2c3930";
  }
  if (heightSize > window.innerHeight / 2) {
    flague = false;
  } else if (heightSize === 0) {
    flague = true;
  }
};

document.addEventListener("scroll", resizeDiv);
