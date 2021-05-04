const utils = require('./utils');
const services = require('./services');

const main = async () => {
  try {
    const listaComTodosOsPokemons = await services.pegaTodosOsPokemons();
    console.log('lista todos pokemons', listaComTodosOsPokemons);
    const listaDosNomesDosPokemons = utils.extraiNomesPokemons(listaComTodosOsPokemons);
    const listaDasRegioes = await services.ListaTodasAsRegioes();
    console.log(listaDasRegioes);
    console.time('rola');
    const resultado = await services.pegaDadosParalelos([55, 110, 165, 823]);
    console.timeEnd('rola');
    const pegandoUrl = utils.pegandoUrlComplemento(resultado);
    const pegaDetalhesPeloNome = utils.detalhesPokemonPeloNome(listaComTodosOsPokemons, 'suicune');
    console.log(pegaDetalhesPeloNome);

    return console.log('Tudo certo');
  } catch (error) {
    return console.log('Deu ruim manim');
  }
};

main();

// const tratandoErros = (teste) => {
//   try {
//     const maisTeste = teste.split('/');
//     return maisTeste;
//   } catch (error) {
//     console.log('deu ruim');
//     return "ruiiiiim"
//     throw new Error("DEU MERDA IRMAO")
//   }
// };
// try {
//     let TestandoTratandoErros = tratandoErros(03041990);
//     console.log(TestandoTratandoErros);
// } catch (error) {
//     console.log(error)
// }
