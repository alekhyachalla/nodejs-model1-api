let express = require('express');
let bodyParser = require('body-parser');
//let mongoose = require('mongoose');
let app = express();
let apiRoutes = require("./customers.js");
var port = process.env.PORT || 8080;
//var MongoClient = require('mongodb').MongoClient;


app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

// mongoose.connect('mongodb://localhost/mydb3');
// var db = mongoose.connection;

//var url = "mongodb://192.168.18.154:27017/";
//MongoClient.connect(url, function(err, db) {
//  if (err) throw err;
//  var dbo = db.db("mydb3");
//  dbo.createCollection("customers", function(err, res) {
//    if (err) throw err;
//    console.log("Collection created!");
//    db.close();
//  });
//});

module.exports=app

app.get('/', (req, res) => res.send('Hello!!!'));

app.use('/api', apiRoutes)

app.listen(port, function () {console.log("Running on port " + port);});
