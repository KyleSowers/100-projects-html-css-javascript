'use strict'

document.getElementById('search-recipes').addEventListener("click", function () {
    let ingredientInput = document.getElementById('ingredient-input').value;
    if (!ingredientInput) return;

    const ingredients = ingredientInput.split(',').map(ingredient => ingredient.trim());

    fetch(`https://api.spoonacular.com/recipes/findByIngredients?ingredients=${ingredients.join(',')}&apiKey=YOURAPIKEY`)
        .then(response => response.json())
        .then(data => {
            const recipesElement = document.getElementById('recipes');
            recipesElement.innerHTML = ''; // clear previous results

            data.forEach(recipe => {
                // recipe.missedIngredientCount = undefined;
                // recipe.usedIngredientCount = undefined;
                const recipeElement = document.createElement('div');
                recipeElement.classList.add('recipeDiv');
                recipeElement.innerHTML = `
                <h2>${recipe.title}</h2>
                <img src='${recipe.image}' alt='${recipe.title}'/>
                <p>${recipe.usedIngredientCount} ingredients used </p>
                <p>${recipe.missedIngredientCount} ingredients missed</p>
            `;

            recipesElement.appendChild(recipeElement);
            });
        })
        .catch(error => console.error('Error:', error));
});