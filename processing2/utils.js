const extraiNomesPokemons = (listaDePokemons) => listaDePokemons.map((pokemons) => pokemons.name);

// eslint-disable-next-line max-len
const buscaParteDoNome = (listaDeNomes, stringParteNome) => listaDeNomes.filter((pokemon) => pokemon.toLowerCase().includes(stringParteNome.toLowerCase()));

// eslint-disable-next-line max-len
const pegandoUrlComplemento = (arrayDePokemons) => arrayDePokemons.map((informacaoDoPokemon) => informacaoDoPokemon.species.url);

// eslint-disable-next-line max-len
const detalhesPokemonPeloNome = (listaDePokemon, nomeDoPokemon) => listaDePokemon.filter((pokemon) => pokemon.name.toLowerCase() === nomeDoPokemon);

module.exports = {
  extraiNomesPokemons,
  buscaParteDoNome,
  pegandoUrlComplemento,
  detalhesPokemonPeloNome,

};
