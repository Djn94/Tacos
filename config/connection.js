const mysql = require("mysql");
var connection;

if (process.env.JAWSDB_URL) {
    console.log('The process jawas thing is runnin')
    connection = mysql.createConnection(process.env.JAWSDB_URL);
} else {
    connection = mysql.createConnection({

        host: "localhost",
        port: 3306,
        user: "root",
        password: "root",
        database: "tacos_db"
    });
}
connection.connect(function (err) {
    if (err) throw err;
    console.log("connected as id " + connection.threadId);
});

module.exports = connection;