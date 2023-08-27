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
    titleInput.value = '';
    authorInput.value = '';
    titleInput.focus();
});

function addBookToList(title, author) {
    const bookItem =document.createElement("li");
    bookItem.className = "book-item";

    const bookText = document.createTextNode(`${title} by ${author}`);
    bookItem.appendChild(bookText);

    const deleteBtn = document.createElement("button");
    deleteBtn.textContent = "Delete";
    deleteBtn.className = "delete-btn";
    deleteBtn.addEventListener("click", function () {
        bookList.removeChild(bookItem);
        saveListToLocalStorage();
    });

    const completeBtn = document.createElement("button");
    completeBtn.textContent = "Completed";
    completeBtn.className = "complete-btn";
    completeBtn.addEventListener('click', function () {
        bookItem.classList.add("completed");
    });

    bookItem.appendChild(deleteBtn);
    bookItem.appendChild(completeBtn);

    bookList.insertBefore(bookItem, bookList.firstChild);
    saveListToLocalStorage();
}

function loadListFromLocalStorage() {
    const books = JSON.parse(localStorage.getItem("books")) || [];

    for (let book of books) {
        addBookToList(book.title, book.author);
    }
}

function saveListtoLocalStorage() {
    const books = [];
    for (let i = 0; i < bookList.children.length; i++) {
        const bookItem = booklist.children[i];
        const titleAuthor = bookitem.firstChild.textContent.split(" by ");
        const book = { title: titleAuthor[0], author: titleAuthor[1] };
        // books.push(book)  // ascending order
        books.unshift(book);  //decending order
    }
    localStorage.setItem("books", JSON.stringify(books));
}

loadListFromLocalStorage();