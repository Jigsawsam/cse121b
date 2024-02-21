/* Declare and initialize global variables */
const catsElement = document.querySelector('#cats');
let catList = [];

/* async displayCats Function */
const displayCats = (cats) => {
    cats.forEach(cat => {
        const article = document.createElement('article');
        
        const h3 = document.createElement('h3');
        h3.textContent = cat.name;

        const img = document.createElement('img');
        img.setAttribute('src', cat.image_link);
        img.setAttribute('alt', cat.name);

        const ul = document.createElement('ul');
        const characteristics = ["Family Friendly", "Shedding", "General Health", "Playfulness", "Children Friendly", "Grooming", "Intelligence",];
        characteristics.forEach(char => {
            const li = document.createElement('li');
            li.textContent = `${char}: ${cat[char.toLowerCase().replace(' ', '_')]}`;
            ul.appendChild(li);
        });

        article.appendChild(h3);
        article.appendChild(img);
        article.appendChild(ul);

        catsElement.appendChild(article);
    });
}

/* async getCats Function using fetch()*/
const getCats = async () => {
    const response = await fetch("https://run.mocky.io/v3/103c7f34-6cd3-48c0-bf46-8f26645fa909");
    catList = await response.json();
    displayCats(catList);
}

/* reset Function */
function reset() {
    catsElement.innerHTML = '';
}

/* Event Listener */
document.querySelector("#filtered").addEventListener("change", () => { filterCats(catList) });

document.querySelector("#sortOrder").addEventListener("change", () => { filterCats(catList); });

/* filterCats Function */
function filterCats(cats) {
    reset();
    let filter = document.getElementById("filtered").value;
    let sortOrder = document.getElementById("sortOrder").value;

    switch (filter) {
      case "family_friendly":
        if (sortOrder === "asc") {
          displayCats(
            cats.sort((a, b) => b.family_friendly - a.family_friendly)
          );
        } else {
          displayCats(
            cats.sort((a, b) => a.family_friendly - b.family_friendly)
          );
        }
        break;
      case "shedding":
        if (sortOrder === "asc") {
          displayCats(cats.sort((a, b) => b.shedding - a.shedding));
        } else {
          displayCats(cats.sort((a, b) => a.shedding - b.shedding));
        }
        break;
      case "general_health":
        if (sortOrder === "asc") {
          displayCats(cats.sort((a, b) => b.general_health - a.general_health));
        } else {
          displayCats(cats.sort((a, b) => a.general_health - b.general_health));
        }
        break;
      case "playfulness":
        if (sortOrder === "asc") {
          displayCats(cats.sort((a, b) => b.playfulness - a.playfulness));
        } else {
          displayCats(cats.sort((a, b) => a.playfulness - b.playfulness));
        }
        break;
      case "children_friendly":
        if (sortOrder === "asc") {
          displayCats(
            cats.sort((a, b) => b.children_friendly - a.children_friendly)
          );
        } else {
          displayCats(
            cats.sort((a, b) => a.children_friendly - b.children_friendly)
          );
        }
        break;
      case "grooming":
        if (sortOrder === "asc") {
          displayCats(cats.sort((a, b) => a.grooming - b.grooming));
        } else {
          displayCats(cats.sort((a, b) => b.grooming - a.grooming));
        }
        break;
      case "intelligence":
        if (sortOrder === "asc") {
          displayCats(cats.sort((a, b) => b.intelligence - a.intelligence));
        } else {
          displayCats(cats.sort((a, b) => a.intelligence - b.intelligence));
        }
        break;
      case "all":
        if (sortOrder === "desc") {
          displayCats(cats.sort((a, b) => b.name.localeCompare(a.name)));
        } else {
          displayCats(cats.sort((a, b) => a.name.localeCompare(b.name)));
        }
        break;
    }
}

getCats();