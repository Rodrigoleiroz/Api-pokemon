const fs = require("fs");
const flowerUtils = require('./utils');

const jsonData = fs.readFileSync("./flores/data.json", "utf8");
const data = JSON.parse(jsonData);



//chamadas

const nomes = flowerUtils.extraiNomesForeach(data.flowerlist);
const nomes2 = flowerUtils.extraiNomesMap(data.flowerlist);
const buscaNome = flowerUtils.buscaFloresPeloNome(data.flowerlist, "cAc")

console.log("Todos os nomes", resultadoTodosNomes)







let buscaPorNomeOuCategoria = buscaFlores(data.flowerlist, "red")


//funcao que recebe uma lista de flores e retorna o preço total



const totalDosPrecos = (listaDeFlores) => {
    let total = 0

    listaDeFlores.forEach((flor) => {

        let preco = flor.price;
        total = total + preco;
    })
    return total
}
let totalPrecos = totalDosPrecos(data.flowerlist)
let totalPrecos2 = totalDosPrecos(data.flowerlist)





// funcao que pega uma só flor baseada no ID

const achaPeloId = (listaDeFlores, id) => {

    return listaDeFlores.find((flor) => flor.productId == id);

}
var buscandoPeloId = achaPeloId(data.flowerlist, 33)
console.log(buscandoPeloId)

// funcao que retorna as flores agrupadas por categorias

const agrupaCategorias = (listaDeFlores) => {

    var categorias = {};

    for (var i = 0; i < listaDeFlores.length; ++i) {
        var currentCategory = listaDeFlores[i].category;
        if (categorias[currentCategory] == undefined) {
            categorias[currentCategory] = [];
        }
        categorias[currentCategory].push(listaDeFlores[i].name)

    }
    return categorias;
}

var d = agrupaCategorias(data.flowerlist)