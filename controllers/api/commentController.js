const express = require("express");
const router = express.Router();
const { User, Ponder, Comment } = require("../../models");
const AnonymousProfileId = 1;


//Route for getting all comments
router.get("/", (req, res) => {
    Comment.findAll({
        include: [User]
    }).then(comments => {
        res.json(comments);
    })
});

//Route for posting new comments
router.post("/", (req, res) => {
    if (req.session.user) {
        Comment.create({
            body: req.body.body,
            user_id: req.session.user.id,
            ponder_id: req.body.ponder_id
        }).then(newComment => {
            res.json(newComment);
        });
    } else {
        Comment.create({
            body: req.body.body,
            user_id: AnonymousProfileId,
            ponder_id: req.body.ponder_id
        }).then(newComment => {
            res.json(newComment);
        });
    }
});

router.delete("/:id", (req, res) => {
    Comment.destroy({
        where: { id: req.params.id }
    }).then(deleted => {
        res.json(deleted);
    });
});


module.exports = router;
