'use strict'

$('#book-form').on('submit', function (e) {
    e.preventDefault();

//     get the search term
    let searchTerm = $('#search').val();

//     Call the Google books API
    getBooks(searchTerm);
});

function getBooks(searchTerm) {
    let url = `https://www.googleapis.com/books/v1/volumes?q=${searchTerm}`;
    $.getJSON(url, function (data) {
        let output = '<h2 class="text-center">Book Results</h2>';
        data.items.forEach(book => {
            let title = book.volumeInfo.title;
            let authors = book.volumeInfo.authors;
            let description = book.volumeInfo.description;
            let imgLink = book.volumeInfo.imageLinks ? book.volumeInfo.imageLinks.thumbnail : "Image Not Available";

            output += `
            <div class="media my-4">
                <img src="${imgLink}" class="mr-3" alt="book-image">
                <div class="media-body">
                    <h5 class="mt-0">${title}</h5>
                    <h6>${authors}</h6>
                    <p>${description}</p>
                </div>
            </div><hr>`;
        });
        $('#result').html(output);
    }).fail(function () {
        console.log("An error has occurred.");
    });
}



