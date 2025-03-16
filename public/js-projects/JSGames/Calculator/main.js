const currentNumber = document.querySelector(".currentNumber");
const previousNumber = document.querySelector(".previousNumber p");
const mathSign = document.querySelector(".mathSign");
const numbersButtons = document.querySelectorAll(".number");
const operatorsButtons = document.querySelectorAll(".operator");
const equalsButton = document.querySelector(".equals");
const historyBtn = document.querySelector(".history-btn");
const clearButton = document.querySelector(".clear");

let result = "";

//functions
function displayNumbers() {
  if (this.textContent === "." && currentNumber.innerHTML.includes(".")) return;
  if (this.textContent === "." && currentNumber.innerHTML === "")
    return (currentNumber.innerHTML = "0.");
  currentNumber.innerHTML += this.textContent;
}
function operate() {
  if (currentNumber.innerHTML === "" && this.textContent === "-") {
    currentNumber.innerHTML += this.textContent;
    return;
  } else if (currentNumber.innerHTML === "") return;
  if (mathSign !== "") {
    showResult();
  }
  previousNumber.innerHTML = currentNumber.innerHTML;
  mathSign.innerHTML = this.textContent;
  currentNumber.innerHTML = "";
}
function showResult() {
  if (previousNumber.innerHTML === "" || currentNumber.innerHTML === "") return;
  let x = Number(currentNumber.innerHTML);
  let y = Number(previousNumber.innerHTML);
  let operator = mathSign.innerHTML;

  switch (operator) {
    case "+":
      result = x + y;
      break;
    case "-":
      result = y - x;
      break;
    case "x":
      result = x * y;
      break;
    case ":":
      result = y / x;
      break;
    case "^y":
      result = y ** x;
      break;
  }
  addToHistory();
  historyBtn.classList.add("active");
  currentNumber.innerHTML = result;
  previousNumber.innerHTML = "";
  mathSign.innerHTML = "";
}
function addToHistory() {
  const li = document.createElement("li");
  li.innerHTML = `${previousNumber.innerHTML} ${mathSign.innerHTML} ${currentNumber.innerHTML} = ${result}`;
  document.querySelector("ul").appendChild(li);
}
function clearScreen() {
  result = "";
  previousNumber.innerHTML = "";
  currentNumber.innerHTML = "";
  mathSign.innerHTML = "";
}
function clearHistory() {
  document.querySelector("ul").textContent = "";
  if (document.querySelector("ul").textContent === "") {
    historyBtn.classList.remove("active");
  }
}

// listeners
numbersButtons.forEach((button) => {
  button.addEventListener("click", displayNumbers);
});
operatorsButtons.forEach((button) => {
  button.addEventListener("click", operate);
});
equalsButton.addEventListener("click", showResult);
clearButton.addEventListener("click", clearScreen);
historyBtn.addEventListener("click", clearHistory);
