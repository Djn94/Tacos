const mysql = require("mysql");
let connection;
//if (process.env.JAWSDB_URL) {
//   console.log('The process jawas thing is runnin')
// connection = mysql.createConnection(process.env.JAWSDB_URL);
//} else {
connection = mysql.createConnection({
    host: "k3xio06abqa902qt.cbetxkdyhwsb.us-east-1.rds.amazonaws.com",
    port: 3306,
    user: "vzfyijigrxv6lr8z",
    password: "qy1icnt6lzu1npjz",
    database: "soql2durgodccs8p"
}
)
//}
connection.connect(function (err) {
    if (err) throw err;
    console.log("connected as id " + connection.threadId);
});

module.exports = connection;
