'use strict'

let notes = JSON.parse(localStorage.getItem('notes')) || [];

$('#note-form').on('submit', function (e) {
    e.preventDefault();

    notes.push({title: $('#note-title').val(), text: $('#note-text').val()});
    $('#note-title').val('');
    $('#note-text').val('');

    localStorage.setItem('notes', JSON.stringify(notes));
    displayNotes();
});

function displayNotes() {
    const notesHTML = notes.map((note, i) => `
    <div class="note card p-3 mb-3">
    <h2 class="text-primary">${note.title}</h2>
    <p>${note.text}</p>
    <button class="btn btn-danger" onclick="deleteNote(${i})">Delete</button>
    </div>
    `).join('');

    $('#notes').html(notesHTML);
}

function deleteNote(i) {
    notes.splice(i, 1);
    localStorage.setItem('notes', JSON.stringify(notes));
    displayNotes();
}

displayNotes();