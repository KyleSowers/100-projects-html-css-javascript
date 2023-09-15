'use strict'

document.getElementById('add-button').addEventListener('click', function() {
    let itemInput = document.getElementById('item-input');
    let itemText = itemInput.value;
    itemInput.value = '';

    //This will creat li's and display text
    let listItem = document.createElement('li');
    listItem.textContent = itemText;

    //Creating delete button that will display and function in HTML
    let deleteButton = document.createElement('button');
    deleteButton.textContent = 'Delete';
    deleteButton.classList.add('item-button');
    deleteButton.addEventListener('click', function () {
        listItem.remove();
    });

    //Creating a bought button to place a line-through a bought item
    let boughtButton =document.createElement('button');
    boughtButton.textContent = "Bought";
    boughtButton.classList.add('item-button');
    boughtButton.addEventListener('click', function () {
        listItem.classList.toggle('bought');
    });

    listItem.appendChild(deleteButton);
    listItem.appendChild(boughtButton);
    document.getElementById('grocery-list').appendChild(listItem);
})