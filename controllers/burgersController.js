var express = require("express");

var router = express.Router();

// Import the model (cat.js) to use its database functions.
var burger = require("../models/burger.js");

// Create all our routes and set up logic within those routes where required.
router.get("/", function(req, res) {
  res.redirect("/burgers");
  
});

router.get("/burgers", function(req, res) {
  burger.all(function(burgerData) {
    res.render("index", {burger_data: burgerData});
  });
});

router.post("/burgers/create", function(req, res) {
  burger.create(req.body.burger_name, function(result) {
    // Send back the ID of the new quote
    console.log(result);
    res.redirect("/");
  });
});

router.put("/burgers/:id", function(req, res) {
  burger.update(req.params.id, function(result) {

      console.log(result);
      // Send back response and let page reload from .then in ajax
      res.sendStatus(200)

    });
});

// Export routes for server.js to use.
module.exports = router;
