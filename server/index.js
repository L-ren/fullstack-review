const githubHelper = require('../helpers/github.js')
const express = require('express');

let app = express();
let getReposByUsername = githubHelper.getReposByUsername;

app.use(express.json());
app.use(express.static('client/dist'));

app.post('/repos', function (req, res) {
  // TODO - your code here!
  // This route should take the github username provided
  // and get the repo information from the github API, then
  // save the repo information in the database

  const username = req.body.term;
  getReposByUsername(username, (response) =>
    console.log(`fetch a success! first repo: ${JSON.stringify(response.data[0])}`)
  );
  res.end();
});

app.get('/repos', function (req, res) {
  // TODO - your code here!
  res.end('get request received');
  // This route should send back the top 25 repos
});

let port = 1128;

app.listen(port, function() {
  console.log(`listening on port ${port}`);
});

