//pierwszy
const spnText = document.querySelector(".text1");
const txt1 =
  "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus commodi perspiciatis, ut cupiditate molestiae numquam provident a corrupti, animi delectus totam. Minus adipisci delectus fuga ab inventore assumenda obcaecati natus?";

let indexText = 0;
const time = 40;
const addLetter = () => {
  spnText.innerHTML += txt1[indexText];
  indexText++;
  if (indexText === txt1.length) {
    clearInterval(indexInterval);
  }
};

const indexInterval = setInterval(addLetter, time); //zwraca indeks
const spnCursor = document.querySelector(".cursor");
const cursorAnimation = () => {
  spnCursor.classList.toggle("active");
};
setInterval(cursorAnimation, 400);
//drugi
const spnText2 = document.querySelector(".text2");
const txt2 = [
  "Some text 1",
  "Some text 2",
  "Some text 3",
  "Some text 4",
  "Some text 5",
];
//sposób
let firstElement = 0;
let firstLetter = -5;
const addLetter2 = () => {
  if (firstLetter >= 0) {
    spnText2.textContent += txt2[firstElement][firstLetter];
  }
  firstLetter++;
  if (firstLetter == txt2[firstElement].length) {
    firstElement++;
    if (firstElement == txt2.length) return;
    return setTimeout(() => {
      firstLetter = 0;
      spnText2.textContent = "";
      addLetter2();
    }, 2000);
  }

  setTimeout(addLetter2, 200);
};
addLetter2();

const spnCursor2 = document.querySelector(".cursor2");
const cursorAnimation2 = () => {
  spnCursor2.classList.toggle("active");
};
setInterval(cursorAnimation2, 400);
