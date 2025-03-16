// 1 sposób moim zdaniem lepszy

// const mouseClick = (event) => {
//   const centerTxt = document.querySelector("h2");
//   const x = event.clientX;
//   const y = event.clientY;
//   centerTxt.innerText = `Cursor position:
//   x: ${x},
//   y: ${y}`;
//   if (x % 2 === 0 && y % 2 === 0) {
//     document.body.style.backgroundColor = "orange";
//   } else if (x % 2 === 1 && y % 2 === 1) {
//     document.body.style.backgroundColor = "yellow";
//   } else {
//     document.body.style.backgroundColor = "yellowgreen";
//   }
// };
// document.body.addEventListener("click", mouseClick);

// 2 sposób

const mouseClick = (event) => {
  const centerTxt = document.querySelector("h2");
  const x = event.clientX;
  const y = event.clientY;
  centerTxt.innerText = `Cursor position:
  x: ${x},
  y: ${y}`;
  const color = changeColor(event);
  document.body.style.backgroundColor = color;
};
const changeColor = (e) => {
  if (e.clientX % 2 === 0) {
    if (e.clientY % 2 === 0) {
      return "orange";
    } else return "yellowgreen";
  } else {
    if (e.clientY % 2 === 1) {
      return "yellow";
    } else return "yellowgreen";
  }
};
document.body.addEventListener("click", mouseClick);
