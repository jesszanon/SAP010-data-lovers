import { filtroAz, filtroCont, exibirBandeiras} from './data.js';
import countries from './data/countries/countries.js';

exibirBandeiras(countries.countries)

let filtroOp = document.getElementById('opcao')
filtroOp.addEventListener('change', ()=>{
   
    
    let op = filtroOp.value

 
exibirBandeiras(filtroCont(countries.countries, op))

});










