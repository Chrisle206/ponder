const express = require("express");
const router = express.Router();
const { User, Ponder, Comment } = require("../../models");

router.get("/:id", (req, res) => {
    Ponder.findOne({
        where: {id: Math.floor(Math.random()*Ponder.length)+1},
        include: [User, Comment]
    }).then(ponders => {
        res.json(ponders);
    });
});

router.get("/", (req, res) => {
    Ponder.findAll().then(ponders => {
        let recent = [ponders[ponders.length-1],ponders[ponders.length-2],ponders[ponders.length-3],];

        res.json(recent);
    });
});

router.post("/", (req, res) => {
    if (req.session.user) {
        Ponder.create({
          body: req.body.body,
          UserId: req.session.user.id
        }).then(newPost => {
          res.json(newPost);
        });
    } else {
        Ponder.create({
            body: req.body.body,
            UserId: "Anonymous"
          }).then(newPost => {
            res.json(newPost);
          });
    }
});

router.delete("/:id", (req, res) => {
    Ponder.destroy({
        where: {id: req.params.id}
    });
});


module.exports = router;
