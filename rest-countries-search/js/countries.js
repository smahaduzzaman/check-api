const loadCountries = () => {
  fetch(`https://restcountries.com/v3.1/all`)
    .then((res) => res.json())
    .then((countries) => displayCountries(countries));
};

loadCountries();

const displayCountries = (countries) => {
  const countriesContainer = document.getElementById("countries-container");
  countries.slice(0, 10).forEach((country) => {
    // console.log(country);
    const singleCountryDiv = document.createElement("div");
    singleCountryDiv.classList.add("card", "p-3");
    singleCountryDiv.innerHTML = `
          <img src="${country.flags.png}" class="card-img-top" alt="...">
          <div class="card-body">
            <div class="d-flex justify-content-between">
            <h5 class="card-title">${country.name.common}</h5>
            <p class="card-text">Capital: ${country.capital[0]}</p>
            </div>
            <p class="card-text"><small class="text-body-secondary">${country.flags.alt?.slice(0,200)}</small></p>
            </div>
            <div class="d-flex justify-content-between">
            <a onclick="singleCountry('${country.cca2}')" class="btn btn-primary" href="">Details</a>
            <p>People: ${country.population}</p>
          </div>
          `;
    countriesContainer.appendChild(singleCountryDiv);
  });
};

const singleCountry = (code) => {
  fetch(`https://restcountries.com/v3.1/alpha/${code}`)
    .then(res => res.json())
    .then(data => {
      console.log(data);
      // displaySingleCountry(data)
  })
}

let displaySingleCountry = (country) => {
  console.log(country);
  let singleContainer = document.getElementById('single-country');
  let countryDiv = document.createElement('div');
  countryDiv.classList.add('card');
  countryDiv.innerHTML = `
  <img src="..." class="card-img-top" alt="...">
  <div class="card-body">
    <h5 class="card-title">${country.name.common}</h5>
    <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
    <p class="card-text"><small class="text-body-secondary">Last updated 3 mins ago</small></p>
  </div>
  `
  singleContainer.appendChild(countryDiv);

}