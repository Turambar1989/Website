const btn = document.querySelector(".randomItem");
const namesArray = ["Gary", "Paul", "Jessica", "Riley", "Sandra", "Martina"];
const sentenceArray = ["My name is ", "Your name is ", "His/Her name is "];
const divContainer = document.querySelector(".arraysContainer");

const randomItem = () => {
  const index = Math.floor(Math.random() * namesArray.length);
  const index2 = Math.floor(Math.random() * sentenceArray.length);
  divContainer.textContent = `${sentenceArray[index2]} ${namesArray[index]}`;
};

btn.addEventListener("click", randomItem);

const divCodesContainer = document.querySelector(".codesContainer");
const generateBtn = document.querySelector(".generateButton");
const codesNumber = 100;
const charsNumber = 10;
const chars = `ABCDEFGHIJKLMNOPRSTUWYZ1234567890`;

const generateCodes = () => {
  for (let i = 0; i < codesNumber; i++) {
    let code = "";
    for (let i = 0; i < charsNumber; i++) {
      const charsIndex = Math.floor(Math.random() * chars.length);
      code += chars[charsIndex];
    }
    const div = document.createElement("div");
    div.textContent = `${code}`;
    divCodesContainer.appendChild(div);
  }
};

generateBtn.addEventListener("click", generateCodes);
