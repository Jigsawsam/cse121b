/* W05: Programming Tasks */

/* Declare and initialize global variables */
const templesElement = document.querySelector('#temples');
let templeList = [];
/* async displayTemples Function */
const displayTemples = (temples) => {
    temples.forEach(temple => {
        const article = document.createElement('article');
        
        const h3 = document.createElement('h3');
        h3.textContent = temple.templeName;

        const img = document.createElement('img');
        img.setAttribute('src', temple.imageUrl);
        img.setAttribute('alt', temple.location);

        article.appendChild(h3);
        article.appendChild(img);

        templesElement.appendChild(article);
    })
}

/* async getTemples Function using fetch()*/
const getTemples = async () => {
    const response = await fetch("https://byui-cse.github.io/cse121b-ww-course/resources/temples.json");
    templeList = await response.json();
    displayTemples(templeList);
    //console.log(templeList)
}


/* reset Function */
function reset() {
    templesElement.innerHTML = '';
}

/* filterTemples Function */
function filterTemples(temples) {
    reset();
    let filter = document.getElementById('filtered').value;

    switch (filter) {
        case 'utah':
            displayTemples(temples.filter(temple => temple.location.toLowerCase().includes('utah')));
            break;
        case 'notutah':
            displayTemples(temples.filter(temple => !temple.location.toLowerCase().includes('utah')));
            break;
        case 'older':
            displayTemples(temples.filter(temple => new Date(temple.dedicated) < new Date('1950, 1, 1')));
            break;
        case 'all':
            displayTemples(temples);
            break;
    }
}

getTemples();

/* Event Listener */
document.querySelector("#filtered").addEventListener("change", () => { filterTemples(templeList) });