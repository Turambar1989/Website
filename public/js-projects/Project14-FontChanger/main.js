const slider = document.querySelector(".slider");
const sampleText = document.querySelector(".sampleText");
const fontSelector = document.querySelector(".fontSelector");

slider.addEventListener("input", function (e) {
  sampleText.style.fontSize = e.target.value + "px";
  //   sampleText.style.fontSize = this.value + "px";
});
// fontSelector.addEventListener("change", function () {
//   sampleText.style.fontFamily = this.value;
// });
fontSelector.addEventListener("change", () => {
  sampleText.style.fontFamily = fontSelector.value;
});

// jak script będzie na górze htmla
// document.addEventListener("DOMContentLoaded", () =>{})
