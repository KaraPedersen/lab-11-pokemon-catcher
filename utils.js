import { pokeData } from './pokemon.js';

export function findById(array, id) {
    for (let item of array) {
        if (item.id === id) {
            return item;
        }
    }
}

// export function randomPoke(array) {

//     const pokeNumber = Math.floor(Math.random() * array.length);

//     return array[pokeNumber];
// }

export function findByPokemonName(name) {
    return pokeData.find(poke => name === poke.pokemon);
}
