import { pokeData } from './pokemon.js';
import { randomPoke } from './utils.js';
import { encounterPokemon } from './local-storage-utils.js';


export function generateThreePokemon() {
    let randomNumber1 = randomPoke();
    let randomNumber2 = randomPoke();
    let randomNumber3 = randomPoke();

    while (
        randomNumber1 === randomNumber2
        || randomNumber2 === randomNumber3
        || randomNumber1 === randomNumber3
    ) {
        randomNumber1 = randomPoke();
        randomNumber2 = randomPoke();
        randomNumber3 = randomPoke();
    }

    // return [randomNumber1, randomNumber2, randomNumber3];
    // return [poke1, poke2, poke3];
}

const poke1 = pokeData[randomNumber1];
const poke2 = pokeData[randomNumber2];
const poke3 = pokeData[randomNumber3];

encounterPokemon(poke1);
encounterPokemon(poke2);
encounterPokemon(poke3);

// return [poke1, poke2, poke3];
// }


function getRandomIndex() {
    return Math.floor(Math.random() * pokeData.length);
}



