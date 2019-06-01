const connection = require("./connection.js");
const orm = {
    selectAll: function (tableName) {
        const queryString = "SELECT * FROM ??";
        connection.query(queryString, [tableName], function (err, result) {
            if (err) throw err;
            console.log(result)
        });
    },
    insertOne: function () {
        const queryString = "";
        connection.query(queryString, [], function (err, result) {
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
// selectAll()` __ MYSQL query to select * from tavos
//      * `insertOne()`   MYSQL query to add tacos
//      * `updateOne()`  MYSQL query to change attibute of tacos


module.exports = orm;

