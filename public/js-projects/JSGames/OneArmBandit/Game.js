class Game {
  constructor() {
    this.stats = new Statistics(); //instancje klas
    this.wallet = new Wallet(300);
    document
      .getElementById("start")
      .addEventListener("click", this.startGame.bind(this)); // bind bo tracimy wiazanie this schodzi na button
    this.spanWallet = document.querySelector("span.wallet");
    this.boards = document.querySelectorAll("div.color");
    this.inputBid = document.getElementById("bid");
    this.spanResult = document.querySelector(".score span.result");
    this.spanGames = document.querySelector(".score span.number");
    this.spanLosses = document.querySelector(".score span.loss");
    this.spanWins = document.querySelector(".score span.win");

    this.render();
  }

  render(
    colors = ["#dcd7c9", "#dcd7c9", "#dcd7c9"],
    money = this.wallet.getWalletvalue(),
    result = "",
    stats = [0, 0, 0],
    wonMoney = 0,
    bid = 0
  ) {
    this.boards.forEach(
      (board, index) => (board.style.backgroundColor = colors[index])
    );
    this.spanWallet.textContent = money;
    if (result) {
      result = `You won ${bid}*3 = ${wonMoney}`;
    } else if (!result && result !== "") {
      result = `You lose ${bid}`;
    }

    this.spanResult.textContent = result;
    this.spanGames.textContent = stats[0];
    this.spanLosses.textContent = stats[1];
    this.spanWins.textContent = stats[2];
    this.inputBid.value = "";
  }

  startGame() {
    if (this.inputBid.value < 1) return alert("Your bet is too low");
    // console.log(this);
    const bid = Math.floor(this.inputBid.value);
    if (!this.wallet.checkCanPlay(bid)) {
      return alert("Your cash is too low or You write different signs");
    }
    this.wallet.changeWallet(bid, "-");
    this.draw = new Draw();
    const colors = this.draw.getDrawResult();
    const win = Result.checkWinner(colors); // odwołanie do klasy bo metoda statyczna
    const wonMoney = Result.moneyWinInGame(win, bid);
    this.wallet.changeWallet(wonMoney, "+");
    this.stats.addGameToStatistics(win, bid);

    this.render(
      colors,
      this.wallet.getWalletvalue(),
      win,
      this.stats.showGameStatistics(),
      wonMoney,
      bid
    );
  }
}
