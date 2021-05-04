const fs = require ('fs');
const axios = require ('axios');
const baseURL = ("https://kitsu.io/api/edge");

const client = axios.create({baseURL})


const todoslistaDeAnimes = async () => {
    respostaAxiosPromessa = await client.get("/anime")
        return respostaAxiosPromessa.data.data
}

const pedidosEmParalelo = async (listaDeAnimes) => {
    var promessaInfoAnimes = listaDeAnimes.map( async (animeDaLista) => {
        const respostaPromessabGoogle = await client.get ("http://google.com/search?q=" + animeDaLista.attributes.titles.en);
        const respostao = {
            google: respostaPromessabGoogle.data,
            anime: animeDaLista
           

        }
       return respostao

    });

    const arrayDeAnimes = await Promise.all(promessaInfoAnimes)
        return arrayDeAnimes
}

const main = async () => {
    let respostaAnimes = await todoslistaDeAnimes();
    console.log(respostaAnimes)
    let respostaPedidoEmParalelo = await pedidosEmParalelo(respostaAnimes);
    console.log(respostaPedidoEmParalelo);



}

main()
//attributes.titles