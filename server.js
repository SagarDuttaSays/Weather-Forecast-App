const express = require('express');
const bodyParser = require('body-parser');
const request = require('request');
const app = express();

// Setup your express app and body-parser configurations
// Setup your javascript template view engine
// we will serve your static pages from the public directory, it will act as your root directory
app.use(express.static('public'));
app.use(bodyParser.urlencoded({ extended: true }));
app.set("view engine", "ejs");

// Setup your default display on launch
app.get("/", function (req, res) {
  // It will not fetch and display any data in the index page
  res.render("index");
});

app.listen(1000, function(){
    console.log('server started!');
});