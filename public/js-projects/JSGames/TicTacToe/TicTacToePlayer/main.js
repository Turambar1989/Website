const allButtons = [...document.querySelectorAll(".box")];
let flague = false;
const btn = document.querySelector("button");
const game = {
  player1: [],
  player2: [],
};
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
const chosingDiv = function (e) {
  if (
    document.querySelector(".turn").textContent == "DRAW!" ||
    document.querySelector(".turn").textContent == "Player2 Wins" ||
    document.querySelector(".turn").textContent == "Player1 Wins"
  ) {
    alert("Game Over!!");
    return 0;
  }
  if (flague === false) {
    if (e.target.textContent == "O") {
      alert("You choose opponent choice!");
      return e.target.textContent == "O";
    } else if (e.target.textContent == "X") {
      alert("You choose Your's choice!");
      return e.target.textContent == "X";
    }
    e.target.textContent = "X";
    game.player1.push(this.dataset.option);
    document.querySelector(".turn").textContent = "Player2 turn";
    flague = true;
  } else if (flague === true) {
    if (e.target.textContent == "X") {
      alert("You choose opponent choice!");
      return e.target.textContent == "X";
    } else if (e.target.textContent == "O") {
      alert("You choose Your's choice!");
      return e.target.textContent == "O";
    }
    e.target.textContent = "O";
    game.player2.push(this.dataset.option);
    document.querySelector(".turn").textContent = "Player1 turn";
    flague = false;
  }
  winnerCheck();
  // endGame();
};

allButtons.forEach((button) => button.addEventListener("click", chosingDiv));
btn.addEventListener("click", () => {
  flague = false;
  document.querySelector(".turn").textContent = "Player1 turn";
  document.querySelector(".turn").style.color = "#2c3930";
  game.player1 = [];
  game.player2 = [];
  allButtons.forEach((box) => {
    box.textContent = "";
  });
});
