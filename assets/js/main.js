const offset = 0;
const limit = 10;
const URL = 'https://pokeapi.co/api/v2/pokemon?limit=$(limit)&offset=$(offset)';

// Ele faz o request de forma assíncrona, o código está puxando corretamente os Pokemons
fetch(URL)
    .then((response) => response.json())
    .then((jsonBody) => console.log(jsonBody))
    .catch((error) => console.log(error))
