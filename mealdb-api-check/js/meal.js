const loadMeal = (search) => {
    fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${search}`)
        .then(res => res.json())
    .then(data => displayMeal(data.meals))
}

const displayMeal = (meals) => {
    console.log(meals)
  let mealContainer = document.getElementById('meal-container');
  mealContainer.innerHTML = '';
    meals.forEach(meal => {
        let singleMeal = document.createElement('div');
        singleMeal.classList.add('col');
        singleMeal.innerHTML = `
        <div onclick="loadMealDetails(${meal.idMeal})" class="card">
        <img src="${meal.strMealThumb}" class="card-img-top" alt="...">
        <div class="card-body">
          <h5 class="card-title">${meal.strMeal}</h5>
          <p class="card-text">${meal.strInstructions.slice(0, 300)}</p>
        </div>
      </div>
        `;
        mealContainer.appendChild(singleMeal);
    })
}

let searchFood = () => {
  let searchField = document.getElementById('search-field');
  let searchText = searchField.value;
  loadMeal(searchText);
  searchField.value = '';
}

const loadMealDetails = (id) => {
  fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`)
    .then(res => res.json())
  .then(data => displayMealDetails(data.meals[0]))
}

const displayMealDetails = (meal) => {
  const loadMealDetailsContainer = document.getElementById('meal-details');
  loadMealDetailsContainer.innerHTML = "";
  const detailsDiv = document.createElement('div');
  // detailsDiv.classList.add('card', 'mb-3');
  detailsDiv.innerHTML = `
  <div class="card my-4">
  <img src="${meal.strMealThumb}" class="card-img-top" alt="...">
  <div class="card-body">
  <h5>${meal.strMeal}</h5>
    <p class="card-text">${meal.strInstructions.slice(0, 500)}</p>
  </div>
</div>
  `;

  loadMealDetailsContainer.appendChild(detailsDiv);

}

loadMeal('');