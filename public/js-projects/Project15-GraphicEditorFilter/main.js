const brightnessBar = document.getElementById("brightnessBar");
const contrastBar = document.getElementById("contrastBar");
const saturationBar = document.getElementById("saturationBar");
const hueBar = document.getElementById("hueBar");
const blurBar = document.getElementById("blurBar");
// const image = document.querySelector(".image");
const root = document.documentElement;

// const changeImg = () => {
//   image.style.filter = `brightness(${brightnessBar.value}%)
//   contrast(${contrastBar.value}%)
//   saturate(${saturationBar.value}%)
//   hue-rotate(${hueBar.value}deg)
//   blur(${blurBar.value}px)`;
// };

// ++ zmienne w css

root.style.setProperty("--saturation", saturationBar.value + "%");
const changeImg = () => {
  root.style.setProperty("--brightness", brightnessBar.value + "%");
  root.style.setProperty("--contrast", contrastBar.value + "%");
  root.style.setProperty("--saturation", saturationBar.value + "%");
  root.style.setProperty("--hue", hueBar.value + "deg");
  root.style.setProperty("--blur", blurBar.value + "px");
};

[brightnessBar, contrastBar, saturationBar, hueBar, blurBar].forEach((bar) => {
  bar.addEventListener("input", changeImg);
});

// teleport button and goUp

const btnScroller = document.querySelector(".btnScroller");
const goUpBtn = document.querySelector(".goUpBtn");

console.log(window.scrollY);
const teleportFunction = () => {
  document
    .querySelector(".teleportSection")
    .scrollIntoView({ behavior: "smooth" });
};
const goUpFunction = () => {
  window.scrollTo({ top: 0, behavior: "smooth" });
};

btnScroller.addEventListener("click", teleportFunction);
goUpBtn.addEventListener("click", goUpFunction);
