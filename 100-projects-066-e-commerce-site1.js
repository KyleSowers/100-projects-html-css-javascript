'use strict'

let products = [
    { id: 1, name: 'Product 1', price: 100 },
    { id: 2, name: 'Product 2', price: 200 },
    { id: 3, name: 'Product 3', price: 300 },
];

let cart = [];

//Display products
products.forEach(product => {
    let productElement = document.createElement('div');
    productElement.className = 'product';

    let nameElement = document.createElement('h2');
    nameElement.innerText = product.name;
    productElement.appendChild(nameElement);

    let priceElement = document.createElement('p');
    priceElement.innerText = 'Price: $' + product.price;
    productElement.appendChild(priceElement);

    let buttonElement = document.createElement('button');
    buttonElement.innerText = 'Add to cart';
    buttonElement.addEventListener('click', function () {
        addToCart(product);
    });
    productElement.appendChild(buttonElement);

    document.getElementById('products').appendChild(productElement);
});

//Add to cart function
function addToCart(product) {
    cart.push(product);

    let cartItemElement = document.createElement('li');
    cartItemElement.innerText = product.name + ': $' + product.price;
    document.getElementById('cart').appendChild(cartItemElement);
}

//Checkout function
document.getElementById('checkout').addEventListener('click', function () {
    if (cart.length > 0) {
        alert('Purchase made! Total cost: $' + cart.reduce((total, product) => total + product.price, 0));
        cart = [];
        document.getElementById('cart').innerHTML = '';
    } else {
        alert('Your cart is empty!');
    }
});
