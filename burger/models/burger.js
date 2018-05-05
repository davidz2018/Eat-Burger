var orm = require('../config/orm.js');

var burger = {
    slecetAll: function(cb) {
        orm.all('burgers', function(res) {
            cd(res);
        });
    },
    
    insertOne: function(cols, vals, cb) {
        orm.create('burgers', cols, vals, cb, function(res) {
            cb(res);
        });
    },

    updateOne: function(objColVals, condition, cb) {
        orm.updateOne('burgers', objColVals, condition, function(res) {
            cb(res);
        });
    }

};

module.exports = burger;