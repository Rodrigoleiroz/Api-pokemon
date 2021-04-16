// Import the filesystem module
const fs = require('fs');
var dataBaseCrua = fs.readFileSync("pokemon.db", "utf8")
var bancoDeDados = JSON.parse(dataBaseCrua) || []



console.log('antes', bancoDeDados)

var adicionarPokemon = (nome, nivel, tipo) => {
    var pokemon = {
        nome: nome,
        nivel: nivel,
        tipo: tipo
    }

    // var pokemon2 = { 
    //     nome, 
    //     nivel, 
    //     tipo, 
    //     id : 1,
    //     doido: true,  
    // }

    bancoDeDados.push(pokemon)
}


var deletarPokemon = (nomePraDeletar) => {
    bancoDeDados = bancoDeDados.filter((pokemon) => pokemon.nome != nomePraDeletar)

    //criar um filtro para retornar todos os nomes restantes.
}



//recebe o nome e devolve os dados do pokemon.
var pegaPokemon = (nomePraPegar) => {
    return bancoDeDados.find((pokemon) => pokemon.nome == nomePraPegar)
}
var pegaPokemonNivel = (nomePraPegar, nivelPraPegar) => {
    return bancoDeDados.find((pokemon) => pokemon.nome == nomePraPegar && pokemon.nivel == nivelPraPegar)
}

var atualizarPokemon = (nomePraAtualizar, nivelPraAtualizar, tipoPraAtualizar) => {
    var pokemonAntigo = pegaPokemon(nomePraAtualizar)
    deletarPokemon(nomePraAtualizar)
    adicionarPokemon(nomePraAtualizar, nivelPraAtualizar || pokemonAntigo.nivel, tipoPraAtualizar || pokemonAntigo.tipo)
}

var save = () => {
    fs.writeFileSync("pokemon.db", JSON.stringify(bancoDeDados));
}
var pegaTudo = () => {
    return bancoDeDados
}

var pegaTodosOsNomes = () => {
   return bancoDeDados.map((pokemon) => pokemon.nome)
}


module.exports = {
    //Essa e a forma equivalente a 
    adicionarPokemon: adicionarPokemon,
    //essas a baixo
    deletarPokemon,
    atualizarPokemon,
    save,
    pegaTudo,
    pegaPokemon,
    pegaTodosOsNomes
}