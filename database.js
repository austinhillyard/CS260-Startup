
const { MongoClient, ServerApiVersion } = require('mongodb');

const config = require("./dbConfig.json");
const bcrypt = require('bcrypt');
const uuid = require('uuid');

const uri = `mongodb+srv://${config.userName}:${config.password}@${config.hostname}/?retryWrites=true&w=majority`;

// Create a MongoClient with a MongoClientOptions object to set the Stable API version
const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  }
});

(async function testConnection() {
  await client.connect();
  await db.command({ ping: 1 });
  console.log("Pinged your deployment. You successfully connected to MongoDB!");
})().catch((ex) => {
  console.log(`Unable to connect to database with ${uri} because ${ex.message}`);
  process.exit(1);
});

const db = client.db('gametracker');
const collection = db.collection('users');

async function createUser(email, password) {
  // Hash the password before we insert it into the database
  const passwordHash = await bcrypt.hash(password, 10);

  const user = {
    email: email,
    password: passwordHash,
    token: uuid.v4(),
  };
  await collection.insertOne(user);

  return user;
}

async function updateId(user) {
  const result = await collection.updateOne(
    { username: user.username },
    {
      $set: { steamId: user.steamId }, // always updates steamId
      $setOnInsert: { username: user.username } // inserts both when it's a new document
    },
    { upsert: true }
  );
  return result;
}

function getUser(username) {
  const query = {username: username};
  const user = db.collection(collection).find(query);

  return user;
}

function getUserByToken(token) {
  return collection.findOne({ token: token });
}

module.exports = {
  getUser,
  updateId,
  createUser,
  getUserByToken
};