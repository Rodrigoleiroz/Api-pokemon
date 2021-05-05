const fs = require("fs");
const flowerUtils = require('./utils');

const jsonData = fs.readFileSync("./flores/data.json", "utf8");
const data = JSON.parse(jsonData);



//chamadas

const nomes = flowerUtils.extraiNomesForeach(data.flowerlist);
const nomes2 = flowerUtils.extraiNomesMap(data.flowerlist);
const buscaNome = flowerUtils.buscaPeloNome(data.flowerlist, "cAc");
const buscaNomeOuCate = flowerUtils.buscaNomeOuCategoria(data.flowerlist, "rUB");
const pegaPrecototal = flowerUtils.totalDosPrecos(data.flowerlist);
const achaId = flowerUtils.achaPeloId(data.flowerlist, 16);
const agrupaCate = flowerUtils.agrupaCategorias(data.flowerlist);


console.log("Todos os nomes", resultadoTodosNomes)