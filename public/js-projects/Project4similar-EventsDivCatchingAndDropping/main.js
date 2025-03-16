const divContainer = document.querySelector(".divContainer");
let divX = 0;
let divY = 0;
let catchingActive = false;

const mouseDown = () => {
  divContainer.style.backgroundColor = "#2c3930";
  catchingActive = true;
};
const mouseMove = (e) => {
  if (catchingActive === true) {
    divX = e.clientX;
    divY = e.clientY;
    divContainer.style.left = divX + "px";
    divContainer.style.top = divY + "px";
  }
};
const mouseUp = () => {
  divContainer.style.backgroundColor = "#a27b5c";
  catchingActive = false;
};

divContainer.addEventListener("mousedown", mouseDown);
divContainer.addEventListener("mousemove", mouseMove);
divContainer.addEventListener("mouseup", mouseUp);
