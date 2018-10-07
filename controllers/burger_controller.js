// Require dependencies
var express = require('express');
var burger = require('../models/burger.js');

// Export controllers defined routes
module.exports = function(app) {
    app.get('/', function(request, respoonse) {
        burger.selectAll(function(burgerData) {
            // Object to move to view
            var incomingBurgerDataObject = {
                burgers: burgerData
            }
            // Ship to 
            response.render('index', incomingBurgerDataObject);
        });
    });

    // Post function to add burger
    app.post('/', function(request, response) {
        var newBurger = request.body.burger;
        // if no burger is defined return
        if (newBurger === '') {
            response.redirect('/');
            return;
        }
        // Createnew burger in the database
        burger.insertOne(newburger, function() {
            response.redirect('/');
        });
    });

    // Update burger in daatabase
    app.put('/:id', function(request, response) {
        // Set condition
        var id = 'id= ' + request.params.id;
        // Updaate burger
        burger.updateOne(id, function() {
            response.redirect('/');
        });
    });
};