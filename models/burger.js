var orm = require("../config/orm.js");

var burger = {
    all:function(cb){
        orm.selectAll("burgers", function(res){
            cb(res);// will be sent into our burgers_controller.js
        });
    },
    create: function(cols, vals, cb){
        orm.insertOne("burgers", cols, vals, function(res){
            cb(res);
        });
    },
    update: function(objColVals, condition, cb){
        orm.updateOne("burgers", objColVals, condition, function(res){
            cb(res);
        });
    }   
};

module.exports = burger;