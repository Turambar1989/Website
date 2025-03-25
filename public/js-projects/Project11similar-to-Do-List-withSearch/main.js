// To Do List
const form = document.querySelector("form");
const ul = document.querySelector("ul");
const taskNumber = document.querySelector("h5 span");
const listItems = document.getElementsByClassName("task"); // getelement dla klas zmienia się w html
// const allListItems = document.querySelectorAll("li"); //query bedzie stałe
const input = document.querySelector("input.addInput");
let inputSearch = document.querySelector("input.searchInput");

let toDoList = [];

const lineTask = (e) => {
  e.target.parentNode.classList.toggle("checked");
};

const removeArrIndex = () => {
  ul.textContent = ""; // tablica jest czyszczona po to żeby index był taki sam (index=key)
  toDoList.forEach((toDoElement, key) => {
    toDoElement.dataset.key = key; // przypisanie do datakey indexu
    ul.appendChild(toDoElement);
  }); // i od nowa dodanie do ul
}; // po to żeby index zmieniał się razem z data.key

const removeTask = (e) => {
  e.target.parentNode.remove(); // musi być bo zostanie task number
  const index = e.target.parentNode.dataset.key;
  toDoList.splice(index, 1);
  taskNumber.textContent = listItems.length;
  removeArrIndex();
  // ul.textContent = ""; // tablica jest czyszczona po to żeby index był taki sam (index=key)
  // toDoList.forEach((toDoElement, key) => {
  //   toDoElement.dataset.key = key; // przypisanie do datakey indexu
  //   ul.appendChild(toDoElement);
  // }); // i od nowa dodanie do ul
};

const addTask = (e) => {
  e.preventDefault();
  const titleTask = input.value;
  if (titleTask === "") return;
  const task = document.createElement("li");
  task.className = "list-item";
  task.className = "task";
  task.innerHTML = titleTask + " ";
  toDoList.push(task);
  removeArrIndex();
  // ul.textContent = ""; // tablica jest czyszczona po to żeby index był taki sam (index=key)
  // toDoList.forEach((toDoElement, key) => {
  //   toDoElement.dataset.key = key; // przypisanie do datakey indexu
  //   ul.appendChild(toDoElement);
  // }); // i od nowa dodanie do ul
  ul.appendChild(task);
  const createBtn = document.createElement("button");
  createBtn.textContent = "-";
  createBtn.classList.add("lineBtn");
  task.appendChild(createBtn);
  const createBtn2 = document.createElement("button");
  createBtn2.classList.add("removeBtn");
  createBtn2.textContent = "x";
  task.appendChild(createBtn2);
  input.value = ""; // opcjonalnie czyści input
  // const liItems = document.querySelectorAll("li").length;
  // taskNumber.textContent = liItems;
  taskNumber.textContent = listItems.length;
  task.querySelector("button.removeBtn").addEventListener("click", removeTask);
  task.querySelector("button.lineBtn").addEventListener("click", lineTask);
};
// Search
const searchTask = (e) => {
  const searchText = e.target.value.toLowerCase();
  const tasksText = toDoList; // let
  // tasks = tasks.filter((task) =>
  //   task.textContent.toLowerCase().includes(searchText)
  // );
  const result = tasksText.filter((task) =>
    task.textContent.toLowerCase().includes(searchText)
  );

  ul.textContent = "";
  result.forEach((li) => ul.appendChild(li));
};

form.addEventListener("submit", addTask);
inputSearch.addEventListener("input", searchTask);
searchTask();
