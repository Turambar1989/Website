const upButton = document.querySelector(".upButton");
const downButton = document.querySelector(".downButton");
const resetButton = document.querySelector(".resetButton");
const buttonsContainer = document.querySelector(".container");
let timer = null;
let red = 162;
let green = 123;
let blue = 92;
buttonsContainer.style.backgroundColor = `rgb(${red}, ${green}, ${blue})`;
function mouseDone() {
  clearInterval(timer);
}

upButton.addEventListener("mousedown", function () {
  timer = setInterval(function () {
    if ((red && blue && green) <= 254) {
      red++;
      green++;
      blue++;
    } else {
      red = 255;
      green = 255;
      blue = 255;
    }
    buttonsContainer.style.backgroundColor = `rgb(${red}, ${green}, ${blue})`;
  }, 50);
});

upButton.addEventListener("mouseup", mouseDone);
upButton.addEventListener("mouseleave", mouseDone);

downButton.addEventListener("mousedown", function () {
  timer = setInterval(function () {
    if ((red && blue && green) >= 0) {
      red--;
      green--;
      blue--;
    } else {
      red = 0;
      green = 0;
      blue = 0;
    }
    buttonsContainer.style.backgroundColor = `rgb(${red}, ${green}, ${blue})`;
  }, 50);
});

downButton.addEventListener("mouseup", mouseDone);
downButton.addEventListener("mouseleave", mouseDone);

resetButton.addEventListener("click", function () {
  red = 162;
  green = 123;
  blue = 92;
  buttonsContainer.style.backgroundColor = `rgb(${red}, ${green}, ${blue})`;
});

// const arrowUp = function (e) {
//   if (e.key == "ArrowUp") {
//     if ((red && blue && green) <= 254) {
//       red++;
//       green++;
//       blue++;
//     } else {
//       red = 255;
//       green = 255;
//       blue = 255;
//     }
//     buttonsContainer.style.backgroundColor = `rgb(${red}, ${green}, ${blue})`;
//   }
// };
// const arrowDown = (e) => {
//   if (e.key == "ArrowDown") {
//     if ((red && blue && green) >= 0) {
//       red--;
//       green--;
//       blue--;
//     } else {
//       red = 0;
//       green = 0;
//       blue = 0;
//     }
//     buttonsContainer.style.backgroundColor = `rgb(${red}, ${green}, ${blue})`;
//   }
// };

// window.addEventListener("keydown", arrowUp);
// window.addEventListener("keydown", arrowDown);
window.addEventListener("keydown", function (e) {
  if (e.key == "r") {
    red = 162;
    green = 123;
    blue = 92;
    buttonsContainer.style.backgroundColor = `rgb(${red}, ${green}, ${blue})`;
  }
});

const keyDown = (e) => {
  switch (e.key) {
    case "ArrowDown":
      buttonsContainer.style.backgroundColor = `rgb(${red > 0 ? red-- : red}, ${
        green > 0 ? green-- : green
      }, ${blue > 0 ? blue-- : blue})`;
      break;
    case "ArrowUp":
      buttonsContainer.style.backgroundColor = `rgb(${
        red < 255 ? red++ : red
      }, ${green < 255 ? green++ : green}, ${blue < 255 ? blue++ : blue})`;
      break;
  }
};

window.addEventListener("keydown", keyDown);
