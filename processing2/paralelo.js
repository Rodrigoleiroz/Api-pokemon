// cricar funcao que recebe um nome e busca no google
const axios = require("axios")
const buscaNomeNoGoogle = async (nomeRecebido) => {
    let resposta = await axios.get("https://google.com/search?q=" + nomeRecebido)
    let resposta2 = await axios.get("https://google.com/search?q=" + nomeRecebido)
    return {
        nome: nomeRecebido,
        data: resposta.data,
        data2: resposta2.data,
    }
    
}
const main = async () => {

    var fdp = await buscaNomeNoGoogle("Eliel")
    console.log(fdp)

    const nomes = ["pedro", "rodrigo", "luisa"]
    const arrayDePromessas = nomes.map((nome) => buscaNomeNoGoogle(nome))
    const respostas = await Promise.all(arrayDePromessas)
    console.log(respostas)
}


main ()
