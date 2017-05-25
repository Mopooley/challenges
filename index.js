const express = require("express");
require("dotenv").config({
  silent: true
});
const path = require("path");
const bodyParser = require("body-parser");
const mongodb = require("mongodb");
const ObjectID = mongodb.ObjectID;
const app = express();

const USERS_COLLECTION = "users";

/*Express Middleware*/
app.use(express.static(__dirname + "/public"));
//use express middleware for serving static files from public folder (relative to public folder)
app.use(bodyParser.json());
//parse all requests as JSON in the app instance

var db;
//global database variable outside of database connection callback to re-use outside of express app

mongodb.MongoClient.connect(process.env.DB_URL, function(err, database) {

  if (err) {
    console.log(err);
    process.exit(1);
  }

  db = database;
  //save global db variable as database instance

  console.log("successfully connected to the database");

  const server = app.listen(process.env.PORT || 8080, function() {

    const port = server.address().port;
    console.log("App is now running on port", port);

  });
  
  /*RESTFUL API Web services*/

  function handleError(res, reason, message, code) {
    //generic error handling function used by all endpoints

    console.log("ERROR: " + reason);

    res.status(code || 500).json({

      "error": message

    });

  } 

 
}); //mongodb.MongoClient.connect
