const express = require("express");
const router = express.Router();
const { User, Ponder, Comment } = require("../../models");


router.get("/", (req, res) => {
    Comment.findAll({
        include: [User]
    }).then(comments => {
        res.json(comments);
    })
});

router.post("/", (req, res) => {
    if (req.session.user) {
        Comment.create({
            body: req.body.body,
            UserId: req.session.user.id
        }).then(newComment => {
            res.json(newComment);
        });
    } else {
        Comment.create({
            body: req.body.body,
            UserId: "Anonymous"
        }).then(newComment => {
            res.json(newComment);
        });
    }
});

router.delete("/:id", (req, res) => {
    Comment.destroy({
        where: { id: req.params.id }
    });
});

router.delete()
module.exports = router;
