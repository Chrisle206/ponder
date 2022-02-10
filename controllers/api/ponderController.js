const express = require("express");
const router = express.Router();
const { User, Ponder, Comment } = require("../../models");

//TODO: POST route for creating a new ponder.
router.post("/", async (req, res) => {
    if (req.session.user) {
        try {
            Ponder.create({
                body: req.body.body,
                userId: req.session.user.user
            }).then(newPost => {
                res.json(newPost);
            });
        } catch (err) {
            console.log(err);
            res.status(500).json({err});
        }
    } else {
        res.status(403).json({msg: "No logged in user."})
    }
});

module.exports = router;
