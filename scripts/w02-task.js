/* W02-Task - Profile Home Page */

/* Step 1 - Setup type tasks - no code required */

/* Step 2 - Variables */
let fullName = "Bitner Torres";

let currentYear = new Date().getFullYear();

let profilePicture = 'images/Bit.jpeg';



/* Step 3 - Element Variables */
const nameElement = document.getElementById('name');
const foodElement = document.getElementById('food');
const yearElement = document.querySelector('#year');
const imageElement = document.querySelector('img');



/* Step 4 - Adding Content */
nameElement.innerHTML = `<strong>${fullName}</strong>`;
yearElement.textContent = currentYear;
imageElement.setAttribute('src', profilePicture);



/* Step 5 - Array */
const favFoods = ['Pizza', ' Sushi', ' Cheeseburger'];
foodElement.innerHTML += `<br>${favFoods}`;

favFoods.push(" Chocolate");
foodElement.innerHTML += `<br>${favFoods}`;

favFoods.shift();
foodElement.innerHTML += `<br>${favFoods}`;

favFoods.pop();
foodElement.innerHTML += `<br>${favFoods}`;






