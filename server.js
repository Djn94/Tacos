const express = require('express');
const PORT = process.env.port || 8080;
const app = express();
const connection = require("./config/connection.js")
app.use(express.static("public"));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
const exphbs = require("express-handlebars");
app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");
//const routes = require("./controllers/tacos_controller.js");
//app.use(routes);
app.listen(PORT, function () {
    console.log(`server listening on ${PORT}`)
})