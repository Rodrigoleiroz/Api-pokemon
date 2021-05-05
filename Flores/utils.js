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

}


module.exports = {
    extraiNomesMap,
    extraiNomesForeach,
    buscaPeloNome,
    buscaNomeOuCategoria,

}