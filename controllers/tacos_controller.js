const express = require("express");
const router = express.Router();

const taco = require("../models/taco");
router.get("/", function (req, res) {
    console.log('get function rungs')
    taco.selectAll(function (data) {
        const hbsObject = {
            tacos: data
        };
        console.log(hbsObject);
        res.render("index", hbsObject);
    });
});
// selectAll()` __ MYSQL query to select * from tavos
//      * `insertOne()`   MYSQL query to add tacos
//      * `updateOne()`  MYSQL query to change attibute of tacos
module.exports = router;


