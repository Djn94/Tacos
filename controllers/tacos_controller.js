const express = require("express");
const router = express.Router();

require("../models/taco")(app);
// selectAll()` __ MYSQL query to select * from tavos
//      * `insertOne()`   MYSQL query to add tacos
//      * `updateOne()`  MYSQL query to change attibute of tacos
module.exports = router;