'use strict'

$(document).ready(function () {
    $('#book-form').on("submit", function (event) {
        event.preventDefault();

        var title = $('#title').val();
        var author = $('#author').val();
        var pages = $('#pages').val();
        var status = $('#status').val();

        var bookDiv = $('<div class="card mb-4 p-3">').html(`
        <h5 class="card-text">Pages: ${title}</h5>
        <h6 class="card-subtitle mb-2 text-muted">${author}</h6>
        <p class="card-text">Pages: ${pages}</p>
        <p class="card-text">Status: ${status}</p>
        <button class="btn btn-danger delete">Delete</button>
        `);

        bookDiv.find(".delete").on("click", function () {
            $(this).parent().remove();
        });

        $('#book-list').append(bookDiv);

        //Clear the form
        $('#book-form').trigger("reset");
    });
});