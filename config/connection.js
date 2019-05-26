const mysql = require("mysql");

const connection = mysql.createConnection({
    host: "127.0.0.1",
    port: 3306,
    user: "root",
    password: "root",
    database: "tacos_db"
});

module.exports = function (app) {
    connection.connect(function (err) {
        if (err) throw err;
        console.log("connected as id " + connection.threadId);
        connection.query("SELECT * FROM tacos", function (err, res) {
            if (err) throw err;
            let tacoList = res;
            console.log(tacoList);
        }
        )
        connection.end();
    });
};
