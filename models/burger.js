var orm = require("../config/orm.js");

var burger = {
    all: function (cb) {
        orm.selectAll("burgers", function (res) {
            cb(res);
        });
    },

    create: function (val, cb) {
        orm.insertOne("burgers", val, function (res) {
            cb(res);
        });
    },
    update: function (id, cb) {
        orm.updateOne("burgers", id, function (res) {
            cb(res);
        });
    }
};

module.exports = burger; 