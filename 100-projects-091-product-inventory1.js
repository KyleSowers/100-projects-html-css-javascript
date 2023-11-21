'use strict'

const form = document.getElementById('product-form');
const nameInout = document.getElementById('productName');
let descriptionInput = document.getElementById('productDescription');
let priceInput = document.getElementById('productPrice');
let quantityInput = document.getElementById('productQuantity');
const productList = document.getElementById('product-list');
const API_URL = 'https://my-json-server.typicode.com/SanghyunNa-web/inventory/products';

//Fetch initial products
fetch(API_URL)
.then((response) => response.json())
.then((products) => {
    products.forEach((product) => {
        addProductToPage(product);
    });
});


//Form Submission
form.addEventListener('submit', (event) => {
    event.preventDefault();

    const product = {
        name: nameInout.value,
        description: descriptionInput.value,
        price: parseFloat(priceInput.value),
        quantity: parseInt(quantityInput.value),
    };

    //In real-world scenario, you would send POST request to API here
    addProductToPage(product);

    //Clear the input fields
    nameInout.value = '';
    descriptionInput = '';
    priceInput = '';
    quantityInput = '';
});

function addProductToPage(product) {
    const listItem = document.createElement('li');
    listItem.textContent = `${product.name} - ${product.quantity}`;

    const deleteButton = document.createElement('button');
    deleteButton.textContent = 'Delete';
    deleteButton.addEventListener('click', () => {
        //In real world scenario, you would send DELETE request to API here
        productList.removeChild(listItem);
    });

    listItem.appendChild(deleteButton);
    productList.appendChild(listItem);
}