import { filtroAz, filtroCont } from './data.js';
import countries from './data/countries/countries.js';


function exibirPaises(arr) {
  let exibirFlagsDiv = document.getElementById('exibirFlags');
  exibirFlagsDiv.innerHTML = '';

  let flagsCountries = arr.map(country => {
    let flagsDiv = document.createElement('div');
    let nameElement = document.createElement('h3');
    let flagElement = document.createElement('img');
    let languagesElement = document.createElement('p');
    let capitalElement = document.createElement('p');
    let populationElement = document.createElement('p');
    flagElement.classList.add('imgBand');
    nameElement.textContent = country.name.common;
    flagElement.src = country.flags.png;

    // Verificar se a propriedade "languages" existe e é um objeto
    if (country.languages && typeof country.languages === 'object') {
      // Obter os valores das linguagens e unir em uma string separada por vírgula
      const languages = "Idioma: " + Object.values(country.languages).join(', ');
      languagesElement.textContent = languages;
    } else {
      // Caso a propriedade "languages" não exista ou não seja um objeto, exibir uma mensagem de ausência de dados
      languagesElement.textContent = 'N/A';
    }

    capitalElement.textContent = "Capital: " + country.capital;
    populationElement.textContent = "População: " + country.population.toLocaleString('pt-BR');

    flagsDiv.appendChild(nameElement);
    flagsDiv.appendChild(flagElement);
    flagsDiv.classList.add('bands');
    flagsDiv.appendChild(languagesElement);
    flagsDiv.appendChild(capitalElement);
    flagsDiv.appendChild(populationElement);

    return flagsDiv;
  });

  flagsCountries.forEach(flag => {
    exibirFlagsDiv.appendChild(flag);
  });
}

// Chamar a função ao carregar a página
window.addEventListener('load', function () {
  exibirPaises(countries.countries);
});

// Adicionar o evento de mudança ao select
let filtroOp = document.getElementById('opcao');
filtroOp.addEventListener('change', function () {
  let op = filtroOp.value;
  var filteredCountries = filtroCont(countries.countries, op);
  exibirPaises(filteredCountries);
});

let elementosDeOrdenacao = document.getElementById('az');
elementosDeOrdenacao.addEventListener('change', function () {
  let ord = elementosDeOrdenacao.value
  let op = filtroOp.value;
  let resultado = filtroAz(filtroCont(countries.countries, op), ord);
  exibirPaises(resultado);
});



