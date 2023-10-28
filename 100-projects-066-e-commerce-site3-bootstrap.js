'use strict'

let products = [
    { id: 1, name: 'Shoes 1', price: 100, category: 'Shoes', image: 'e-shoes1.png', description: 'Comfortable running shoes.' },
    { id: 2, name: 'Hat 1', price: 50, category: 'Hats', image: 'e-hat1.png', description: 'Stylish baseball cap.' },
    { id: 3, name: 'T-shirt', price: 20, category: "Clothes", image: 'e-tshirt1.jpg', description: 'Cotton t-shirt.' },
    { id: 4, name: "Shoes 2", price: 100, category: "Shoes", image: 'e-shoes2.png', description: "Comfortable running shoes." },
    { id: 5, name: "Hat 2", price: 50, category: "Hats", image: 'e-hat2.png', description: 'Stylish baseball cap.' },
    { id: 6, name: "T-shirt", price: 20, category: "Clothes", image: 'e-tshirt2.jpg', description: 'Cotton t-shirt.' },
];

let cart = [];

$(document).ready(function () {
//Display products
    products.forEach(product => {
        let productElement = $('<div>', { "class": 'product card m-2', "style": "width: 18rem;"}).appendTo('#products');
        $('<img/>', { 'class': 'card-img-top', "src": product.image }).appendTo(productElement);
        let cardBody = $('<div>', { 'class': 'card-body' }).appendTo(productElement);
        $('<h5/>', { "class": 'card-title', "text": product.name }).appendTo(cardBody);
        $('<p/>', { "class": 'card-text', "text": product.description }).appendTo(cardBody);
        $('<p/>', { "class": 'card-text', "text": "Proce: $" + product.price }).appendTo(cardBody);
        let quantityInput = $('<input/>', { "type": "number", "value": 1, "min": 1, "id": `quantity_${product.id}` }).appendTo(cardBody);
        $('<button/>', { "class": 'btn btn-primary mt-2', "text": 'Add to Cart' }).click(function () {
            addToCart(product, quantityInput.val());
        }).appendTo(cardBody);
    });
});

// Add to cart function
function addToCart(product, quantity) {
    cart.push({ ...product, quantity });

    let cartItemElement = $('<li/>', { "class": 'list-group-item', "text": product.name + ' (' + quantity + '): $' + product.price * quantity });
    $('#cart').append(cartItemElement);
}

// Checkout function
$('#checkout').click(function () {
    if (cart.length > 0) {
        let total = cart.reduce((total, product) => total + product.price * product.quantity, 0);
        alert('Purchase made! Total cast: $' + total);
        cart = [];
        $("#cart").empty();
    } else {
        alert('Your cart is empty!');
    }
});

