const orm = require("../config/orm.js");
const taco = {
    selectAll: function (callback) {
        orm.selectAll("tacos", function (res) {
            callback(res);
        });
    },
    insertOne: function (cols, vals, callback) {
        orm.insertOne("tacos", cols, vals, function (res) {
            callback(res);
        });
    },
    updateOne: function (objColVals, condition, callback) {
        orm.updateOne("tacos", objColVals, condition, function (res) {
            callback(res);
        });
    },
    delete: function (condition, callback) {
        orm.delete("tacos", condition, function (res) {
            callback(res);
        })
    }
};
module.exports = taco;
