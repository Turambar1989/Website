// let counter = 0;    // tak można   *

function saveNote() {
  const textNote = document.querySelector(".note-area").value;
  if (textNote == "") {
    alert("write sth!");
  } else {
    //   localStorage.setItem(counter++, noteText);   *
    const keyNote = Date.now().toString(); // tostring bo localstorage przyjmiestringa

    localStorage.setItem(keyNote, textNote);
    createNote(keyNote, textNote);
  }
  document.querySelector(".note-area").value = "";
}

function deleteNote(keyNote) {
  const deleteLi = document.querySelector(`#id${keyNote}`);
  deleteLi.remove();
  localStorage.removeItem(keyNote);
}

function createNote(keyNote, textNote) {
  const sectionNotes = document.querySelector(".notes");
  const li = document.createElement("li");
  li.id = "id" + keyNote; // id string przed bo id nie może być od number
  li.textContent = textNote + " ";
  const button = document.createElement("button");
  button.classList.add("deleteBtn"); // button.className
  button.textContent = "delete";
  button.onclick = () => {
    // addeventlistener tez
    deleteNote(keyNote);
  };
  const hr = document.createElement("hr");
  li.appendChild(button);
  li.appendChild(hr);
  sectionNotes.appendChild(li);
}

function init() {
  Object.keys(localStorage).forEach((keyNote) => {
    const textNote = localStorage.getItem(keyNote);
    createNote(keyNote, textNote);
  });
}
const saveBtn = document.querySelector(".save-btn");
saveBtn.addEventListener("click", saveNote);

init();
