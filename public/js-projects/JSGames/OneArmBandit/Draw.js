class Draw {
  constructor() {
    this.options = ["#a27b5c", "#2c3930", "#dcd7c9"];
    let _result = this.drawResult(); // ukrywamy result zmienna let i konwencja _
    this.getDrawResult = () => _result;
  }
  drawResult() {
    let colors = [];
    //uzupełanianie

    for (let i = 0; i < this.options.length; i++) {
      const index = Math.floor(Math.random() * this.options.length);
      const color = this.options[index];
      colors.push(color);
    }
    //zwracanie tablicy
    return colors;
  }
}

// const draw = new Draw();
// console.log(draw);
