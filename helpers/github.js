const axios = require('axios');
const config = require('../config.js');

let getReposByUsername = (username, callback) => {
  // TODO - Use the axios module to request repos for a specific
  // user from the github API

  // The options object has been provided to help you out,
  // but you'll have to fill in the URL
  // get is default request method
  console.log(`getReposByUsername called with argument ${username}`);
  axios.get(`https://api.github.com/users/${username}/repos`)
  .then((response) => {
    callback(response);
  }).catch((error) => {
    console.log(error);
  });

  // axios({
  //   url: `https://github.com/users/${username}/repos`,
  //   headers: {
  //     'User-Agent': 'request',
  //     'Authorization': `token ${config.TOKEN}`
  //   }
  // }).then(function(response) {
  //   console.log(`get request to github api successful!!`);
  // });

var options = {
    url: `https://github.com/users/${username}/repos`,
    headers: {
      'User-Agent': 'request',
      'Authorization': `token ${config.TOKEN}`
    }
  }

}

module.exports.getReposByUsername = getReposByUsername;