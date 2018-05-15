const MongoClient = require('mongodb').MongoClient;
const assert = require('assert');

// Connection URL
const url = 'mongodb://localhost:27017';

// Database Name
const dbName = 'test';

var db;

// Use connect method to connect to the server
MongoClient.connect(url, function(err, client) {
  assert.equal(null, err);
  console.log("Connected successfully to server");

  db = client.db(dbName);

  // client.close();
});



exports.findAll = function(req, res) {
  db.collection('ActorRecruit', function(err, collection) {
      collection.find().toArray(function(err, items) {
          // console.log(items[0].name);
          res.send(items);
      });
  });
};

// exports.findAll = function(req, res) {
//   res.send([{name:'wine1'}, {name:'wine2'}, {name:'wine3'}]);
// };
exports.findById = function(req, res) {
  res.send({id:req.params.id, name: "The Name", description: "description"});
};
