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

const buscaFloresPeloNome = (flowerlist, nomeParaProcurar) => {
    return flowerlist.find((flor) => flor.name.toLowerCase().includes(nomeParaProcurar.toLowerCase()))
}


module.exports = {
    extraiNomesMap,
    extraiNomesForeach,
    buscaFloresPeloNome,

}