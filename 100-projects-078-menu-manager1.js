'use strict'

let menu = [
    { name: 'Burger', category: 'main course', price: '$10'},
    { name: 'Salad', category: "starter", price: '$5'},
    { name: "Ice Cream", category: 'dessert', price: "$3"},
];

function renderMenu() {
    const menuContainer = document.getElementById('menu');
    menuContainer.innerHTML = '';
    menu.forEach((item, index) => {
        const itemElement = document.createElement('div');
        itemElement.classList.add('menuItem');
        itemElement.innerHTML = `
        <h2>${item.name}</h2>
        <p>Category: ${item.category}</p>
        <p>Price: ${item.price}</p>
        <button onclick="removeItem(${index})">Remove</button>
        `;
        menuContainer.appendChild(itemElement);
    });
}

function addItem(event) {
    event.preventDefault();
    const name = document.getElementById('itemName').value;
    const category = document.getElementById('itemCategory').value;
    const price = document.getElementById('itemPrice').value;
    menu.push({ name, category, price });
    renderMenu();
}

function removeItem(index) {
    menu.splice(index, 1);
    renderMenu();
}

document.getElementById('addItemForm').addEventListener('submit', addItem);
renderMenu();