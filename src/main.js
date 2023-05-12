//import { example } from './data.js';
import countries from './data/countries/countries.js';

const exibirFlagsDiv = document.getElementById('exibirFlags');
console.log(countries)
const flagsCountries = countries.countries.map(country => {
    const flagsDiv = document.createElement('div');
    const nameElement = document.createElement('h2');
    const flagElement = document.createElement('img');

    nameElement.textContent = country.name.common;
    flagElement.src = country.flags.png;
    


    flagsDiv.appendChild(nameElement);
    flagsDiv.appendChild(flagElement);

    return flagsDiv;
});

flagsCountries.forEach(flag => {
    exibirFlagsDiv.appendChild(flag);
});












