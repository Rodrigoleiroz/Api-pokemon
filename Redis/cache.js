const bluebird = require('bluebird');
const redisOriginal = require('redis');

const redis = bluebird.promisifyAll(redisOriginal);
const client = redis.createClient();

// Retorna true ou false se salvou ou nao
const salvaCache = async (nomeDoPacote, pacotePraSalvar) => {
  const pacoteStringficado = JSON.stringify(pacotePraSalvar);
  await client.setAsync(nomeDoPacote, pacoteStringficado);
};

// Retornar o cache que eu quero
const pegaCache = async (nomeDoPacote) => {
  const stringPraParsear = await client.getAsync(nomeDoPacote);
  return JSON.parse(stringPraParsear);
};

module.exports = {
  salvaCache,
  pegaCache,
};
