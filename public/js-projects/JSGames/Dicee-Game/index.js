const refreshImg = document.querySelector("#refresh");
refreshImg.addEventListener("mouseover", (event) => {
  event.target.setAttribute("src", "./images/icons8-refresh.svg");
});
refreshImg.addEventListener("mouseout", (event) => {
  event.target.setAttribute("src", "./images/icons8-refresh-80.svg");
});

var x = Math.floor(Math.random() * 6) + 1;
if (x === 1) {
  x = "./images/dice1.png";
} else if (x === 2) {
  x = "./images/dice2.png";
} else if (x === 3) {
  x = "./images/dice3.png";
} else if (x === 4) {
  x = "./images/dice4.png";
} else if (x === 5) {
  x = "./images/dice5.png";
} else {
  x = "./images/dice6.png";
}
document.querySelector(".image-1").setAttribute("src", x);
var y = Math.floor(Math.random() * 6) + 1;
if (y === 1) {
  y = "./images/dice1.png";
} else if (y === 2) {
  y = "./images/dice2.png";
} else if (y === 3) {
  y = "./images/dice3.png";
} else if (y === 4) {
  y = "./images/dice4.png";
} else if (y === 5) {
  y = "./images/dice5.png";
} else {
  y = "./images/dice6.png";
}
document.querySelector(".image-2").setAttribute("src", y);
if (x > y) {
  document.getElementById("header").textContent = "Winner: Player1";
} else if (x < y) {
  document.getElementById("header").textContent = "Winner: Player2";
} else if (x === y) {
  document.getElementById("header").textContent = "Draw";
}
