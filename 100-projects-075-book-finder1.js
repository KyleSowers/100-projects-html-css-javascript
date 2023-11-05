'use strict'

document.getElementById('book-form').addEventListener('submit', fetchBooks);

function fetchBooks(e) {
    e.preventDefault();

//     Get the search term
    let searchTerm = document.getElementById('search').value;

//     Call the Google Books API
    getBooks(searchTerm);
}

function getBooks(searchTerm) {
    let url = `https://www.googleapis.com/books/v1/volumes?q=${searchTerm}`;

    fetch(url)
        .then(response => response.json())
        .then(data => {
            let output = '<h2>Book Results</h2>';
            data.items.forEach(book => {
                let title = book.volumeInfo.title;
                let authors = book.volumeInfo.authors;
                let description = book.volumeInfo.description;
                let imgLink = book.volumeInfo.imageLinks ? book.volumeInfo.imageLinks.thumbnail : "Image Not Available";

                output += `
                <div>
                    <img src="${imgLink}" alt="book-image">
                    <h3>${title}</h3>
                    <h4>${authors}</h4>
                    <p>${description}</p>
                </div><br>`;
            });
            document.getElementById('result').innerHTML = output;
        })
        .catch(err => console.log(err));
}

fetchBooks();