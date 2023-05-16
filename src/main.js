import { filtroAz, filtroCont } from './data.js';
import countries from './data/countries/countries.js';

function exibirPaises(arr) {
  let exibirFlagsDiv = document.getElementById('exibirFlags');
  exibirFlagsDiv.innerHTML = '';

  let flagsCountries = arr.map(country => {
    let flagsDiv = document.createElement('div');
    let nameElement = document.createElement('h3');
    let flagElement = document.createElement('img');
    flagElement.classList.add('imgBand');
    nameElement.textContent = country.name.common;
    flagElement.src = country.flags.png;

    flagsDiv.appendChild(nameElement);
    flagsDiv.appendChild(flagElement);
    flagsDiv.classList.add('bands');

    return flagsDiv;
  });

  flagsCountries.forEach(flag => {
    exibirFlagsDiv.appendChild(flag);
  });
}

// Chamar a função ao carregar a página
window.addEventListener('load', function() {
  exibirPaises(countries.countries);
});

// Adicionar o evento de mudança ao select
let filtroOp = document.getElementById('opcao');
filtroOp.addEventListener('change', function() {
  let op = filtroOp.value;
  let filteredCountries = filtroCont(countries.countries, op);
  exibirPaises(filteredCountries);
});

let elementosDeOrdenacao = document.getElementById('az');
elementosDeOrdenacao.addEventListener('change', function() {
let ord = elementosDeOrdenacao.value
  let resultado = filtroAz(countries.countries, ord);
  exibirPaises(resultado);
});




