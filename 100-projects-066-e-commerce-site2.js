'use strict'

let products = [
    { id: 1, name: 'Shoes 1', price: 100, category: 'Shoes', image: 'e-shoes1.png', description: 'Comfortable running shoes.' },
    { id: 2, name: 'Hat 1', price: 50, category: 'Hats', image: 'e-hat1.png', description: 'Stylish baseball cap.' },
    { id: 3, name: 'T-shirt 1', price: 20, category: 'Clothes', image: 'e-tshirt1.png', description: 'Cotton t-shirt' },
    { id: 4, name: 'Shoes 2', price: 100, category: 'Shoes', image: 'e-shoes2.jpg', description: 'Comfortable running shoes.' },
    { id: 5, name: 'Hat 2', price: 50, category: 'Hats', image: 'e-hat2.jpg', description: "Stylish baseball cap." },
    { id: 6, name: 'T-shirt 2', price: 20, category: 'Clothes', image: 'e-tshirt2.jpg', description: 'Cotton t-shirt' }
];

let cart = [];

//Display products
products.forEach(product => {
    let productElement = document.createElement('div');
    productElement.className = 'product';

    let imgElement = document.createElement('img');
    imgElement.src = product.image;
    productElement.appendChild(imgElement);

    let nameElement = document.createElement('h2');
    nameElement.innerText = product.name;
    productElement.appendChild(nameElement);

    let categoryElement = document.createElement('p');
    categoryElement.innerText = 'Category: ' + product.category;
    productElement.appendChild(categoryElement);
    let descriptionElement = document.createElement('p');
    descriptionElement.innerText = product.description;
    productElement.appendChild(descriptionElement);

    let priceElement = document.createElement('p');
    priceElement.innerText = product.description;
    productElement.appendChild(descriptionElement);

    let quantityElement = document.createElement('input');
    quantityElement.type = 'number';
    quantityElement.value = 1;
    quantityElement.min = 1;
    quantityElement.id = `quantity_${product.id}`;
    productElement.appendChild(quantityElement);

    let buttonElement = document.createElement('button');
    buttonElement.innerText = 'Add to Cart';
    buttonElement.addEventListener('click', function () {
        let quantity = document.getElementById(`quantity_${product.id}`).value;
        addToCart(product, quality);
    });
    productElement.appendChild(buttonElement);

    document.getElementById('products').appendChild(productElement);
});

//Add to cart function
function addToCart(product, quantity) {
    cart.push({ ...product, quantity });

    let cartItemElement = document.createElement('li');
    cartItemElement.innerText = product.name + '(' + quantity +'): $' + product.price * quantity;
    document.getElementById('cart').appendChild(cartItemElement);
}

//Checkout function
document.getElementById('checkout').addEventListener('click', function () {
    if (cart.length > 0) {
        let total = cart.reduce((total, product) => total + produce.price * product.quantity, 0);
        alert('Purchase made! Total cost: $' + total);
        cart = [];
        document.getElementById('cart').innerHTML = '';
    } else {
        alert('Your cart is empty!');
    }
});