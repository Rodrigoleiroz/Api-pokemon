// funcao que le o arquivo e transforma em JSON

//'------------Sync------------'
let fs = require("fs");

let jsonData = fs.readFileSync("./processing1/data.json", "utf8");
console.log(jsonData);

const data = JSON.parse(jsonData)

// funcao que extrai todos os nome
//'-----------------map-------------------'

let ExtrairTodosOsNomes = (listaDeFlores) => { 

    return listaDeFlores.map((flor) => flor.name )


    // return listaDeFlores.map(item => item.name) 
    // return listaDeFlores.map(extraiNome) 
}

var resultadoTodosNomes = ExtrairTodosOsNomes(data.flowerlist)
//'-----------------forEach---------------'
// let todosOsNomes = []

// floresLista.flowerlist.forEach ((flor) => {
//     let nomes = flor.name;
//     todosOsNomes.push(nomes)
//     return nomes
    
// })

console.log("Todos os nomes", resultadoTodosNomes)

// funcao que busca por flores dado um pedaço do nome ou descriçao
var buscaFloresPeloNome = (flowerlist, nomeParaProcurar) => {
    return flowerlist.find((flor) => flor.name.toLowerCase().includes(nomeParaProcurar.toLowerCase()))
}

var resultado = buscaFloresPeloNome(data.flowerlist, "opu")

console.log("sera que funfo", resultado);

// Busca mais generica.

let pedaco1 = "cacti"

const busca = data.flowerlist.filter((flor) => {
    //Busca no nome.
    const achouNome =  flor.name.toLowerCase().includes(pedaco1.toLowerCase())
    //Busca na descricao.
    const achouCategoria =  flor.category.toLowerCase().includes(pedaco1.toLowerCase())

    //Retorna se achou ou nao.
    return achouNome || achouCategoria
});

console.log("Busca Generica", busca);


//funcao que recebe uma lista de flores e retorna o preço total

let total = 0
let nomes = []

data.flowerlist.forEach ((flor ) => {
    let preco = flor.price;
    total = total + preco
 
    let nome = flor.name;
    nomes.push(nome)

})

console.log("Total", total)
console.log("Nomes", nomes)




// funcao que pega uma só flor baseada no ID
let id = 34
const achaPeloId = data.flowerlist.find((flor) =>  flor.productId == id );

console.log(achaPeloId);

// funcao que retorna as flores agrupadas por categorias

const agrupaCategorias = (listaDeFlores) => {

function dictionary(list) {
    var map = {};
        
    for (var i = 0; i < list.length; ++i) {
    var category = list[i].category;
    if (!map[category])
        map[category] = [];
     map[category].push(list[i].name)

    }
    return map;
}

    var d = dictionary(list)

