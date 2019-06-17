require('newrelic');
var express = require('express');
var mongodb = require('mongodb');
var app = express();
const path = require('path');
const cors = require('cors');
var db;
// Initialize connection once
app.listen(4000, () => console.log('listening on 4000!'));
app.use(express.static(path.resolve(__dirname, '../public')));
app.use(cors());

const { MongoClient } = require('mongodb');
let testDB;
let reviews;
let globalClient;
const developmentURI = 'mongodb://localhost:27017/test';
const connection = MongoClient.connect(developmentURI, { poolSize: 10 }, (err, client) => {
  globalClient = client;
  testDB = client.db('test');
  reviews = testDB.collection('reviews');
});
const findDocuments = function (callback, id) {
  reviews.find({ "_id": parseInt(id) }).toArray((err, docs) => {
    if (err) {
      callback(err, null);
    } else {
      callback(null, docs);
    }
  });
};

app.get('/:id/reviews', (req, res) => {
  findDocuments((err, data) => {
    if (err) {
      throw err;
    } else {
      res.send(data[0].reviews);
    }
  }, req.params.id)
})

app.get('/:id/summary', (req, res) => {
  findDocuments((err, data) => {
    if (err) {
      throw err;
    } else {
      res.send(data);
    }
  }, req.params.id)
})

app.get('/:id', (req, res) => {
  if (!req.params.id) {
    res.status(400);
    res.end();
  } else {
    res.sendFile('index.html', { root: path.resolve(__dirname, '../public') });
  }
});