
// DEPENDENCIES
var express = require("express");
var path = require('path')

// EXPRESS APP AND PORT
var app = express();
var PORT = process.env.PORT || 8080;

// REQUIRE MODELS
var db = require("./models");

// DATA PARSING
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Static directory
app.use(express.static("public"));

// ROUTE JS FILES
require("./routes/htmlRoutes.js")(app);
require("./routes/racesApiRoutes.js")(app);

// SYNC DB THEN START APP LISTENER
db.sequelize.sync({}).then(function() {
  app.listen(PORT, function() {
    console.log("App listening on PORT " + PORT);
  });
});
