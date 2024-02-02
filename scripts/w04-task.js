/* LESSON 4 - Programming Tasks */

/* Profile Object  */
/* Populate Profile Object with placesLive objects */
let myProfile = {
  name: "Bitner Torres",
  photo: {
    src: "images/Bit.jpeg",
    alt: "Profile Picture"
  },
  favoriteFoods: [
    'Sushi',
    'Cheeseburger',
    'Pizza',
    'Chocolate',
  ],
  hobbies: [
    'Running',
    'Hiking',
    'Cooking',
    'Marksmanship'
  ],
  placesLived: []

};
myProfile.placesLived.push(
    {
      place: 'El Paso, TX',
      length: '9 years'
    },
    {
      place: 'Spokane, WA',
      length: '12 years'
    },
    {
      place:  'Las Vegas NV',
      length: '1 year'
    }
  );


/* DOM Manipulation - Output */
/* Name */
document.querySelector("#name").textContent = myProfile.name;

/* Photo with attributes */
document.querySelector("#photo").src = myProfile.photo.src;
document.querySelector("#photo").alt = myProfile.photo.alt;

/* Favorite Foods List*/
myProfile.favoriteFoods.forEach(food => {
  let li = document.createElement('li');
  li.textContent = food;
  document.querySelector("#favorite-foods").appendChild(li);
});

/* Hobbies List */
myProfile.hobbies.forEach(hobby => {
    let li = document.createElement('li');
    li.textContent = hobby;
    document.querySelector("#hobbies").appendChild(li);
  });

/* Places Lived DataList */
myProfile.placesLived.forEach(place => {
    let dt = document.createElement('dt');
    let dd = document.createElement('dd');
    dt.textContent = place.place;
    dd.textContent = place.length;
    document.querySelector("#places-lived").appendChild(dt);
    document.querySelector("#places-lived").appendChild(dd);
  });