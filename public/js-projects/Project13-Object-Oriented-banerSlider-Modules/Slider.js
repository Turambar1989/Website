import Slide from "./Slide.js";

export default class Slider {
  constructor(
    slideList,
    imageSelector,
    titleSelector,
    dotsSelector,
    time = 3000,
    active = 0
  ) {
    this.image = document.querySelector(imageSelector);
    this.title = document.querySelector(titleSelector);
    this.dots = [...document.querySelectorAll(dotsSelector)];
    this.time = time;
    this.active = active;
    this.slides = [];
    this.indexInterval = null;

    for (const slide of slideList) {
      this.addSlide(new Slide(slide.imgSrc, slide.imgText));
    }

    window.addEventListener("keydown", (e) => this.changeKey(e));
  }

  addSlide(slide) {
    this.slides.push(slide);
  }
  start() {
    this.indexInterval = setInterval(() => this.changeSlide(), this.time);
  }
  changeDot() {
    const activeDot = this.dots.findIndex((dot) =>
      dot.classList.contains("active")
    );
    this.dots[activeDot].classList.remove("active");
    this.dots[this.active].classList.add("active");
  }
  changeSlide() {
    console.log(this);
    this.active++;
    if (this.active === this.slides.length) {
      this.active = 0;
    }
    this.image.src = this.slides[this.active].image;
    this.title.textContent = this.slides[this.active].text;
    this.changeDot();
  }
  changeKey(e) {
    if (e.key == "ArrowLeft" || e.key == "ArrowRight") {
      clearInterval(this.indexInterval);
      e.key == "ArrowLeft" ? this.active-- : this.active++;
      if (this.active === this.slides.length) {
        this.active = 0;
      } else if (this.active < 0) {
        this.active = this.slides.length - 1;
      }
      this.image.src = this.slides[this.active].image;
      this.title.textContent = this.slides[this.active].text;
      this.changeDot();
      //   this.indexInterval = setInterval(this.changeSlide, this.time);
      this.start();
    }
  }
}
