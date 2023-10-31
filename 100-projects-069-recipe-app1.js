'use strict'

const form = document.querySelector('form');
const nameInput = document.querySelector('#recipe-name');
const ingrInput = document.querySelector('#recipe-ingredients');
const methodInput = document.querySelector('#recipe-method');
const rightColumn = document.querySelector('.right-column');
let recipes = [];

function handleSubmit(event) {
    event.preventDefault();
    const name = nameInput.value.trim();
    const ingredients = ingrInput.value.trim().split(',').map(i => i.trim());
    const method = methodInput.value.trim();

    if (name && ingredients.length > 0 && method) {
        const newRecipe = { name, ingredients, method };
        recipes.push(newRecipe);
        nameInput.value = '';
        ingrInput.value = '';
        methodInput.value = '';
        displayRecipes();
    }
}