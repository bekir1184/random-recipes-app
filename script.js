const searchForm = document.querySelector("form");
const searchResultDiv = document.querySelector(".search-result");
const container = document.querySelector(".container");

let searchQuery = "";
const APP_ID = "89033108";
const APP_key = "02494636fe008fe01c17ea4f0b087f8e	";


searchForm.addEventListener("submit", (e) => {
    e.preventDefault();
    searchQuery = e.target.querySelector("input").value;
    fetchAPI();
});
async function fetchAPI() {
    const baseURL = `https://api.edamam.com/search?q=${searchQuery}&app_id=${APP_ID}&app_key=${APP_key}&from=0&to=30`;
    const response = await fetch(baseURL);
    const data = await response.json();
    generateHTML(data.hits);
    console.log(data);
}

async function randomRecipe(name) {
    console.log(name)
    var array
    switch (name) {
        case 'foodNames':
            array = foodNames
            break

        case 'beverageNames':
            array = beverageNames
            break

        case 'dairyNames':
            array = dairyNames
            break

        case 'vegetableNames':
            array = vegetableNames
            break

        case 'fruitNames':
            array = fruitNames
            break

        case 'meatNames':
            array = meatNames
            break

        case 'sauceNames':
            array = sauceNames
            break

    }
    searchQuery = randomGenerator(array)
    const baseURL = `https://api.edamam.com/search?q=${searchQuery}&app_id=${APP_ID}&app_key=${APP_key}&from=0&to=3`;
    const response = await fetch(baseURL);
    const data = await response.json();
    generateHTML(data.hits);
    console.log(data);
}

function generateHTML(results) {
    container.classList.remove("initial");
    let generatedHTML = "";
    results.map((result) => {
        generatedHTML += `
      <div class="item">
        <img src="${result.recipe.image}" alt="img">
        <div class="flex-container">
          <h1 class="title">${result.recipe.label}</h1>
          <a class="view-recipe" target="_blank" href="${
            result.recipe.url
          }">View Recipe</a>
        </div>
        <p class="item-data">Calories: ${result.recipe.calories.toFixed(2)}</p>
        <p class="item-data">Diet label: ${
          result.recipe.dietLabels.length > 0
            ? result.recipe.dietLabels
            : "No Data Found"
        }</p>
        <p class="item-data">Health labels: ${result.recipe.healthLabels}</p>
      </div>
    `;
    });
    searchResultDiv.innerHTML = generatedHTML;
}

function generateHTMLrandom(result) {
    container.classList.remove("initial");
    let generatedHTML = `
  <div class="item">
    <img src="${result.recipe.image}" alt="img">
    <div class="flex-container">
      <h1 class="title">${result.recipe.label}</h1>
      <a class="view-recipe" target="_blank" href="${
        result.recipe.url
      }">View Recipe</a>
    </div>
    <p class="item-data">Calories: ${result.recipe.calories.toFixed(2)}</p>
    <p class="item-data">Diet label: ${
      result.recipe.dietLabels.length > 0
        ? result.recipe.dietLabels
        : "No Data Found"
    }</p>
    <p class="item-data">Health labels: ${result.recipe.healthLabels}</p>
  </div>
`;

    searchResultDiv.innerHTML = generatedHTML;
}

function randomGenerator(array) {
    var max = array.length
    console.table(array)
    console.log(array[5])
    return array[getRndInteger(max)]

}

function getRndInteger(max) {
    return Math.floor(Math.random() * (max - 0)) + 0;
}

//random food list 



var foodNames = [
    'Cheese Pizza', 'Hamburger', 'Cheeseburger', 'Bacon Burger', 'Bacon Cheeseburger',
    'Little Hamburger', 'Little Cheeseburger', 'Little Bacon Burger', 'Little Bacon Cheeseburger',
    'Veggie Sandwich', 'Cheese Veggie Sandwich', 'Grilled Cheese',
    'Cheese Dog', 'Bacon Dog', 'Bacon Cheese Dog', 'Pasta'
]
var beverageNames = [
    'Beer', 'Bud Light', 'Budweiser', 'Miller Lite',
    'Milk Shake', 'Tea', 'Sweet Tea', 'Coffee', 'Hot Tea',
    'Champagne', 'Wine', 'Lemonade', 'Coca-Cola', 'Diet Coke',
    'Water', 'Sprite', 'Orange Juice', 'Iced Coffee'
]
var dairyNames = [
    'Butter',
    'Egg',
    'Cheese',
    'Sour cream',
    'Mozzarella',
    'Yogurt',
    'Cream',
    'Milk',
    'Custard',
]
var vegetableNames = [
    'Onion',
    'Garlic',
    'Tomato',
    'Potato',
    'Carrot',
    'Bell Pepper',
    'Bell Basil',
    'Parsley',
    'Broccoli',
    'Corn',
    'Spinach',
    'Ginger',
    'Chili',
    'Celery',
    'Rosemary',
    'Cucumber',
    'Pickle',
    'Avocado',
    'Pumpkin',
    'Mint',
    'Eggplant',
    'Yam',
]
var fruitNames = [
    'Lemon',
    'Apple',
    'Banana',
    'Lime',
    'Strawberry',
    'Orange',
    'Pineapple',
    'Blueberry',
    'Raisin',
    'Coconut',
    'Grape',
    'Peach',
    'Raspberry',
    'Cranberry',
    'Mango',
    'Pear',
    'Blackberry',
    'Cherry',
    'Watermelon',
    'Kiwi',
    'Papaya',
    'Guava',
    'Lychee',
]
var meatNames = [
    'Chicken',
    'Bacon',
    'Sausage',
    'Beef',
    'Ham',
    'Hot dog',
    'Pork',
    'Turkey',
    'Chicken wing',
    'Chicken breast',
    'Lamb',
]
var sauceNames = [
    'Tomato sauce',
    'Tomato paste',
    'Mayonnaise sauce',
    'BBQ sauce',
    'Chili sauce',
    'Garlic sauce',
]