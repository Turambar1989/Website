class Wallet {
  constructor(money) {
    let _money = money; // ukrywamy money
    //pobieranie zawartości portfela
    this.getWalletvalue = () => _money; // strzałkowa zwraca return
    // sprawdzenie czy ma odpowiednie środki
    this.checkCanPlay = (value) => {
      if (_money >= value) return true;
      return false;
    };
    this.changeWallet = (value, type = "+") => {
      if (typeof value === "number" && !isNaN(value)) {
        if (type === "+") {
          return (_money += value);
        } else if (type === "-") {
          return (_money -= value);
        } else {
          throw new Error("wrong +- error");
        }
      } else {
        throw new Error("number error");
      }
    };
  }
}
// const wallet = new Wallet(200);
// console.log(wallet);
