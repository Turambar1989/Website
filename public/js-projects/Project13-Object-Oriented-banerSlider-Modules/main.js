import Slider from "./Slider.js";
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

const slider = new Slider(
  slideList,
  "img.slider",
  "h2.slider",
  ".dots span",
  2000,
  0
);
slider.start();
