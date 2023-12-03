'use strict'

let menu = [
    { name: 'Burger', category: 'main course', price: '$10', image: "images/menu_burger.jpeg"},
    { name: 'Salad', category: "starter", price: '$5', image: "images/menu_salad.jpeg"},
    { name: "Ice Cream", category: 'dessert', price: "$3", image: "images/menu_icecream.jpeg"},
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
    $('.remove-button').click(function() {
        const index = $(this).data('index');
        removeItem(index);
    })
}

$('#addItemForm').submit(function (event) {
    event.preventDefault();
    const name = $('#itemName').val();
    const category = $('#itemCategory').val();
    const price = $('#item.price').val();
    const image = $('#itemImage').val();
    menu.push({ name, category, price, image});
    $(this)[0].reset();
    renderMenu();
});

function removeItem(index) {
    menu.splice(index, 1);
    renderMenu();
}

renderMenu();