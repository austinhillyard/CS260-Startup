const express = require('express');

//Setup app object
const app = express();

//Setup manually port option.
const port = process.argv.length > 2 ? process.argv[2] : 4000;
const host = '0.0.0.0';

app.use(express.json());

let cors = require('cors');
app.use(cors());

//Provide public files.
app.use(express.static('public'));

//Router for service APIs
let apiRouter = express.Router();
app.use("/api", apiRouter);

//If the path is unknown, send the default file.
app.use((_req, res) => {
  console.log("Sending root file index.html");
  res.sendFile('index.html', { root: 'public' });
});

app.listen(port, host, () => {
  console.log(`Listening on port ${port}`)
});

let ids = [];

apiRouter.post('/id', (req, res) => {
  let id = req.body.steamId;
  console.log(`Received id from browser: ${id}, saving...`);
  ids.push(id);
  console.log("Saved. Sending response.");
  res.send(id);
});

//Import API functionality
apiRouter.get('/import/:id', async (req, res) => {
  let id = req.params.id;
  
  console.log(`Received id to pull games from ${id}`)
  console.log("Calling Steam API to get games...");
  let games = await steamAPI(id)
  console.log("Sending Game API response to browser.");
  res.send(games);
});

let fs = require('fs');
let apiKeys;

try {
  fs.readFile('key.json', 'utf8', function (err, data) {
    if (err) throw err;
    apiKeys = JSON.parse(data);
  });
}
catch (err) {
  console.log(err);
}

async function steamAPI(id) {
  const apiLink = "https://api.steampowered.com/IPlayerService/GetOwnedGames/v0001/?key=KEY&steamid=ID&format=json&include_appinfo=true&include_played_free_games=true";
  let apiCall = apiLink.replace("KEY", apiKeys.steamAPIKey).replace("ID", id);

  console.log(apiCall);
  
  try {
      let response = await fetch(apiCall);
      console.log("Response status: " + response.status);
      console.log("Response: " + response);
      let games = await response.json();
      console.log("Games: ", games);
      return games;
  }
  catch (error) {
      console.log(error);
  }
}