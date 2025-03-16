const gameSummary = {
  numbers: 0,
  wins: 0,
  losses: 0,
  draws: 0,
};
const game = {
  playerHand: "",
  computerHand: "",
};

const hands = [...document.querySelectorAll("img")];

// 1 funckja
function handSelection() {
  game.playerHand = this.dataset.option;
  //   console.log(game.playerHand);
  hands.forEach((hand) => {
    hand.style.boxShadow = "";
    hand.style.backgroundColor = "";
  });
  this.style.boxShadow = "0 0 0 4px #2c3930";
  this.style.backgroundColor = "#a27b5c";
}
// const handSelection = (e) => {
//   console.log(e.target);
// };
//dla każdego img klik (hands tablica)
hands.forEach((hand) => {
  hand.addEventListener("click", handSelection);
});
// zwraca losowa komputer
const playButton = document.querySelector(".playButton");
function computerChoice() {
  const aiHand = hands[Math.floor(Math.random() * hands.length)].dataset.option;
  return aiHand;
}
// sprawdzanie wyniku
function checkResult(player, computer) {
  if (player === computer) {
    return "draw";
  } else if (
    (player === "paper" && computer === "rock") ||
    (player === "rock" && computer === "scissors") ||
    (player === "scissors" && computer === "paper")
  ) {
    return "win";
  } else return "lose";
}

function publishResult(player, computer, gameResult) {
  document.querySelector('[data-summary="yourChoice"]').textContent = player;
  document.querySelector('[data-summary="computerChoice"]').textContent =
    computer;
  document.querySelector(".gameNumber").textContent = ++gameSummary.numbers;
  if (gameResult === "draw") {
    document.querySelector('[data-summary="winner"]').textContent = "DRAW";
    document.querySelector('[data-summary="winner"]').style.color = "grey";
    document.querySelector(".gameDraw").textContent = ++gameSummary.draws;
  } else if (gameResult === "win") {
    document.querySelector('[data-summary="winner"]').textContent = "WIN!!!";
    document.querySelector('[data-summary="winner"]').style.color = "green";
    document.querySelector(".gameWin").textContent = ++gameSummary.wins;
  } else {
    document.querySelector('[data-summary="winner"]').textContent = "LOSS!!!";
    document.querySelector('[data-summary="winner"]').style.color = "red";
    document.querySelector(".gameLose").textContent = ++gameSummary.losses;
  }
}
function endGame() {
  document.querySelector(`[data-option=${game.playerHand}]`).style.boxShadow =
    "";
  document.querySelector(
    `[data-option=${game.playerHand}]`
  ).style.backgroundColor = "";
  game.playerHand = "";
  game.computerHand = "";
}
// funkcja start
function startGame() {
  if (game.playerHand === "") {
    return alert("Select One!");
  }
  game.computerHand = computerChoice();
  const gameResult = checkResult(game.playerHand, game.computerHand);

  publishResult(game.playerHand, game.computerHand, gameResult);
  endGame();
}
playButton.addEventListener("click", startGame);
