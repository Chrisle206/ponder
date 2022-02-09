const express = require("express");
const router = express.Router();
const { User, Ponder } = require("../../models");

router.get("/", (req, res) => {
    Ponder.findAll().then(ponders => {
        res.json(ponders);
    });
});

router.post("/", (req, res) => {
    Ponder.create({
        body: req.body.body
    }).then(ponders => {
        res.json(ponders);
    });
});
router.put();

router.delete();


module.exports = router;
