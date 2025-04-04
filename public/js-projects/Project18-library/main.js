class Book {
  #title; // hermetyzacja metody prywatne
  #author;
  #type;
  constructor(title, author, type) {
    this.#title = title;
    this.#author = author;
    this.#type = type;
  }
  showDetails() {
    return `Title: ${this.#title}. Author: ${this.#author}. Type: ${
      this.#type
    }.`;
  }
}
class Library {
  #bookCollection;
  constructor() {
    this.#bookCollection = new Map();
    this.init(); // musimy odpalić init w constructorze
  }
  init() {
    // document
    //   .getElementById("addBook")
    //   .addEventListener("click", this.addBook.bind(this));
    document
      .getElementById("addBook")
      .addEventListener("click", () => this.#addBook()); // problem z this albo strzałkowa albo bind

    document
      .getElementById("searchBook")
      .addEventListener("click", () => this.searchBook());
  }
  #addBook() {
    const title = document.getElementById("title").value;
    const author = document.getElementById("author").value;
    const type = document.getElementById("type").value;

    const book = new Book(title, author, type);
    this.#bookCollection.set(title, book);
    alert("You have added book to library!!");
    console.log(this.#bookCollection);
  }
  searchBook() {
    const searchTitle = document.getElementById("searchTitle").value;
    const searchedBook = this.#bookCollection.get(searchTitle); // zwróci albo undefined
    const searchResult = document.getElementById("searchResult");
    if (searchedBook) {
      searchResult.textContent = searchedBook.showDetails();
    } else {
      searchResult.textContent = "We don't have that book.";
    }
  }
}

const library = new Library();
console.log(library);
