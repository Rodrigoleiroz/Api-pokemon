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

// adicionarPokemon('picachu', 29, 'eletrico')
// adicionarPokemon('charizard', 54, 'fogo')
// adicionarPokemon('charizard', 20, 'fogo')
// adicionarPokemon('entei', 32, 'eletrico')
// adicionarPokemon('absal', 22, 'noturno')
// adicionarPokemon('articuno', 99, 'gelo')

var deletarPokemon = (nomePraDeletar) => {
    bancoDeDados = bancoDeDados.filter((pokemon) => pokemon.nome != nomePraDeletar)

    //criar um filtro para retornar todos os nomes restantes.
}

deletarPokemon('articuno')

//recebe o nome e devolve os dados do pokemon.
var pegaPokemon = (nomePraPegar) => {
    return bancoDeDados.find((pokemon) => pokemon.nome == nomePraPegar)
}
var pegaPokemonNivel = (nomePraPegar, nivelPraPegar) => {
    return bancoDeDados.find((pokemon) => pokemon.nome == nomePraPegar && pokemon.nivel == nivelPraPegar)
}


console.log('pokemon escolhido', pegaPokemon("charizard"))
console.log('pokemon escolhido', pegaPokemonNivel("charizard", 20))
console.log('pokemon escolhido', pegaPokemonNivel("charizard", 21))

var atualizarPokemon = (nomePraAtualizar, nivelPraAtualizar, tipoPraAtualizar) => {
    var pokemonAntigo = pegaPokemon(nomePraAtualizar)
    deletarPokemon(nomePraAtualizar)
    adicionarPokemon(nomePraAtualizar, nivelPraAtualizar || pokemonAntigo.nivel, tipoPraAtualizar || pokemonAntigo.tipo)
}
console.log("................................................")
console.log('Pokemon escolhido', pegaPokemon("charizard"))
console.log('Atualizando Pokemon', atualizarPokemon("charizard", 82, "dragao"))
console.log('Pokemon Atualizado', pegaPokemon("charizard"))
console.log('Atualizando Pokemon', atualizarPokemon("charizard", undefined, "voador"))
console.log('Pokemon Atualizado', pegaPokemon("charizard"))
console.log("................................................")
console.log('Atualizando Pokemon', atualizarPokemon("charizard", 77, undefined))
console.log('Pokemon Atualizado', pegaPokemon("charizard"))

var save = () => {
    fs.writeFileSync("pokemon.db", JSON.stringify(bancoDeDados));
}
var pegaTudo = () => {
    return bancoDeDados
}

module.exports = {
    adicionarPokemon: adicionarPokemon,
    deletarPokemon,
    atualizarPokemon,
    save,
    pegaTudo
}

// > var objetoParaString=JSON.stringify([1,2,{a:4}])
// undefined
// > JSON.parse("oi")
// Uncaught SyntaxError: Unexpected token o in JSON at position 0
// > JSON.parse(objetoParaString)
// [ 1, 2, { a: 4 } ]
// > JSON.parse(objetoParaString)[0]