const slideList = [
  {
    imgSrc: "./images/art1.jpg",
    imgText: "Trias",
  },
  {
    imgSrc: "./images/art2.jpg",
    imgText: "Jura",
  },
  {
    imgSrc: "./images/art3.jpg",
    imgText: "Cretaous",
  },
];

const image = document.querySelector("img.slider");
const h2 = document.querySelector("h2.slider");
const dots = [...document.querySelectorAll(".dots span")];

const buttonLeft = document.querySelector(".left");
const buttonRight = document.querySelector(".right");

const time = 3000;
let active = 0;

const changeDot = () => {
  const activeDot = dots.findIndex((dot) => dot.classList.contains("active"));
  dots[activeDot].classList.remove("active");
  dots[active].classList.add("active");
};

const changeSlide = () => {
  active++;
  if (active === slideList.length) {
    active = 0;
  }
  image.src = slideList[active].imgSrc;
  h2.textContent = slideList[active].imgText;
  changeDot();
};
let indexInterval = setInterval(changeSlide, time);

const left = function () {
  if (active === 0) {
    active = slideList.length - 1;
  } else --active;
  image.src = slideList[active].imgSrc;
  h2.textContent = slideList[active].imgText;
  changeDot();
  clearInterval(indexInterval);
  indexInterval = setInterval(changeSlide, time);
};
const right = function () {
  if (active == slideList.length - 1) {
    active = 0;
  } else ++active;
  image.src = slideList[active].imgSrc;
  h2.textContent = slideList[active].imgText;
  changeDot();
  clearInterval(indexInterval);
  indexInterval = setInterval(changeSlide, time);
};
// 1 sposób
// function keyDown(key) {
//   switch (key) {
//     case "ArrowLeft":
//       if (active === 0) {
//         active = slideList.length - 1;
//       } else --active;
//       image.src = slideList[active].imgSrc;
//       h2.textContent = slideList[active].imgText;
//       changeDot();
//       clearInterval(indexInterval);
//       indexInterval = setInterval(changeSlide, time);
//       break;
//     case "ArrowRight":
//       if (active == slideList.length - 1) {
//         active = 0;
//       } else ++active;
//       image.src = slideList[active].imgSrc;
//       h2.textContent = slideList[active].imgText;
//       changeDot();
//       clearInterval(indexInterval);
//       indexInterval = setInterval(changeSlide, time);
//       break;
//     default:
//   }
// }
// document.window(
//   addEventListener("keydown", function (e) {
//     keyDown(e.key);
//   })
// );

// 2 sposób
const changeKey = (e) => {
  if (e.key == "ArrowLeft" || e.key == "ArrowRight") {
    clearInterval(indexInterval);
    e.key == "ArrowLeft" ? active-- : active++;
    if (active === slideList.length) {
      active = 0;
    } else if (active < 0) {
      active = slideList.length - 1;
    }
    image.src = slideList[active].imgSrc;
    h2.textContent = slideList[active].imgText;
    changeDot();
    indexInterval = setInterval(changeSlide, time);
  }
};

window.addEventListener("keydown", changeKey);

buttonLeft.addEventListener("click", left);
buttonRight.addEventListener("click", right);
