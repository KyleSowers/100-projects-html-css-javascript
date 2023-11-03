'use strict'

let library = [];

document.getElementById("addBookForm").addEventListener("submit", function (event) {
    event.preventDefault();
    const title = document.getElementById('title').value;
    const author = document.getElementById('author').value;
    addBookToLibrary(title, author);
    displayBooks();
});

function addBookToLibrary(title, author) {
    library.push({title: title, author: author, status: 'Available'});
}

