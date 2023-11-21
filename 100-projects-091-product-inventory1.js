'use strict'

const form = document.getElementById('product-form');
const nameInout = document.getElementById('productName');
const descriptionInput = document.getElementById('productDescription');
const priceInput = document.getElementById('productPrice');
const quantityInput = document.getElementById('productQuantity');
const productList = document.getElementById('product-list');
const API_URL = 'https://my-json-server.tyicode.com/SanghyunNa-web/inventory/products';

//Fetch initial products
fetch(API_URL)
.then((response) => response.json())
.then((products) => {
    products.forEach((product) => {
        addProductToPage(product);
    });
});

