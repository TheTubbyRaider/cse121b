/* W02-Task - Profile Home Page */

let fullName = 'Gage Strong';

let currentYear = new Date().getFullYear(); 

let profilePicture = 'images/mypic.jpg';

const nameElement = document.getElementById('name');
const foodElement = document.getElementById('food');
const yearElement = document.querySelector('#year');
const imageElement = document.querySelector('img');


nameElement.innerHTML = `<strong>${fullName}</strong>`;

yearElement.textContent = currentYear;

imageElement.setAttribute('src', profilePicture);

imageElement.setAttribute('alt', `Profile image of ${fullName}`);

let favoriteFoods = ['Pizza', 'Burgers', 'Steak'];

foodElement.innerHTML = favoriteFoods.join('<br>');

let newFavoriteFood = 'Brownies';

favoriteFoods.push(newFavoriteFood);

favoriteFoods.shift();

foodElement.innerHTML += '<br>' + favoriteFoods.join('<br>');

favoriteFoods.pop();

foodElement.innerHTML += '<br>' + favoriteFoods.join('<br>');











