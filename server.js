const express = require('express');
const PORT = process.env.port || 8080;
const app = express();
app.use(express.static("public"));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
const connection = require("./config/connection.js")
const exphbs = require("express-handlebars");
app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");
var routes = require("./controllers/tacos_controller.js");
app.use(routes);
app.listen(process.env.PORT || PORT, function () {
    console.log(`server listening on ${PORT}`)
})

