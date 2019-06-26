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
router.post("/api/tacos", function (req, res) {
    taco.insertOne([
        "taco_name", "shell", "vegetarian", "picked_up"
    ], [req.body.taco_name, req.body.shell, req.body.vegetarian, req.body.picked_up], function (result) {
        res.json({ id: result.insertId });
    });
});
router.put("/api/tacos/:id", function (req, res) {
    const id = "id =" + req.params.id;
    taco.updateOne(
        { picked_up: req.body.picked_up },
        id, function (result) {
            if (result.changedRows === 0) {
                return res.status(404).end();
            }
            res.status(200).end();
        })
})
router.delete("api/tacos/:id", function (req, res) {
    const id = "id =" + req.params.id;
    taco.delete(id, function (result) {
        res.status(200).end();
    });
});
module.exports = router;


