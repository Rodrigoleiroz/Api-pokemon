const bluebird = require('bluebird')
const redisOriginal = require("redis")
const redis = bluebird.promisifyAll(redisOriginal);
const client = redis.createClient();

const valor = await client.setAsync("key", "value");
const valor2 = await client.getAsync("key");







client.on("error", function (error) {
    console.error(error);
});

client.set("key", "value", redis.print);
client.get("key", redis.print);

//hash insere mais de um valor dentro de uma chave.
client.hmset('pokemon', 'nome', 'alakazan', 'tipo', 'psiquico', 'nivel', 34, 'peso', 102);

//hgetall lista os valores inseridos na chave.
client.hgetall('pokemon', function (err, object) {
    console.log(object);
});

client.set

//rpush(list) cria uma lista de dados
client.rpush(['regioes', 'kanto', 'johto', 'alola', 'kalos', 'unova', 'hoenn', 'galar'], function (err, reply) {
    console.log(reply);
});

//lrange acessa a lista de dados inserida
client.lrange('regioes', 0, -1, function (err, reply) {
    console.log(reply);
});

// sadd(sets) cria uma lista de dados, mas nao permite duplicar um registro
client.sadd(['regioesPokemon', 'kanto', 'johto', 'alola', 'kalos', 'unova', 'hoenn', 'galar'], function (err, reply) {
    console.log(reply);
});

//smember resgata os dados do set e verifica se os dados foram duplicados
client.smembers('regioesPokemon', function (err, reply) {
    console.log(reply);
});