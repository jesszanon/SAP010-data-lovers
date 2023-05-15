// estas funciones son de ejemplo
/* 
import countries from "./data/countries/countries";

export const example = () => {
  return 'example';
};

export const anotherExample = () => {
  return 'OMG';
};
 */



function filtroAz(arr, opcao) {
  if (opcao == 'az'){
    return arr.sort((a, b) => {
      if (a.name.common < b.name.common) {
          return -1;
      }
      if (a.name.common > b.name.common) {
          return 1;
      }
      return 0;
  })
}

else if(opcao == 'za'){
  return arr.sort((a, b) => {
    if (a.name.common > b.name.common) {
      return -1;
    } 
    if (a.name.common < b.name.common) {
      return 1;
    } 
      return 0;
    });
    } else{arr}
  }


  function filtroCont(arr, opcao) {
    const america = [];
    const europe = [];
    const asia = [];
    const africa = [];
    const oceania = [];
    const antarctica = [];

    for (let i = 0; i < arr.length; i++) {
      if (arr[i].continents == "America") {
        america.push(arr[i]);
      }
      else if (arr[i].continents == "Europe") {
        europe.push(arr[i]);
      }
      else if (arr[i].continents == "Asia") {
        asia.push(arr[i]);
      }else if (arr[i].continents == "Africa") {
        africa.push(arr[i]);
      }else if (arr[i].continents == "Oceania") {
        oceania.push(arr[i]);
      }
      else  {
        antarctica.push(arr[i]);
      }
  }
  if(opcao == 'Oceania'){
    return oceania
  }
  else if (opcao == 'Ásia'){
    return asia
  }
  else if (opcao == 'Europa'){
    return europe
  }
  else if (opcao == 'América'){
  return america
}
else if (opcao == 'África'){
  return africa
}
else if (opcao == 'Antártida'){
  return antarctica
}
else {
  return arr
}
}

function exibirBandeiras(op) {
  let exibirFlagsDiv = document.getElementById('exibirFlags');
  exibirFlagsDiv.innerHTML = '';

  let flagsCountries = op.map(country => {
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



export {filtroAz, filtroCont, exibirBandeiras}