const axios = require('axios');
const cache = require('../Redis/cache');

const baseURL = 'https://pokeapi.co/api/v2';
const client = axios.create({ baseURL });

const pegaTodosOsPokemons = async () => {
  const respostaDoAxios = await client.get('/pokemon', { params: { limit: 1118 } });
  return respostaDoAxios.data.results;
};

const pegaDadosParalelos = async (listaDeNumerosDePokemon) => {
  const chaveRedis = 'Pokemons';
  const cacheSalvo = await cache.pegaCache(chaveRedis);
  if (cacheSalvo) {
    return cacheSalvo;
  }
  const arrayDePromessasDetalhesPokemon = listaDeNumerosDePokemon.map(async (numeroDoPokemon) => {
    const resposta = await client.get(`/pokemon/${numeroDoPokemon}`);
    const resposta2 = await client.get(resposta.data.species.url);
    const compilado = resposta.data;
    compilado.species = resposta2.data;
    return compilado;
  });

  const arrayPokemon = await Promise.all(arrayDePromessasDetalhesPokemon);
  await cache.salvaCache(chaveRedis, arrayPokemon);
  return arrayPokemon;
};

const listaTodasAsRegioes = async () => {
  const respostaDoAxios = await client.get('/region');
  return respostaDoAxios.data.results;
};

module.exports = {
  pegaTodosOsPokemons,
  pegaDadosParalelos,
  listaTodasAsRegioes,

};
