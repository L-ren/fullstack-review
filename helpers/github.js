const axios = require('axios');
const config = require('../config.js');

let getReposByUsername = (username, callback) => {
  // console.log(`getReposByUsername called with argument ${username}`);
  axios.get(`https://api.github.com/users/${username}/repos`)
  .then((response) => {
    callback(response);
  }).catch((error) => {
    console.log(error);
  });

// I didn't need to use this options object so far ??
// var options = {
//     url: `https://github.com/users/${username}/repos`,
//     headers: {
//       'User-Agent': 'request',
//       'Authorization': `token ${config.TOKEN}`
//     }
//   }

}

module.exports.getReposByUsername = getReposByUsername;