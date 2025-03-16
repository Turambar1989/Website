const mouseMove = (event) => {
  const centerTxt = document.querySelector("h2");
  const x = event.clientX;
  const y = event.clientY;
  centerTxt.textContent = `${x}, ${y}`;
  const width = window.innerWidth;
  const height = window.innerHeight;
  const red = (x / width) * 100;
  const green = (y / height) * 100;
  const blue = ((x / width) * 100 + (y / height) * 100) / 2;

  document.body.style.backgroundColor = `rgb(${red}%, ${green}%, ${blue}%)`;
};
const touchMove = function (e) {
  const centerTxt = document.querySelector("h2");
  const x = e.Touch.clientX;
  const y = e.Touch.clientY;
  centerTxt.textContent = `${x}, ${y}`;
  const width = window.innerWidth;
  const height = window.innerHeight;
  const red = (x / width) * 100;
  const green = (y / height) * 100;
  const blue = ((x / width) * 100 + (y / height) * 100) / 2;

  document.body.style.backgroundColor = `rgb(${red}%, ${green}%, ${blue}%)`;
};
document.body.addEventListener("mousemove", mouseMove);
document.body.addEventListener("touchmove", touchMove);
