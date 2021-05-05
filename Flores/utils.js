const extraiNomesMap = (listaDeFlores) => {
    return listaDeFlores.map((flor) => flor.name)
};

const extraiNomesForeach = (listaDeFlores) => {
    let todosOsNomes = []
    listaDeFlores.forEach((flor) => {
        todosOsNomes.push(flor.name)
    })
    return todosOsNomes
};

const buscaPeloNome = (flowerlist, nomeParaProcurar) => {
    return flowerlist.find((flor) => flor.name.toLowerCase().includes(nomeParaProcurar.toLowerCase()))
}

const buscaNomeOuCategoria = (listaDeFlores, parteNomeOuCategoria) => {
    return listaDeFlores.filter((flor) => {
        const achouNome = flor.name.toLowerCase().includes(parteNomeOuCategoria.toLowerCase())
        const achouCategoria = flor.category.toLowerCase().includes(parteNomeOuCategoria.toLowerCase())
        return achouNome || achouCategoria
    });

};

const totalDosPrecos = (listaDeFlores) => {
    let total = 0
    listaDeFlores.forEach((flor) => {

        let preco = flor.price;
        total = total + preco;
    })
    return total
};

const achaPeloId = (listaDeFlores, id) => {
    return listaDeFlores.find((flor) => flor.productId == id);
}

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


module.exports = {
    extraiNomesMap,
    extraiNomesForeach,
    buscaPeloNome,
    buscaNomeOuCategoria,
    totalDosPrecos,
    achaPeloId,
    agrupaCategorias,
}