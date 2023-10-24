'use strict'

//Initialize notes from localStorage if available
let notes = JSON.parse(localStorage.getItem('notes')) || [];

//Select DOM elements
const noteForm = document.getElementById('note-form');
const noteTitle = document.getElementById('note-title');
const noteText = document.getElementById('note-text');
const noteContainer = document.getElementById('notes');

//Form submission event listener
noteForm.addEventListener('submit', function () {
    e.preventDefault();

    notes.push({title: noteTitle.value, text: noteText.value});
    noteTitle.value = '';
    noteText.value = '';

    localStorage.setItem('notes', JSON.stringify(notes));
    displayNotes();
});

//Function to display notes
function displayNotes() {
    const notesHTML = notes.map((note, i) => `
    <div class="note">
        <h2>${note.title}</h2>
        <p>${note.text}</p>
        <button onclick="deleteNotes(${i})">Delete</button>
    </div>
    `).join('');

    noteContainer.innerHTML = notesHTML;
}

//Function to delete a note
function deleteNote(i) {
    notes.splice(i, 1);
    localStorage.setItem('notes', JSON.stringify(notes));
    displayNotes();
}

//Display notes on load
displayNotes();