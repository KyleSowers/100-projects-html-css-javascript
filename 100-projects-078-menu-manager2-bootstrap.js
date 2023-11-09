'use strict'

let menu = [
    { name: 'Burger', category: 'main course', price: '$10', image: "menu_burger.jpg"},
    { name: 'Salad', category: "starter", price: '$5', image: "menu_salad.jpg"},
    { name: "Ice Cream", category: 'dessert', price: "$3", image: "menu_icecream.jpg"},
];

function renderMenu() {
    const menuContainer = $('#menu');
    menuContainer.html('');
    menu.forEach((item, index) => {
        const itemElement = $(` <div class="col-sm-4 my-2">
        <div class="card">
            <img src="${item.image}" class="card-img-top" alt="${item.name}">
            <div class="card-body">
                <h5 class="card-title">${item.name}</h5>
                <p class="card-text">Category: ${item.category}</p>
                <p class="card-text">Price: ${item.price}</p>
                <button class="btn btn-danger remove-button" data-index="${index}">Remove</button>
                </div>
            </div>
        </div>`);
        menuContainer.append(itemElement);
    });
}

