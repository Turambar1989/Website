const allButtons = [...document.querySelectorAll(".box")];

const button1 = document.querySelector(".box1");
const button2 = document.querySelector(".box2");
const button3 = document.querySelector(".box3");
const button4 = document.querySelector(".box4");
const button5 = document.querySelector(".box5");
const button6 = document.querySelector(".box6");
const button7 = document.querySelector(".box7");
const button8 = document.querySelector(".box8");
const button9 = document.querySelector(".box9");

const btn = document.querySelector("button");
const game = {
  player1: [],
  player2: [],
};
let computer = [
  "one",
  "two",
  "three",
  "four",
  "five",
  "six",
  "seven",
  "eight",
  "nine",
];
const includesAll = (arr, values) => values.every((v) => arr.includes(v));

function winnerCheck() {
  const winArray0 = ["one", "two", "three"];
  const winArray1 = ["four", "five", "six"];
  const winArray2 = ["seven", "eight", "nine"];
  const winArray3 = ["one", "four", "seven"];
  const winArray4 = ["two", "five", "eight"];
  const winArray5 = ["three", "six", "nine"];
  const winArray6 = ["one", "five", "nine"];
  const winArray7 = ["three", "five", "seven"];

  if (includesAll(game.player1, winArray0)) {
    document.querySelector(".turn").textContent = "Player1 Wins";
    document.querySelector(".turn").style.color = "green";
  } else if (includesAll(game.player1, winArray1)) {
    document.querySelector(".turn").textContent = "Player1 Wins";
    document.querySelector(".turn").style.color = "green";
  } else if (includesAll(game.player1, winArray2)) {
    document.querySelector(".turn").textContent = "Player1 Wins";
    document.querySelector(".turn").style.color = "green";
  } else if (includesAll(game.player1, winArray3)) {
    document.querySelector(".turn").textContent = "Player1 Wins";
    document.querySelector(".turn").style.color = "green";
  } else if (includesAll(game.player1, winArray4)) {
    document.querySelector(".turn").textContent = "Player1 Wins";
    document.querySelector(".turn").style.color = "green";
  } else if (includesAll(game.player1, winArray5)) {
    document.querySelector(".turn").textContent = "Player1 Wins";
    document.querySelector(".turn").style.color = "green";
  } else if (includesAll(game.player1, winArray6)) {
    document.querySelector(".turn").textContent = "Player1 Wins";
    document.querySelector(".turn").style.color = "green";
  } else if (includesAll(game.player1, winArray7)) {
    document.querySelector(".turn").textContent = "Player1 Wins";
    document.querySelector(".turn").style.color = "green";
  } else if (includesAll(game.player2, winArray0)) {
    document.querySelector(".turn").textContent = "Player2 Wins";
    document.querySelector(".turn").style.color = "red";
  } else if (includesAll(game.player2, winArray1)) {
    document.querySelector(".turn").textContent = "Player2 Wins";
    document.querySelector(".turn").style.color = "red";
  } else if (includesAll(game.player2, winArray2)) {
    document.querySelector(".turn").textContent = "Player2 Wins";
    document.querySelector(".turn").style.color = "red";
  } else if (includesAll(game.player2, winArray3)) {
    document.querySelector(".turn").textContent = "Player2 Wins";
    document.querySelector(".turn").style.color = "red";
  } else if (includesAll(game.player2, winArray4)) {
    document.querySelector(".turn").textContent = "Player2 Wins";
    document.querySelector(".turn").style.color = "red";
  } else if (includesAll(game.player2, winArray5)) {
    document.querySelector(".turn").textContent = "Player2 Wins";
    document.querySelector(".turn").style.color = "red";
  } else if (includesAll(game.player2, winArray6)) {
    document.querySelector(".turn").textContent = "Player2 Wins";
    document.querySelector(".turn").style.color = "red";
  } else if (includesAll(game.player2, winArray7)) {
    document.querySelector(".turn").textContent = "Player2 Wins";
    document.querySelector(".turn").style.color = "red";
  } else if (game.player1.length === 5) {
    document.querySelector(".turn").textContent = "DRAW!";
    document.querySelector(".turn").style.color = "grey";
  } else if (game.player2.length === 5) {
    document.querySelector(".turn").textContent = "DRAW!";
    document.querySelector(".turn").style.color = "grey";
  }
}
// const endGame = function () {
//   if (
//     document.querySelector(".turn").textContent == "DRAW!" ||
//     document.querySelector(".turn").textContent == "Player2 Wins" ||
//     document.querySelector(".turn").textContent == "Player1 Wins"
//   ) {
//     alert("Game Over!!");
//     return 0;
//   }
// };

const computerChoice = function () {
  let index = Math.floor(Math.random() * computer.length);
  game.player2.push(computer[index]);

  if (computer[index] == "one") {
    button1.textContent = "O";
  } else if (computer[index] == "two") {
    button2.textContent = "O";
  } else if (computer[index] == "three") {
    button3.textContent = "O";
  } else if (computer[index] == "four") {
    button4.textContent = "O";
  } else if (computer[index] == "five") {
    button5.textContent = "O";
  } else if (computer[index] == "six") {
    button6.textContent = "O";
  } else if (computer[index] == "seven") {
    button7.textContent = "O";
  } else if (computer[index] == "eight") {
    button8.textContent = "O";
  } else if (computer[index] == "nine") {
    button9.textContent = "O";
  }
  console.log(computer[index]);
  computer = computer.filter((x) => x !== computer[index]);
  console.log(game.player1);
  console.log(game.player2);

  console.log(computer);
  document.querySelector(".turn").textContent = "Player1 turn";
};

const chosingDiv = function (e) {
  if (
    document.querySelector(".turn").textContent == "DRAW!" ||
    document.querySelector(".turn").textContent == "Player2 Wins" ||
    document.querySelector(".turn").textContent == "Player1 Wins"
  ) {
    alert("Game Over!!");
    return 0;
  }
  if (e.target.textContent == "O") {
    alert("You choose opponent choice!");
    return e.target.textContent == "O";
  } else if (e.target.textContent == "X") {
    alert("You choose Your's choice!");
    return e.target.textContent == "X";
  }
  e.target.textContent = "X";
  let choiceHuman = this.dataset.option;
  game.player1.push(this.dataset.option);
  computer = computer.filter((x) => x !== choiceHuman);
  document.querySelector(".turn").textContent = "Player2 turn";
  console.log(game.player1);
  console.log(game.player2);
  console.log(computer);
  winnerCheck();
  computerChoice();
  winnerCheck();

  // endGame();
};

allButtons.forEach((button) => button.addEventListener("click", chosingDiv));
btn.addEventListener("click", () => {
  document.querySelector(".turn").textContent = "Player1 turn";
  document.querySelector(".turn").style.color = "#2c3930";
  game.player1 = [];
  game.player2 = [];
  computer = [
    "one",
    "two",
    "three",
    "four",
    "five",
    "six",
    "seven",
    "eight",
    "nine",
  ];
  allButtons.forEach((box) => {
    box.textContent = "";
  });
});
