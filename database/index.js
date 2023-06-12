const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/fetcher');

let repoSchema = mongoose.Schema({
  // each schema maps to a collection
  // each schema instance is a document that takes this shape
  id: Number,
  name: String,
  ownerId: Number,
  ownerName: String, // idk if I need this
  htmlUrl: String
});

let Repo = mongoose.model('Repo', repoSchema);

let save = (/* TODO */) => {
  // TODO: Your code here
  // This function should save a repo or repos to
  // the MongoDB
}

module.exports.save = save;