console.log('I am here');
import { getPokedex } from '../local-storage-utils.js';
// import { pokeData } from '../pokemon.js';

// import { findByPokemonName } from '../utils.js';


const button = document.getElementById('pokemonHome');

const table = document.querySelector('table');
const pokedex = getPokedex();

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
