const express = require("express");
const router = express.Router();
const { User, Ponder, Comment } = require("../../models");

router.get("/:id", (req, res) => {
    Ponder.findOne({
        where: {id: Math.floor(Math.random()*Ponder.length)+1}
        
    }).then(ponders => {
        res.json(ponders);
    });
});

router.get("/", (req, res) => {
    Ponder.findAll({
         //map grab latest ponders
    }).then(ponders => {
        // const pondersArray = ponders.map(ponder => ponder.get({ plain: true }));
        // let recent = [pondersArray[pondersArray-1],pondersArray[pondersArray-2],pondersArray[pondersArray-3],];

        // res.json(recent);
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

router.delete("/", (req, res) => {
    Ponder.destroy({
        where: {id: req.params.id}
    });
});


module.exports = router;
