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

function addContactToPage(contact) {
    const listItem = document.createElement('li');
    listItem.textContent = `${contact.name} - ${contact.email} - ${contact.phone} - ${contact.address}`;

    const editButton = document.createElement('button');
    editButton.textContent = "Edit";
    editButton.classList.add('btn', 'button-info', 'mr-2');
    editButton.addEventListener('click', () => {
        //Real-world scenario, you implement the edit functionality here
        alert("Edit functionality is not implemented in this demo");
    });

    const deleteButton = document.createElement('button');
    deleteButton.textContent = 'DELETE';
    deleteButton.classList.add('btn', 'btn-danger');
    deleteButton.addEventListener('click', () => {
        //in real-world scenario, you would send DELETE to API here
        const confirmDelete = confirm("Are you sure you want to delete this contact?");
        if (confirmDelete) {
            contactList.removeChild(listItem);
        }
    });

    listItem.appendChild(editButton);
    listItem.appendChild(deleteButton);
    contactList.appendChild(listItem);
}