console.log('I am here');
import { getPokedex } from '../local-storage-utils.js';
import { pokeData } from '../pokemon.js';



const button = document.getElementById('pokemonHome');

const table = document.querySelector('table');


var ctx = document.getElementById('myChart').getContext('2d');

const names = [];
const captured = [];
const encountered = [];
const resultsPokedex = getPokedex();


for (let pokemon of resultsPokedex) {
    names.push(pokemon.id);
    captured.push(pokemon.captured);
    encountered.push(pokemon.encountered);
}



var myChart = new Chart(ctx, { // eslint-disable-line
    type: 'bar',
    data: {
        labels: names,
        datasets: [{
            label: 'Pokemon Captured',
            data: captured,
            backgroundColor: 'pink',
            borderColor: 'red',
            borderWidth: 3
        },
        {
            label: 'Pokemon Encountered',
            data: encountered,
            backgroundColor: 'lightblue',
            borderColor: 'steelblue',
            borderWidth: 3
        }
        ]
    },
    options: {
        scales: {
            y: {
                beginAtZero: false
            }
        }
    }
});

export function renderTable() {
    const table = document.querySelector('tbody');
    const pokedex = getPokedex();

    for (let i = 0; i < pokedex.length; i++) {
        const result = pokedex[i];
        const tr = renderLineItems(result);
        table.append(tr);

    }
}
renderTable();

export function renderLineItems(pokedex) {
    const tr = document.createElement('tr');
    const tdPokemon = document.createElement('td');
    const tdCaptured = document.createElement('td');
    const tdEncountered = document.createElement('td');

    tdPokemon.textContent = pokedex.id;
    tdCaptured.textContent = pokedex.captured;
    tdEncountered.textContent = pokedex.encountered;

    tr.append(tdPokemon, tdCaptured, tdEncountered);

    return tr;
}

table.append();

button.addEventListener('click', () => {

    alert('Yay, let\'s go again!');



    localStorage.clear();

    window.location = '/';

});
