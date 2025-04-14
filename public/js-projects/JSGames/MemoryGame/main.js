class MixOrMatch {
  constructor(totalTime, cards) {
    this.cardsArray = cards;
    this.totalTime = totalTime;
    this.timeRemaining = totalTime;
    this.timer = document.querySelector("#time");
    this.ticker = document.querySelector("#clicks");
  }
  startGame() {
    this.cardToCheck = null;
    this.totalClicks = 0;
    this.timeRemaining = this.totalTime;
    this.matchedCards = [];
    this.busy = true;
    this.shuffleCards();
    setTimeout(() => {
      this.countDown = this.startCountDown();
      this.busy = false;
    }, 2000);
    this.showCards();
    setTimeout(() => this.hideCards(), 2000);

    this.timer.innerText = this.timeRemaining;
    this.ticker.innerText = this.totalClicks;
  }
  showCards() {
    this.cardsArray.forEach((card) => {
      card.classList.add("visible");
    });
  }
  hideCards() {
    this.cardsArray.forEach((card) => {
      card.classList.remove("visible");
    });
  }
  flipCard(card) {
    if (this.canFlipCard(card)) {
      this.totalClicks++;
      this.ticker.innerText = this.totalClicks;
      card.classList.add("visible");
      if (this.cardToCheck) {
        this.checkforCardMatch(card);
      } else this.cardToCheck = card;
    }
  }
  checkforCardMatch(card) {
    if (this.getCardType(card) === this.getCardType(this.cardToCheck)) {
      this.cardMatch(card, this.cardToCheck);
    } else this.cardMissMatch(card, this.cardToCheck);
    this.cardToCheck = null;
  }
  cardMatch(card1, card2) {
    this.matchedCards.push(card1);
    this.matchedCards.push(card2);
    if (this.matchedCards.length === this.cardsArray.length) {
      this.victory();
    }
  }
  cardMissMatch(card1, card2) {
    this.busy = true;
    setTimeout(() => {
      card1.classList.remove("visible");
      card2.classList.remove("visible");
      this.busy = false;
    }, 1000);
  }
  getCardType(card) {
    return card.getElementsByClassName("card-value")[0].src;
  }
  startCountDown() {
    return setInterval(() => {
      this.timeRemaining--;
      this.timer.innerText = this.timeRemaining;
      if (this.timeRemaining === 0) {
        this.gameOver();
      }
    }, 1000);
  }
  gameOver() {
    clearInterval(this.countDown);
    this.hideCards();
    document.querySelector(".gameOverText").classList.add("visible");
  }
  victory() {
    clearInterval(this.countDown);
    this.hideCards();
    document.querySelector(".victoryText").classList.add("visible");
  }
  canFlipCard(card) {
    return (
      !this.busy &&
      !this.matchedCards.includes(card) &&
      card !== this.cardToCheck
    );
  }
  shuffleCards() {
    // algorytm na zmiane
    for (let i = this.cardsArray.length - 1; i > 0; i--) {
      let randomIndex = Math.floor(Math.random() * (i + 1));
      this.cardsArray[randomIndex].style.order = i;
      this.cardsArray[i].style.order = randomIndex;
    }
  }
}
if (document.readyState === "loading") {
  document.addEventListener("DOMContentLoaded", ready());
} else ready();
function ready() {
  let overlays = Array.from(document.getElementsByClassName("overlayText"));
  let cards = Array.from(document.getElementsByClassName("card"));
  let game = new MixOrMatch(100, cards);
  overlays.forEach((overlay) =>
    overlay.addEventListener("click", () => {
      overlay.classList.remove("visible");
      game.startGame();
    })
  );
  cards.forEach((card) => {
    card.addEventListener("click", () => {
      game.flipCard(card);
    });
  });
}
