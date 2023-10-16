'use strict'

$('#search-recipes').click(function () {
    let ingredientInput = $('#ingredient-input').val();
    if (!ingredientInput) return;

    const ingredients = ingredientInput.split(',').map(ingredient => ingredient.trim());

    $.get(`https://api.spoonacular.com/recipes/findByIngredients?ingredients=${ingredients.join(',')}&apiKey=YOURAPIKEY`, function (data) {
        const recipesElement = $('#recipes');
        recipesElement.empty(); // clear previous results

        data.forEach(recipe => {
            const recipeElement = $(`
            <div class="card">
            <img src="${recipe.image}" alt="${recipe.title}" class="card-img-top">
            <div class="card-body">
            <h5 class="card-title">${recipe.title}</h5>
            <p class="card-text">${recipe.usedIngredientCount} ingredients used: ${recipe.usedIngredients.map(i => i.name).join(',')}</p>
            <p class="card-text">${recipe.missedIngredientCount} ingredients missed: ${recipe.missedIngredients.map(i => i.name).join(',')}</p>
                        </div>
                    </div>
                </div>
            `);
            recipesElement.append(recipeElement);
        });
    }).catch(error => console.error('Error:', error));
});