const getClient = require("./mongo")

async function rodar() {
    const client = await getClient();

    const database = client.db("Pokedex");

    const movies = database.collection("pokemons");

    // create a document to be inserted
    const pokemon = { name: "Mew", nivel: 99, tipo:"psiquico" };

    const result = await movies.insertOne(pokemon);
    console.log(`${result.insertedCount} documents were inserted with the _id: ${result.insertedId}`,
    );
}

rodar()