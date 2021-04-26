const axios = require('axios');
var koa = require("koa");
var Router = require('koa-router');
const bodyParser = require('koa-bodyparser');
const db = require("./DbPokemon");
const dbMongo = require("./DbPokemonMongo");
// const { pegaTudo, pegaPokemon, pegaTodos, pegaTodosOsNomes, adicionarPokemon } = require("./DbPokemon");
// const bdpokemon = require("./DbPokemon");
// cosnt pegatudo = dbpokemon.pegatudo
// dbpokemon.pegatudo()


const app = new koa();
var router = new Router();
app.use(bodyParser())
// -------------------- ROTAS

router.get('/pokemon', async(ctx, next) => {
//    ctx.body = db.pegaTodosOsNomes()
ctx.body =  await dbMongo.pegaTodosOsNomes()
  });

  router.get('/pokemon/:id', async(ctx, next) => {
    var idPokemon = ctx.params.id
    ctx.body = await dbMongo.pegaPokemon(idPokemon)
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

// -------------------- SETUP

app.use(router.routes())
    .use(router.allowedMethods());

app.listen(3000, function() {
    console.log(("Server na porta 3000"));
});

