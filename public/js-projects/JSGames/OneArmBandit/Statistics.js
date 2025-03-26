class Statistics {
  constructor() {
    this.gameResults = [];
  }
  // w prototypie
  addGameToStatistics(win, bid) {
    let gameResult = {
      win: win,
      bid: bid,
    };
    this.gameResults.push(gameResult);
  }
  showGameStatistics() {
    let games = this.gameResults.length;
    let wins = this.gameResults.filter((result) => result.win).length; //długość tablicy z true
    let losses = this.gameResults.filter((result) => !result.win).length; // długość tablicy z false
    // filter ma callback wrzuca do nowej tablicy
    return [games, losses, wins];
  }
}

// const stats = new Statistics();
// console.log(stats);
