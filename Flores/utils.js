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

module.exports = {
    extraiNomesMap,
    extraiNomesForeach,
}