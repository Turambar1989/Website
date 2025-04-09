class DrawingApp {
  constructor() {
    this.canvas = document.getElementById("canvas");
    this.painting = false; // flaga
    this.#init(); // wywołanie prywatnej metody
    this.#initEvents();
  }
  #init() {
    this.canvas.width = window.innerWidth;
    this.canvas.height = window.innerHeight;
    this.ctx = this.canvas.getContext("2d");
    this.ctx.strokeStyle = "white";
    this.ctx.lineWidth = 5;
    this.ctx.lineCap = "round";
  }
  #initEvents() {
    //metody na myszkę
    this.canvas.addEventListener("mousedown", (e) => {
      this.#startPosision(e);
    }); // funckja strzałkowa bo this można .bind
    this.canvas.addEventListener("mouseup", () => {
      this.#endPosision();
    });
    this.canvas.addEventListener("mousemove", this.#draw.bind(this));
    //metody na mobile
    this.canvas.addEventListener("touchstart", (e) => {
      this.#startPosision(e);
    }); // funckja strzałkowa bo this można .bind
    this.canvas.addEventListener("touchend", () => {
      this.#endPosision();
    });
    this.canvas.addEventListener("touchmove", this.#draw.bind(this));
  }
  #startPosision(e) {
    // console.log("start");
    this.painting = true;
    this.#draw(e);
  }
  #endPosision() {
    // console.log("end");
    this.painting = false;
    this.ctx.beginPath();
  }
  #draw(e) {
    if (!this.painting) return;

    let x = e.clientX || e.touches[0].clientX;
    let y = e.clientY || e.touches[0].clientY;

    this.ctx.lineTo(x, y); // linia
    this.ctx.stroke(); // wypełnia
    this.ctx.moveTo(x, y);
  }

  changeColor(color) {
    this.ctx.strokeStyle = color;
    // console.log(color);
  }
}

const app = new DrawingApp();
console.log(app);
