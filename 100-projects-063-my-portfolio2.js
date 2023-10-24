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
        notePopup.style.display = 'noone';
    }
});

