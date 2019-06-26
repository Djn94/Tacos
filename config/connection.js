const mysql = require("mysql");
let connection;
if (process.env.JAWSDB_URL) {
    console.log('The process jawas thing is runnin')
    connection = mysql.createConnection(process.env.JAWSDB_URL);
} else {
    connection = mysql.createConnection({
        host: "yhrz9vns005e0734.cbetxkdyhwsb.us-east-1.rds.amazonaws.com",
        port: 3306,
        user: "gvk3i44a2gxcmok3",
        password: "y8hvph8b53ctysit",
        database: "xh19lynmujp1jmsa"
        // host: "localhost",
        // port: 3306,
        // user: "root",
        // password: "root",
        // database: "tacos_db"
    });
}
connection.connect(function (err) {
    if (err) throw err;
    console.log("connected as id " + connection.threadId);
});

module.exports = connection;

//
