const connection = require("./connection.js");
function printQuestionMarks(num) {
    const arr = [];
    for (const i = 0; i < num; i++) {
        arr.push("?");
    }
    return arr.toString();
};
function objToSql(object) {
    const arr = [];
    for (var key in object) {
        const value = object[key];
        if (Object.hasOwnProperty.call(object, key)) {
            if (typeof value === "string" && value.indexOf(" ") >= 0) {
                value = "'" + value + "'";
            }
            arr.push(key + "=" + value);
        }
    }
    return arr.toString();
};
const orm = {
    selectAll: function (tableName, callback) {
        const queryString = "SELECT * FROM " + tableName + ";";
        connection.query(queryString, function (err, result) {
            if (err) throw err;
            callback(result)
        });
    },
    insertOne: function (tableName, cols, vals, callback) {
        var queryString = "INSERT INTO " + table;

        queryString += " (";
        queryString += cols.toString();
        queryString += ") ";
        queryString += "VALUES (";
        queryString += printQuestionMarks(vals.length);
        queryString += ") ";
        console.log(queryString)
        connection.query(queryString, vals, function (err, result) {
            if (err) throw err;

            callback(result);
        })
    },
    updateOne: function (tableName, objColVals, condition, callback) {
        const queryString = "UPDATE "; +tableName;
        queryString += " SET ";
        queryString += objToSql(objColVals);
        queryString += " WHERE ";
        queryString += condition;

        connection.query(queryString, function (err, result) {
            if (err) throw err;
            callback(result);
        })
    },
    delete: function (tableName, condition, callback) {
        const queryString = "DELETE FROM " + tableName;
        queryString += " WHERE ";
        queryString += condition;
        connection.query(queryString, function (err, result) {
            if (err) {
                throw err;
            }

            callback(result);
        });
    }
};
module.exports = orm;

