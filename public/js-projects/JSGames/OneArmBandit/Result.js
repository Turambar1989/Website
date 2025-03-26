class Result {
  static moneyWinInGame(result, bid) {
    if (result) {
      // true
      return bid * 3;
    } else return 0;
  } // metoda statyczna
  static checkWinner(draw) {
    if (draw[0] === draw[1] && draw[1] === draw[2]) {
      return true;
    } else return false;
  } // odwołanie do draw
}

// const result = new Result();
// console.log(result);
