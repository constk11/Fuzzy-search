const { selectRelevantItems, calculateLevenshteinDistance } = require('calculate-levenshtein-distance');

async function getCities() {
    const response = await fetch('russia.json');
    const cities = await response.json();
    return cities;
}

function showCities(cities, citiesList) {
    cities.forEach(city => {
        let relevantCity = document.createElement('li');
        relevantCity.innerText = city.city;
        console.log(city);
        citiesList.appendChild(relevantCity);
    });    
}  

async function findRelevantCities() {
    const cities = await getCities();      
    const citiesList = document.getElementById('searched-cities');
    citiesList.innerHTML = '';    
    if(this.value != '') {                        
        const searchedCities = selectRelevantItems(cities, 'city', this.value);
        showCities(searchedCities, citiesList);
    }
}

async function main() {    
    const searchingInput = document.getElementById('search-input');
    searchingInput.addEventListener('input', findRelevantCities);   
}

main();