//remove items
const removeTask = (e) => {
  //   e.target.remove(); e.target li
  //   e.target.parentNode.remove();
  //   e.target.parentNode.style.textDecoration = "line-through";
  //   e.target.remove();
  const index = e.target.dataset.key;
  console.log(document.querySelector(`li[data-key = "${index}"]`));
  document.querySelector(`li[data-key = "${index}"]`).remove();
};
// document
//   .querySelectorAll("li button")
//   .forEach((item) => item.addEventListener("click", removeTask));
document
  .querySelectorAll("button[data-key]")
  .forEach((item) => item.addEventListener("click", removeTask));

// filter i map
const arr = [2, 3, 4, 5, 6, 7, 8, 9, 0, 2345, 234, 2123, 1111, 2123, 34565];
//filter
const evenNumbers = arr.filter((number) => number % 2 == 0);
const oddNumbers = arr.filter((number) => number % 2 !== 0);
const numberBiggerThan100 = arr.filter((number) => number > 100);
console.log(evenNumbers);
console.log(oddNumbers);
console.log(numberBiggerThan100);
//map
const double = arr.map((number) => number * 2);
const people = arr.map((number) => number + " people");
console.log(double);
console.log(people);
//forEach
arr.forEach((number, index) => (arr[index] = number * 2)); //zmienia tablice map lepsze
console.log(arr);

//Search
const input = document.querySelector("input");
const ul = document.querySelector("ul");
const liElements = document.querySelectorAll("li");

const searchTask = (e) => {
  const searchText = e.target.value.toLowerCase();
  const tasks = [...liElements]; // let
  // tasks = tasks.filter((task) =>
  //   task.textContent.toLowerCase().includes(searchText)
  // );
  const result = tasks.filter((task) =>
    task.textContent.toLowerCase().includes(searchText)
  );
  console.log(result);
  ul.textContent = "";
  result.forEach((li) => ul.appendChild(li));
};

input.addEventListener("input", searchTask);
