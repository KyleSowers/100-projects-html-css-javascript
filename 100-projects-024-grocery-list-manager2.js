'use strict'

document.getElementById('add-button').addEventListener('click', function () {
    let itemInput = document.getElementById('item-input');
    let itemText = itemInput.value;
    itemInput.value = '';

    let listItem = document.createElement('li');
    listItem.textContent = itemText;

    let deleteButton = document.createElement('button');
    deleteButton.textContent = 'Delete';
    deleteButton.classList.add('item-button');
    deleteButton.addEventListener('click', function () {
        listItem.remove();
        saveListToLocalStorage();
    })

    let boughtButton =document.createElement('button');
    boughtButton.textContent = 'Bought';
    boughtButton.classList.add('item-button');
    boughtButton.addEventListener('click', function () {
        listItem.classList.toggle('bought');
        saveListToLocalStorage();
    })

    listItem.appendChild(deleteButton);
    listItem.appendChild(boughtButton);
    document.getElementById('grocery-list').appendChild(listItem);

    saveListToLocalStorage();
});

function saveListToLocalStorage () {
    let groceryList = Array.from(document.getElementById('grocery-list').children).map(function (listItem) {
        return {
            text: listItem.firstChild.textContent,
            bought: listItem.classList.contains('bought')
        };
    });
    localStorage.setItem('groceryList', JSON.stringify(groceryList));
}

function loadListFromlocalStorage() {
    let savedList = JSON.parse(localStorage.getItem('groceryList'));
    if (savedList) {
        let groceryList = document.getElementById('grocery-list');
        groceryList.innerHTML = '';
        for (let item of savedList) {
            let listItem = document.createElement("li");
            listItem.textContent = item.text;

            let deleteButton = document.createElement('button');
            deleteButton.textContent = 'Delete';
            deleteButton.classList.add('item-button');
            deleteButton.addEventListener('click', function() {
                listItem.remove();
                saveListToLocalStorage();
            });

            let boughtButton = document.createElement('button');
            boughtButton.textContent = "Bought";
            boughtButton.classList.add('item-button');
            boughtButton.addEventListener('click', function () {
                listItem.classList.toggle('bought');
                saveListToLocalStorage();
            });

            listItem.appendChild(deleteButton);
            listItem.appendChild(boughtButton);
            if (item.bought) {
                listItem.classList.add('bought');
            }
            groceryList.appendChild(listItem);
        }
    }
}
loadListFromlocalStorage();