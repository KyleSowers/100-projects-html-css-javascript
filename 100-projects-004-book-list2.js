"use strict"

const bookForm = document.getElementById("book-form");
const titleInput = document.getElementById("title");
const authorInput = document.getElementById("author");
const bookList = document.getElementById("book-list");

bookForm.addEventListener("submit", function (event) {
    event.preventDefault();

    const title = titleInput.value;
    const author = authorInput.value;

    addBookToList(title, author);
    titleInput.value = ";
    authorInput.value = ";
    titleInput.focus();
});

function addBookToList(title, author) {
    const bookItem =document.createElement("li");
    bookItem.className = "book-item";


}