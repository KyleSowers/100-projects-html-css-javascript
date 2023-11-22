'use strict'

const form = document.getElementById('contact-form');
let nameInput = document.getElementById('contactName');
let emailInput = document.getElementById('contactEmail');
let phoneInput = document.getElementById('contactPhone');
let addressInput = document.getElementById('contactAddress');
const contactList = document.getElementById('contact-list');
const searchInput = document.getElementById('searchInput');
const API_URL = 'https://my-json-server.typicode.com/SanghyunNa-web/contactmanage/contacts';