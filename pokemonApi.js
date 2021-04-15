const usandoPokemons = require ("./DbPokemon")
const axios = require('axios');
var koa = require("koa");
var Router = require('koa-router');
const bodyParser = require('koa-bodyparser');
const { pegaTudo, pegaPokemon } = require("./DbPokemon");

const app = new koa();
var router = new Router();
app.use(bodyParser())
// -------------------- ROTAS

router.get('/pokemon', async(ctx, next) => {
    ctx.body = pegaTudo()
  });

  router.get('/pokemon/:nome', async(ctx, next) => {
    var nomePokemon = ctx.params.nome
    ctx.body = pegaPokemon(nomePokemon)
  });



router.post('/pokemon', async(ctx, next) => {
    ctx.body = "ok POST"
    ctx.body = ctx.request.body;
});

// -------------------- SETUP

app.use(router.routes())
    .use(router.allowedMethods());

app.listen(3000, function() {
    console.log(("Server na porta 3000"));
});

