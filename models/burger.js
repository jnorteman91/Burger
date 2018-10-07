// ORM functions that interact with the database
var orm = require("../config/orm.js");

// Burgers to export with data updaate functions
var burger = {
    // Grabs data from burger table
    selectAll: function(cb) {
        orm.selectAll('burgers', function(result) {
            cb(result);
        });
    },
    // Insert burger into table
    insertOne: function(newBurgerName, cb) {
        orm.insertOne('burgers', 'burger_name', newBurgerName, function(result) {
            cb(result);
        });
    },
    // Update existing burger
    updateOne: function(devouredBurgerID, cb) {
        orm.updateOne('burgers', 'devoured = true', devouredBurgerID, function(result) {
            cb(result);
        });
    }
};

// Export the database for burgers_controller.js
module.exports = burger;