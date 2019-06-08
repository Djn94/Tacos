const mysql = require("mysql");
let connection;
//if (process.env.JAWSDB_URL) {
//   console.log('The process jawas thing is runnin')
// connection = mysql.createConnection(process.env.JAWSDB_URL);
//} else {
connection = mysql.createConnection({
    host: "k3xio06abqa902qt.cbetxkdyhwsb.us-east-1.rds.amazonaws.com",
    port: 3306,
    user: "	c49cqv34it2e3bka",
    password: "kgwarx8mm3x7trun",
    database: "m3g4qn6wnpzj31uo	"
}
)
//}
connection.connect(function (err) {
    if (err) throw err;
    console.log("connected as id " + connection.threadId);
});

module.exports = connection;
