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

function displayRecipes() {
    rightColumn.innerHTML = "";
    recipes.forEach((recipe, index) => {
        const recipeHTML = `
        <div class='recipe-card'>
        <h2>${recipe.name}</h2>
        <h3>Ingredients</h3>
        <p>${recipe.ingredients.join(', ')}</p>
        <h3>Method</h3>
        <p>${recipe.method}</p>
        <button class="delete-button" data-index="${index}">Delete Recipe</button>
        </div
        `;
        rightColumn.innerHTML += recipeHTML;
    });
    document.querySelectorAll('.delete-button').forEach(button => {
        button.addEventListener('click', deleteRecipe);
    });
}

function deleteRecipe(event) {
    const index = event.target.dataset.index;
    recipes.splice(index, 1);
    displayRecipes();
}

form.addEventListener('submit', handleSubmit);