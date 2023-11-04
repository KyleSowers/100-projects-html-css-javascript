"use strict"

document.getElementById('book-form').addEventListener('submit', function (event) {
    event.preventDefault();

    const title = document.getElementById("title").value;
    const author = document.getElementById("author").value;
    const pages = document.getElementById("pages").value;
    const status = document.getElementById("status").value;

    const bookList = document.getElementById("book-list");
    const bookDiv = document.createElement("div");
    bookDiv.className = "book";

    bookDiv.innerHTML = `
    <h3>${title}</h3>
    <p>Author: ${author}</p>
    <p>Pages: ${pages}</p>
    <p>Status: ${status}</p>
    <button class='delete'>Delete</button>
    `;

    bookList.appendChild(bookDiv);
//     Clear the form
    document.getElementById("title").value = '';
    document.getElementById("author").value = '';
    document.getElementById("pages").value = '';
    document.getElementById("status").value = '';
});

//Delete book
    document.getElementById("book-list").addEventListener("click", function (event) {
        if(event.target.className === "delete") {
            event.target.parentElement.remove();
        }
    });