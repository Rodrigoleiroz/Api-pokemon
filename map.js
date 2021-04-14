var pokemonlist = ["picachu", "entei", "suicune", "raikou"];

for (pokemon of pokemonlist) {
    console.log(pokemon)
};

var pokemonDataList = [{
        nome: "entei",
        tipo: "fogo"
    },
    {
        nome: "suicune",
        tipo: "agua"
    },
    {
        nome: "raikou",
        tipo: "eletrico"
    }
]
var pokenames = [

]
for (pokemon of pokemonDataList) {
    pokenames.push(pokemon.nome)
};

console.log(pokenames)

var getPokemonName = (pokemon) => {
    return pokemon.nome
}
var transformaPokemon = (pokemon) => {
    return {
        nomedjhfieonfe: pokemon.nome,
        tipodjfidhfide: pokemon.tipo
    }
}

console.log(getPokemonName(pokemonDataList[0]));

console.log(getPokemonName(pokemonDataList[1]));

console.log(getPokemonName(pokemonDataList[2]))

var mapResults = pokemonDataList.map((pokemon) => pokemon.nome)
    // var mapResults = pokemonDataList.map(getPokemonName)
console.log("resultado do map", mapResults)