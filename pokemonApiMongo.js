const getClient = require("./mongo")
//const usandoPokemons = require ("./mongo")
const axios = require('axios');

const axios = require('axios');
var koa = require("koa");
var Router = require('koa-router');
const bodyParser = require('koa-bodyparser');
const db = require("./DbPokemon");



const app = new koa();
var router = new Router();
app.use(bodyParser())


// -------------------- ROTAS



router.get('/pokemon', async(ctx, next) => {
    ctx.body = db.pegaTodosOsNomes()
  });

  router.get('/pokemon/:nome', async(ctx, next) => {
    var nomePokemon = ctx.params.nome
    ctx.body = db.pegaPokemon(nomePokemon)
  });



router.post('/pokemon', async(ctx, next) => {
    var novoPokemon = ctx.request.body
    ctx.body = db.adicionarPokemon(novoPokemon.nome, novoPokemon.nivel, novoPokemon.tipo);
    ctx.body = db.save()
    ctx.body = ctx.request.body;
});

router.patch('/pokemon', async(ctx, next) => {
  var pokemonAtualizado = ctx.request.body
  ctx.body = db.atualizarPokemon(pokemonAtualizado.nome, pokemonAtualizado.nivel, pokemonAtualizado.tipo);
  ctx.body = db.save()
  ctx.body = ctx.request.body;
});

router.delete('/pokemon', async(ctx, next) => {
  var pokemonParaDeletar = ctx.request.body
  ctx.body = db.deletarPokemon(pokemonParaDeletar.nome);
  ctx.body = db.save()
  ctx.body = ctx.request.body;
});

async function rodar() {
    const client = await getClient();

    const database = client.db("Pokedex");

    const movies = database.collection("pokemons");

    // create a document to be inserted
    const pokemon = { name: "Mew", nivel: 99, tipo:"Psiquico" };

    const result = await movies.insertOne(pokemon);
    console.log(`${result.insertedCount} documents were inserted with the _id: ${result.insertedId}`,);
}

    rodar()

// -------------------- SETUP

app.use(router.routes())
    .use(router.allowedMethods());

app.listen(3000, function() {
    console.log(("Server na porta 3000"));

   });

