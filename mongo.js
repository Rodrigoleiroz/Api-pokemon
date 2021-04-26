const { MongoClient } = require("mongodb");

// Connection URI
const uri =
  "mongodb://0.0.0.0:27017";

// Create a new MongoClient
const client = new MongoClient(uri);

async function getClient() {
  try {
    // Connect the client to the server
    await client.connect();
    // Establish and verify connection
    await client.db("admin").command({ ping: 1 });
    console.log("Connected successfully to server");
    return client
  } catch(error) {
    console.log(error)
  }
}

// export default client
// module.exports = { client: client}
module.exports = getClient