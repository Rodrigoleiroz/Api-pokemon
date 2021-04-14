const axios = require('axios');
var koa = require("koa");
var Router = require('koa-router');


var router = new Router();
var app = new koa();

router.get('/', (ctx, next) => {
    ctx.body = "Tudo bem";
});



router.get('/pokemon', async(ctx, next) => {
    const parametros = ctx. query.numero
    if (!parametros) { 
        ctx.body="Nao existe";
        ctx.status=400
        return 
    }
    //Filtrando com find pokemons de um numero especifico.

    var pokemon = results.find((pokemon)=>{ return pokemon.url.includes(parametros) })

     // Devolver resposta para o usuario
     ctx.body = pokemon

});

router.get('/pokemon/name', (ctx, next) => {
    var mapResults = results.map ((pokemon) => pokemon.name)
    ctx.body = mapResults
}); 



    
   


app
    .use(router.routes())
    .use(router.allowedMethods());

app.listen(3000, function() {
    console.log(("Server na porta 3000"));
});


//----------------------- Comentarios---------------------------

// Pegar Lista dos Pokemon
const response = await axios.get('https://pokeapi.co/api/v2/pokemon?limit=1118');
    
// Definir Results
var results = response.data.results;

// Extrair nomes
// var pokeNames = [];
// for (pokemon of results) {
//     pokeNames.push(pokemon.name)       
// }

//Filtrando pela primeira letra do nome "P"
var filtroLetra = mapResults.filter((name)=>{ return name[0]=="p"})


/*
criar um endpoint que retorne pokemons aleatorios;
 ''    ''     ''    ''    ''    todo tipo de pokemons possiveis;
 ''    ''     ''    ''    ''    todo tipo de pokemons possiveis;
 ''    ''     ''    ''    ''    busca pokemon pelo nome e o nome pode estar incompleto;
 todos os endpoints devem retornar alguns dados dos pokemons com as chaves do json em portugues ( nome, habilidades, games)


*/