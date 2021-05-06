const cheerio = require('cheerio');


const axios = require('axios');
const main = async() => {
    const html = await axios.get('https://www.imdb.com/title/tt5884052');
    const $ = cheerio.load(html.data);
    const respotaTitulo = $('.cast_list tbody')
    const arrayCast = respotaTitulo[0].children
    const primeiro = arrayCast[2]
    const nome = primeiro.children[3].children[1].children[0].data
    const segundo = arrayCast[6]
    const nome2 = segundo.children[3].children[1].children[0].data
    const terceiro = arrayCast[10]
    const nome3 = terceiro.children[3].children[1].children[0].data
    const resultadoMap = arrayCast.map((linha) => {
        try {
            return linha.children[3].children[1].children[0].data
        } catch (error) {
            return "-"
        }
    });
    console.log(resultadoMap);
    const listaDeNomes = []
    arrayCast.map((linha) => {
        try {
            const nome = linha.children[3].children[1].children[0].data
            listaDeNomes.push(nome);
        } catch (error) {
            //  listaDeNomes.push(".|.")
        }

    });
    console.log(listaDeNomes);
};
main()