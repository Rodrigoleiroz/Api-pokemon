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



const buscaFlores = (listaDeFlores, parteNomeOuCategoria) => { 
    return listaDeFlores.filter((flor) => {
        const achouNome =  flor.name.toLowerCase().includes(parteNomeOuCategoria.toLowerCase())
        const achouCategoria =  flor.category.toLowerCase().includes(parteNomeOuCategoria.toLowerCase())
            return achouNome || achouCategoria
    });
    
}

let buscaPorNomeOuCategoria = buscaFlores (data.flowerlist, "red")


//funcao que recebe uma lista de flores e retorna o preço total



const totalDosPrecos = (listaDeFlores) => { 
    let total = 0
    
    listaDeFlores.forEach ((flor ) => { 

        let preco = flor.price;
        total = total + preco;
    })
    return total
}
let totalPrecos = totalDosPrecos(data.flowerlist)
let totalPrecos2 = totalDosPrecos(data.flowerlist)





// funcao que pega uma só flor baseada no ID

const achaPeloId = (listaDeFlores, id) => {

  return listaDeFlores.find((flor) => flor.productId == id );
        
}
var buscandoPeloId = achaPeloId (data.flowerlist, 33)
console.log(buscandoPeloId)

// funcao que retorna as flores agrupadas por categorias

const agrupaCategorias = (listaDeFlores) => {

    var categorias = {};
        
    for (var i = 0; i < listaDeFlores.length; ++i) {
        var currentCategory = listaDeFlores[i].category;
        if (categorias[currentCategory] == undefined){
            categorias[currentCategory] = [];
        }
        categorias[currentCategory].push(listaDeFlores[i].name)

    }
    return categorias;
}

    var d = agrupaCategorias(data.flowerlist)