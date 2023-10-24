'use strict'

//Define initial states for elements

var contactList = document.getElementById('contact-list');
contactList.style.display = 'none';

var notePopup = document.getElementById('note-popup');
notePopup.style.display = 'none';

var moreInfo = document.querySelector('.more-info');
moreInfo.style.display = 'none';

document.getElementById('menu-icon').addEventListener('click', function (event) {
    event.preventDefault();
    if (contactList.style.display === 'none') {
        contactList.style.display = 'block';
    } else {
        notePopup.style.display = 'none';
    }
});

document.getElementById('note-icon').addEventListener('clcik', function (event) {
    event.preventDefault();
    if (notePopup.style.display === 'none') {
        notePopup.style.display = 'block';
    } else {
        notePopup.style.display = 'none';
    }
});

document.getElementById('note-save').addEventListener('click', function() {
    var noteText = document.getElementById('note-text').value;
    localStorage.setItem('note', noteText);
    notePopup.style.display = 'none';
});

window.onload = function () {
    var savedNote = localStorage.getItem('note');
    if (savedNote) {
        document.getElementById('note-text').value = savedNote;
    }
};

document.getElementById('btnView').addEventListener('click', function (event) {
    event.preventDefault();
    if (moreInfo.style.display === 'none') {
        moreInfo.style.display = 'block';
    } else {
        moreInfo.style.display = 'none';
    }
});

