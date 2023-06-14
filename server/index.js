const githubHelper = require('../helpers/github.js')
const database = require('../database');
const express = require('express');

let app = express();
let getReposByUsername = githubHelper.getReposByUsername;
let save = database.save;
let getTop25 = database.getTop25;

app.use(express.json());
app.use(express.static('client/dist'));

app.post('/repos', function (req, res) {
  const username = req.body.term;
  getReposByUsername(username, (response) => {
    save(response.data);
});
  res.end();
});

app.get('/repos', function (req, res) {
  // This route should send back the top 25 repos
  getTop25((repos) => {
    res.end(JSON.stringify(repos));
  });
});

let port = 1128;

app.listen(port, function() {
  console.log(`listening on port ${port}`);
});

