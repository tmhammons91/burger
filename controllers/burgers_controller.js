var express = require("express"); 
var router = express.Router(); 

var burger = require("../models/burger.js"); 

router.get("/", function (req, res) {
    burger.all(function(data) {
        var burgerObj = {
            burgers: data
        }; 
        console.log(burgerObj); 
        res.render("index", burgerObj)
    }); 
}); 

router.post("/", function (req, res) {
    burger.create(req.body.burger_name, function() {
        res.redirect("/"); 
    });    
}); 

router.put("/:id", function (req, res) {
    var id = req.params.id; 
    burger.update(id, function () {
        res.redirect("/"); 
    }); 
}); 

module.exports = router; 