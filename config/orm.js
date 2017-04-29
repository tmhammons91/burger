var connection = require("../config/connection.js");

var orm = {
    selectAll: function (tableInput, callback) {
        var queryString = "SELECT * FROM " + tableInput + ";";
        connection.query(queryString, function (err, result) {
            if (err) {
                throw err;
            }
            callback(result);
        });
    },
    insertOne: function (table, val, cb) {
        var queryString = "INSERT INTO " + table + " (burger_name) VALUES (?) ;"
        console.log(queryString);
        connection.query(queryString, [val], function (err, result) {
            if (err) {
                throw err;
            } cb(result);
        });
    },

    updateOne: function (table, id, cb) {
        var queryString = "UPDATE " + table + " SET devoured = true WHERE id = ? ; ";
        console.log(queryString);
        connection.query(queryString, [id], function (err, result) {
            if (err) {
                throw err;
            }
            cb(result);
            console.log(result); 
        });
    }
};
module.exports = orm; 