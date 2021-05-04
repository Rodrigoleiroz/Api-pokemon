const axios = require('axios');

const baseURL = 'https://pokeapi.co/api/v2';
const client = axios.create({ baseURL });

const pegaTodosOsPokemons = async () => {
  try {
    const respostaDoAxios = await client.get('/pokemon', { params: { limit: 100 } });
    return respostaDoAxios.data.results;
  } catch (error) {
    console.log(error);
  }
};

const pegaDadosParalelos = async (listaDeNumerosDePokemon) => {
  const arrayDePromessasDetalhesPokemon = listaDeNumerosDePokemon.map(async (numeroDoPokemon) => {
    const resposta = await client.get(numeroDoPokemon.url);
    return resposta.data;
  });
  const arrayPokemon = await Promise.all(arrayDePromessasDetalhesPokemon);
  return arrayPokemon;
};
// ----------------------------
const baseMaior50 = (pokemon) => pokemon.base_experience > 50;
const alturaMaior11 = (pokemon) => pokemon.height > 11;
const PesoMaior100 = (pokemon) => pokemon.weight > 100;

const main = async () => {
  console.time("execucaoPokemon")
  const allPokemon = await pegaTodosOsPokemons();
  const allPokemonData = await pegaDadosParalelos(allPokemon);

  const resultado = allPokemonData
    .filter((pokemon) => pokemon.base_experience > 50)
    .filter(baseMaior50);
  // .filter((pokemon) => baseMaior50(pokemon) )
  // .filter((pokemon) => { return baseMaior50(pokemon) })

  console.log(resultado);

  const resultado2 = allPokemonData
    .filter(baseMaior50).filter((pokemon) => pokemon.height > 11);

  console.log(resultado2);

  const baseOuHeight = allPokemonData
    .filter(baseMaior50)
    .filter(alturaMaior11)
    .filter((pokemon) => pokemon.base_experience >= 240 || pokemon.height >= 20);

  console.log(baseOuHeight);

  const dicionarioPokemon = allPokemonData.map((pokemon) => ({
    nome: pokemon.name,
    nivel_base: pokemon.base_experience,
    altura: pokemon.height,
    movimentos: pokemon.moves.map((move) => move.move.name),
    peso_maior_100kg: pokemon.weight > 100,
  }));
  console.timeEnd("execucaoPokemon")
  console.log(dicionarioPokemon);
};

main();
