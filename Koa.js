const axios = require('axios');
var koa = require("koa");
var Router = require('koa-router');


var router = new Router();
var app = new koa();

router.get('/', (ctx, next) => {
    ctx.body = "Tudo bem";
});



router.get('/pokemon', async(ctx, next) => {
    // Pegar Lista dos Pokemon
    const response = await axios.get('https://pokeapi.co/api/v2/pokemon?limit=1118');
    
    // Definir Results
    var results = response.data.results;

    // Extrair nomes
    // var pokeNames = [];
    // for (pokemon of results) {
    //     pokeNames.push(pokemon.name)       
    // }

    var mapResults = results.map ((pokemon) => pokemon.name)
    console.log("Resultado do map", mapResults);

    // Devolver resposta para o usuario
    ctx.body = mapResults.
});


app
    .use(router.routes())
    .use(router.allowedMethods());

app.listen(3000, function() {
    console.log(("Server na porta 3000"));
});

/*
criar um endpoint que retorne pokemons aleatorios;
 ''    ''     ''    ''    ''    todo tipo de pokemons possiveis;
 ''    ''     ''    ''    ''    todo tipo de pokemons possiveis;
 ''    ''     ''    ''    ''    busca pokemon pelo nome e o nome pode estar incompleto;
 todos os endpoints devem retornar alguns dados dos pokemons com as chaves do json em portugues ( nome, habilidades, games)


*/