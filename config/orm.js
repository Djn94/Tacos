const connection = require("./connection.js");
const orm = {
    selectAll: function (tableName) {
        const queryString = "SELECT * FROM ??";
        connection.query(queryString, [tableName], function (err, result) {
            if (err) throw err;
            console.log(result)
        });
    },
    insertOne: function (taconame, shell, vegetarian, pickedup) {
        const queryString = "INSERT INTO tacos SET ?";
        //taco_name, shell, vegetarian, picked_up
        connection.query(queryString, [taconame, shell, vegetarian, pickedup], function (err, result) {
            if (err) throw err;
            console.log(result)
        })
    },
    updateOne: function () {
        const queryString = "";
        connection.query(queryString, [], function (err, result) {
            if (err) throw err;
            console.log(result)
        })
    },
}
module.exports = orm;

