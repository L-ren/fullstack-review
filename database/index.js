const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/fetcher');

let repoSchema = new mongoose.Schema({
  // each schema maps to a collection
  // each schema instance is a document that takes this shape
  id: Number, // id: { type: Number, unique: true}, // prevents duplicate repos in db
  name: String,
  ownerId: Number,
  ownerName: String, // idk if I need this
  htmlUrl: String,
  description: String,
  starGazers: Number
});

const Repo = mongoose.model('Repo', repoSchema); // compiles schema into a model, a class used to construct documents (instances)

let save = (repos) => {
  let currentPromises = [];

  repos.forEach((repo) => {
    Repo.exists({id: repo.id}).then((exists) => {
      if (!exists) {
        const currentRepo = new Repo({
          id: repo.id,
          name: repo.name,
          ownerId: repo.owner.id,
          ownerName: repo.owner.login, // idk if I need this
          htmlUrl: repo.html_url,
          description: repo.description,
          starGazers: repo.stargazers_count
        });
        currentRepo.save().then(() => {
        // console.log(`save successful`);
        currentPromises.push(currentRepo);
        });

      } else {console.log(`repo already exists`);}
    });
  });

  Promise.all(currentPromises).then(() => {
    console.log(`all promises resolved`)
  });
}

let getTop25 = (callback) => {
  // return top 25 repos
  // console.log(`getTop25 called!`);
  // Repo.find({}, (err, docs) => {
    // this doesn't seem efficient to pull all documents from the database
    // sort docs array by decreasing stargazer number
  //   docs.sort((a, b) => {
  //     if (a.starGazers < b.starGazers) {return  1}
  //     else if (a.starGazers > b.starGazers) {return -1}
  //     else {return 0}
  //   });

  //   callback(docs.slice(0, 25));
  // });

  // TRY THIS:
  Repo.find({})
    .sort({starGazers: -1})
    .limit(25)
    .exec()
    .then((docs) => {callback(docs)});
};

module.exports.save = save;
module.exports.getTop25 = getTop25;