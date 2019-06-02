const orm = require("./config/orm.js");
orm.selectAll("tacos");
orm.insertOne("nuTaco", "hard", "false", "false");