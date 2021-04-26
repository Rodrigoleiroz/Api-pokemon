function soma (a,b){
    return a + b
}

const resultado = soma(3,4) + soma(2,4)
console.log(resultado)
console.log(soma(8,9))

function subtracao (a,b){
    return a - b
}
console.log(subtracao(8,9))

function unitario (valor){
    return valor
}

function calculadora (a, b, operacao) {
    return operacao(a,b)
}

console.log("divisao", calculadora(2, 4, (a,b) => {return a/b}))
console.log(calculadora(2, 4, soma))
console.log(calculadora(2, 4, subtracao))
console.log(calculadora(2, 4, console.log))
console.log(calculadora(2, 4, unitario))
const lista= [7, 2, 34, 4, 5]
console.log ("------------//--------------")

let contador = 0

function logArrayElements(element, index, array) {
    contador = contador + element
    const resultado = soma(element, 7)
    console.log(resultado)
}
console.log("contador antes", contador)
//lista.forEach(logArrayElements)

lista.forEach((element, index, array) => {
    contador = contador + element
    const resultado = soma(element, 7)
    console.log(resultado)
})
console.log("contador depois", contador)

console.log ("------------//--------------")

function validador (item) { 
    return item == 7
}

numeros = [2, 7, 99, 23, 77]

console.log(numeros.find(validador))

const pokemons = [
    {
      "_id": "607f087444b1b6133681097b",
      "name": "Suicune",
      "nivel": 99,
      "tipo": "agua"
    },
    {
      "_id": "607f1385b3e18e2d8007d042",
      "name": "Entei",
      "nivel": 99,
      "tipo": "fogo"
    },
    {
      "_id": "607f13a8599b9c2de0fe0317",
      "name": "Raikou",
      "nivel": 99,
      "tipo": "eletrico"
    },
    {
      "_id": "607f13bc48a2c32e04e2ed91",
      "name": "Moltres",
      "nivel": 99,
      "tipo": "fogo"
    },
    {
      "_id": "607f13e243d3902eabb1c4b2",
      "name": "Zapdos",
      "nivel": 99,
      "tipo": "eletrico"
    },
    {
      "_id": "607f13f4aebd722f342c94b9",
      "name": "Articuno",
      "nivel": 99,
      "tipo": "gelo"
    },
    {
      "_id": "607f20a46c4d2984820d8570",
      "name": "Mew",
      "nivel": 99,
      "tipo": "psiquico"
    }
  ]
function pegaPokemon (pokemon) {
    const eh_o_raikou = pokemon.name == "Raikou"
    return eh_o_raikou
}
  console.log(pokemons.find(pegaPokemon))

  function pegaPokemon2 (pokemon) {
    const eh_o_raikou = pokemon.tipo == "eletrico"
    return eh_o_raikou
}
  console.log(pokemons.filter(pegaPokemon2))