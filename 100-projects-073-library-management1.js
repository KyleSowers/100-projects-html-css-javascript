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

function displayBooks() {
    const bookList = document.getElementById('booklist');
    bookList.innerHTML = '';
    for (let i = 0; i < library.length; i++) {
        const book = document.getElementById('bookList');
        bookList.innerHTML = '';
        for (let i = 0; i < library.length; i++) {
            const book = document.getElementById('bookList');
            book.innerHTML = `<h2>${library[i].title}</h2> <h3>${library[i].author}</h3> <p>${library[i].status}</p> <button onclick="loanBook(${i})">Loan Book</button> <button onclick="returnBook(${i})">Return Book</button> <hr>`;
                bookList.append(book);
        }
    }


}