const mongoose = require('mongoose');

const mongoURI = 'mongodb://localhost:27017/test';

const db = mongoose.connect(mongoURI, { useNewUrlParser: true, poolSize: 200000 });

db
  .then(db => console.log(`Connected to: ${mongoURI}`))
  .catch(err => {
    console.log(`There was a problem connecting to mongo at: ${mongoURI}`)
    console.log(err);
  });


module.exports = db;