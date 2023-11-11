const express = require('express');

//Setup app object
const app = express();

//Setup manually port option.
const port = process.argv.length > 2 ? process.argv[2] : 3000;

app.use(express.json);

//Provide public files.
app.use(express.static('public'));

//Router for service APIs
let apiRouter = express.Router();
app.use("/api", apiRouter);

app.listen(port, () => {
  console.log(`Listening on port ${port}`)
});

//If the path is unknown, send the default file.
app.use((_req, res) => {
  res.sendFile('index.html', { root: 'public' });
});