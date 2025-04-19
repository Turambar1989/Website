function createStars() {
  const mainContainer = document.querySelector(".mainContainer");
  for (let i = 0; i < 1000; i++) {
    const star = document.createElement("div");
    star.className = "star";
    star.style.width = ".1px";
    star.style.height = ".1px";
    star.style.top = Math.random() * 100 + "%";
    star.style.left = Math.random() * 100 + "%";
    mainContainer.appendChild(star);
  }
}
createStars();
