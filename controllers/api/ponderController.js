const express = require("express");
const router = express.Router();
const { User, Ponder } = require("../../models");

router.get("/", (req, res) => {
    Ponder.findOne({
        where: {id: Math.floor(Math.random()*Ponder.length) + 1}
    }).then(ponders => {
        res.json(ponders);
    });
});

router.get("/", (req, res) => {
    Ponder.findAll({
         //map grab latest ponders
    }).then(ponders => {
        res.json(ponders);
    });
});

router.post("/", (req, res) => {
    if (req.session.user) {
        Tweet.create({
          body: req.body.body,
          UserId: req.session.user.id
        }).then(newPost => {
          res.json(newPost);
        });
    } else {
        Tweet.create({
            body: req.body.body,
            UserId: "Anonymous"
          }).then(newPost => {
            res.json(newPost);
          });
    }
});

router.put();

router.delete("/", (req, res) => {
    Ponder.destroy({
        where: {id: req.params.id}
    });
});


module.exports = router;
