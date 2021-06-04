const { calculateLevenshteinDistance } = require('calculate-levenshtein-distance');

async function getCities() {
    const response = await fetch('russia.json');
    const cities = await response.json();
    return cities;
}

function sortCities(cities) {
    var sortedCities = cities.slice(0);
    sortedCities.sort(function(a,b) {
        return a.distance - b.distance;
    });
    return sortedCities;
}

function showCities(cities, citiesList) {
    cities.forEach(city => {
        let relevantCity = document.createElement('li');
        relevantCity.innerText = city.city;
        citiesList.appendChild(relevantCity);
    });    
}  

async function findRelevantCities() {
    const cities = await getCities();
    let searchedCities = [];        
    const citiesList = document.getElementById('searched-cities');
    citiesList.innerHTML = '';    
    if(this.value != '') {                
        for (let i = 0; i < cities.length; i++) {          
            const levenshteinDistance = calculateLevenshteinDistance(this.value, cities[i].city);
            if(levenshteinDistance < 4) {
                searchedCities.push({
                    'city' : cities[i].city,
                    'distance' : levenshteinDistance
                });
            }        
        }
        const sortedCities = sortCities(searchedCities);
        showCities(sortedCities, citiesList);
    }
}

async function main() {    
    const searchingInput = document.getElementById('search-input');
    searchingInput.addEventListener('input', findRelevantCities);   
}

main();