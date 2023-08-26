"use strict"

document.getElementById('book-form').addEventListener("submit", function(event) {
    event.preventDefault();

    let title = document.getElementById('title').value;
    let author = document.getElementById("author").value;

    let bookItem = document.createElement("li");
    bookItem.textContent = title + " by " + author;

    document.getElementById('book-list').appendChild(bookItem);
});