const searchCtn = document.getElementById("submit");
const searchBar = document.getElementById("searchBar");
const searchBtn = document.getElementById("search")
const randomBtn = document.getElementById("random")

const displayRecipeEl = document.getElementById("recipeBox")
const searchResults = document.getElementById("searchResults")
const searchResultsBox = document.getElementById('searchResultsBox')

searchBar.addEventListener('keypress',  e=> {
    if (e.key == 'Enter') {
        searchMeal(e);
    }
})

searchCtn.addEventListener("submit", searchMeal)
randomBtn.addEventListener("click", genRandom)

function searchMeal(e) {
    e.preventDefault()
    displayRecipeEl.innerHTML = ''
    const searchTerm = searchBar.value.trim();
    if (searchTerm) {
        searchResults.innerText = `Search results for '${searchTerm}':`
        searchResultsBox.innerHTML = ''
        fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${searchTerm}`)
        .then(response => response.json())
        .then(data => {
            console.log(data.meals)
            if (data.meals != null) {
                data.meals.forEach(meal => {
                    displayResult(meal)
                });
            } else {
                console.log("true")
                searchResults.innerText = `No results found for '${searchTerm}':`
            }
        });
    } else {
        alert("Please enter search.")
    }
    searchBar.value = ''
}


function genRandom() {
    searchResults.innerText = '';
    searchResultsBox.innerHTML = '';

    fetch("https://www.themealdb.com/api/json/v1/1/random.php")
    .then(response => response.json())
    .then(data => {
        displayRecipe(data.meals[0])
    });
}

function displayResult(meal) {
    const item = document.createElement("div")
    item.classList.add("box")
    item.innerHTML = 
        `<img class='searchResults' src='${meal.strMealThumb}'>
        <div class="meal-info" data-ID=${meal.idMeal}>
            <div class="text">${meal.strMeal}</div>
        </div>`
     //pass down meal.idMeal
    searchResultsBox.appendChild(item)
}

function displayRecipe(recipe) {
    searchResults.innerText = ''; 
    searchResultsBox.innerHTML = '';
    displayRecipeEl.innerHTML =
        `<h2 id="recipeName">${recipe.strMeal}</h2>
        <img id="recipeImg" class="recipeImg" alt="${recipe.strMeal}" src="${recipe.strMealThumb}">
        <div class="category">
            <p id="category">${recipe.strCategory}</p>
            <p id="area">${recipe.strArea}</p>
        </div>
        <div class="instructions">
            <p id="instructions">${recipe.strInstructions}</p>
        </div>
        <div class="ingredients" id="ingredientsBox">
            <h2>Ingredients</h2>
            <div class="ingredientItems" id="ingredientItems"></div>
        </div>`

    // TO DO: Have it auto split into numbered elements
    const ingredientsList = document.getElementById("ingredientItems")
    let i = 1;
    while (`strIngredient${i}` in recipe) {
        let ingName = recipe[`strIngredient${i}`]
        let ingMeasure = recipe[`strMeasure${i}`]
        if (ingName) {
            const ingredient = document.createElement("P");
            ingredient.classList.add("ingredient")
            ingredient.innerText = `${ingName} - ${ingMeasure}`
            ingredientsList.appendChild(ingredient)
        }
        i++;
        if (i > 50) {
            break;
        }
    }
}

searchResultsBox.addEventListener('click', e => {
    // path is supported in chrome but not in firefox
    const path = e.path || (e.composedPath && e.composedPath());
    const mealInfo = path.find(item => {
        if (item.classList) {
            return item.classList.contains('meal-info')
        } else {
            return false;
        }
  });
  if(mealInfo) {
    const mealID = mealInfo.getAttribute('data-ID')
    fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${mealID}`)
    .then(response => response.json())
    .then(data => {
        displayRecipe(data.meals[0])
    });
  }
    
})

    
    
    