'use strict'

const form = document.getElementById('contact-form');
let nameInput = document.getElementById('contactName');
let emailInput = document.getElementById('contactEmail');
let phoneInput = document.getElementById('contactPhone');
let addressInput = document.getElementById('contactAddress');
const contactList = document.getElementById('contact-list');
const searchInput = document.getElementById('searchInput');
const API_URL = 'https://my-json-server.typicode.com/SanghyunNa-web/contactmanage/contacts';

fetch(API_URL)
    .then((response) => response.json())
    .then((contacts) => {
        contacts.forEach((contact) => {
            addContactToPage(contact);
        });
    });

form.addEventListener('submit', (event) => {
    event.preventDefault();

    const contact = {
        name: nameInput.value,
        email: emailInput.value,
        phone: phoneInput.value,
        address: addressInput.value,
    };

    //in real world scenario, you would send POST request to API here
    addContactToPage(contact);

    //Clear the input fields
    nameInput = '';
    emailInput = '';
    phoneInput = '';
    addressInput = '';
});