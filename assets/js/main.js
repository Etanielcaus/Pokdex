const offset = 0;
const limit = 10;
const URL = 'https://pokeapi.co/api/v2/pokemon?limit=${limit}&offset=${offset}';

function convertPokemonToLI (pokemon){
    return `
    <li class="pokemon">
    <span class="number">#001</span>
    <span class="name">${pokemon.name}</span>
    <div class="detail">
        <ol class="types">
            <li class="type">grass</li>
            <li class="type">poison</li>
        </ol>

        <img src="/assets/img/poke_1esboco.gif" alt="${pokemon.name}">
    </div>
    </li>
    `
}

const pokemonList = document.getElementById("pokemonList")

// Ele faz o request de forma assíncrona, o código está puxando corretamente os Pokemons
fetch(URL)
    .then((response) => response.json())
    .then((jsonBody) => jsonBody.results)
    .then((pokemons) => {

        for (let i = 0; i < pokemons.length; i++) {
            const pokemon = pokemons[i]
            pokemonList.innerHTML += convertPokemonToLI(pokemon)
        }
    })
    .catch((error) => console.log(error))
