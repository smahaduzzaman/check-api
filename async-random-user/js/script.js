// Random Aip: https://randomuser.me/documentation

// Load data for .then method without async-await 
const userWithFetch = () => {
    fetch(`https://randomuser.me/api/?gender=female`)
        .then(res => res.json())
        .then(data => displayUser(data.results[0]))
    .catch(error = console.log(error))
}

// Load data for .await method with async
const userWithAsyncAwait = async () => {
    const url = `https://randomuser.me/api/?gender=female`;
    try {
        const res = await fetch(url);
        const data = await res.json();
        displayUser(data.results[0]);
    } catch (error) {
        console.log(error);
    }
}

// Display User 
const displayUser = (user) => {
    console.log(user);
    const fullName = user.name.title + " " + user.name.first + " " + user.name.last
    const userContainer = document.getElementById('user-container');
    const userDiv = document.createElement('div');
    userDiv.classList.add('card')
    userDiv.innerHTML = `
    <div class="card mb-5">
    <img src="${user.picture.thumbnail}" class="card-img-top w-25 rounded-5 text-center" alt="...">
    <div class="card-body">
      <h5 class="card-title">${fullName}</h5>
      <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
      <a href="#" class="btn btn-primary">More About</a>
    </div>
  </div>
    `;
    userContainer.appendChild(userDiv);
}