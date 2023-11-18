const express = require('express');
const cookieParser = require('cookie-parser');
const bcrypt = require('bcrypt');
const DB = require('./database.js');
//Setup app object
const app = express();

const authCookieName = 'token';

//Setup manually port option.
const port = process.argv.length > 2 ? process.argv[2] : 4000;
const host = '0.0.0.0';

app.use(express.json());

app.use(cookieParser());

let cors = require('cors');
app.use(cors());

//Provide public files.
app.use(express.static('public'));

//Router for service APIs
let apiRouter = express.Router();
app.use("/api", apiRouter);

app.listen(port, host, () => {
  console.log(`Listening on port ${port}`)
});

// CreateAuth token for a new user
apiRouter.post('/auth/create', async (req, res) => {
  if (await DB.getUser(req.body.email)) {
    res.status(409).send({ msg: 'Existing user' });
  } else {
    const user = await DB.createUser(req.body.email, req.body.password);

    // Set the cookie
    setAuthCookie(res, user.token);

    res.send({
      id: user._id,
    });
  }
});

apiRouter.post('/auth/login', async (req, res) => {
  const user = await DB.getUser(req.body.email);
  if (user) {
    if (await bcrypt.compare(req.body.password, user.password)) {
      setAuthCookie(res, user.token);
      res.send({ id: user._id });
      return;
    }
  }
  res.status(401).send({ msg: 'Unauthorized' });
});

// DeleteAuth token if stored in cookie
apiRouter.delete('/auth/logout', (_req, res) => {
  res.clearCookie(authCookieName);
  res.status(204).end();
});

// GetUser returns information about a user
apiRouter.get('/user/:email', async (req, res) => {
  const user = await DB.getUser(req.params.email);
  if (user) {
    const token = req?.cookies.token;
    res.send({ email: user.email, authenticated: token === user.token, steamId: user.steamId });
    return;
  }
  res.status(404).send({ msg: 'Unknown' });
});


//See if username exists in database and pull ID from that.
apiRouter.get('/loginRefresh', (req, res) => {
  let username = req.body.username;
  console.log('Received username from browser');
  let user = getUser(username);
  res.send(user);
});


// secureApiRouter verifies credentials for endpoints
var secureApiRouter = express.Router();
apiRouter.use(secureApiRouter);

secureApiRouter.use(async (req, res, next) => {
  authToken = req.cookies[authCookieName];
  const user = await DB.getUserByToken(authToken);
  if (user) {
    next();
  } else {
    res.status(401).send({ msg: 'Unauthorized' });
  }
});

//Saved ID with corresponding username to database
secureApiRouter.post('/id', (req, res) => {
  let id = req.body.steamId;
  let username = req.body.username;
  let idPair = {steamId: id, username:username};
  console.log(`Received id from browser: ${id}, saving...`);
  (idPair);
  console.log("Saved. Sending response.");
  res.send(id);
});

//Import API functionality
secureApiRouter.get('/import/:id', async (req, res) => {
  let id = req.params.id;
  
  console.log(`Received id to pull games from ${id}`)
  console.log("Calling Steam API to get games...");
  let games = await steamAPI(id)
  console.log("Sending Game API response to browser.");
  res.send(games);
});

//If the path is unknown, send the default file.
app.use((_req, res) => {
  console.log("Sending root file index.html");
  res.sendFile('index.html', { root: 'public' });
});

let fs = require('fs');
const { addUser, getUser } = require('./database');
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