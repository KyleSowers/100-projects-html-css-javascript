'use strict'

document.getElementById('search-recipes').addEventListener("click", function () {
    let ingredientInput = document.getElementById('ingredient-input').value;
    if (!ingredientInput) return;

    const ingredients = ingredientInput.split(',').map(ingredient => ingredient.trim());

    fetch(`https//api.spoonacular.com/recipes/findByIngredients?ingredients=${ingredients.join(',')}&apiKey=YOURKEY`)
        .then(response => response.json())
        .then(data => {
            const recipesElement = document.getElementByID('recipes');
            recipesElement.innerHTML = ''; // clear previous results

            data.foreach(recipe => {
                const recipeElement = document.createElement('div');
                recipeElement.innerHTML = `
                <h2>${recipe.title}</h2>'
                <img src='${recipe.image}' alt='${recipe.title}'/>
                <p>${recipe.usedIngredientCount} ingredients used </p>
                <p>${recipe.usedIngredientCount} ingredients missed</p>
            `;

            recipesElement.appendChild(recipeElement);
            });
        })
        .catch(error => console.error('Error:', error));
});