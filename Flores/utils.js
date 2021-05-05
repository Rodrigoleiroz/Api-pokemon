const extrairTodosOsNomes = (listaDeFlores) => {

    return listaDeFlores.map((flor) => flor.name)
};

const extraiNomes = (listaDeFlores) => {
    let todosOsNomes = []
    listaDeFlores.forEach((flor) => {
        todosOsNomes.push(flor.name)
    })
    return todosOsNomes
};

module.exports = {
    extrairTodosOsNomes,
    extraiNomes,
}