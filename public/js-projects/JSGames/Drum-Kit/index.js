for (var x = 0; x < document.querySelectorAll(".drum").length; x++) {
  document.querySelectorAll("button")[x].addEventListener("click", handleClick);
}
function handleClick() {
  var buttonInnerHtml = this.innerHTML;
  makeSound(buttonInnerHtml);
  activeButtons(buttonInnerHtml);
}
document.addEventListener("keypress", function (e) {
  makeSound(e.key);
  activeButtons(e.key);
});
function makeSound(key) {
  switch (key) {
    case "w":
      var tom1Audio = new Audio("sounds/tom-1.mp3");
      tom1Audio.play();
      break;
    case "s":
      var tom2Audio = new Audio("sounds/tom-2.mp3");
      tom2Audio.play();
      break;
    case "a":
      var tom3Audio = new Audio("sounds/tom-3.mp3");
      tom3Audio.play();
      break;
    case "d":
      var tom4Audio = new Audio("sounds/tom-4.mp3");
      tom4Audio.play();
      break;
    case "j":
      var crashAudio = new Audio("sounds/crash.mp3");
      crashAudio.play();
      break;
    case "k":
      var bassAudio = new Audio("sounds/kick-bass.mp3");
      bassAudio.play();
      break;
    case "l":
      var snareAudio = new Audio("sounds/snare.mp3");
      snareAudio.play();
      break;
    default:
  }
}
function activeButtons(currentKey) {
  var activeKey = document.querySelector("." + currentKey);
  activeKey.classList.add("pressed");
  setTimeout(function () {
    activeKey.classList.remove("pressed");
  }, 100);
}
