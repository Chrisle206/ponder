const express = require("express");
const router = express.Router();
const { User, Ponder, Comment } = require("../../models");

//To use these routes, type localhost:3000/api/ponder as your base URL.
//GET route for viewing a ponder.
//TODO: Need a get route that will show ponders WITHOUT comments as well, for the 'recent ponders' aside.
router.get("/:id", async (req, res) => {
    try {
        const postData = await Ponder.findByPk(req.params.id, {
          include: [
            User,
            {
              model: Comment,
              include: [User],
            },
          ],
        });
    
        if (postData) {
          const post = postData.get({ plain: true });
    
          res.render('ponder', { post });
        } else {
          res.status(404).end();
        }
      } catch (err) {
        res.status(500).json(err);
      }
    });

//POST route for creating a new ponder. Currently doesn't allow for anonymous interaction but this will be fixed.
router.post("/", async (req, res) => {
    if (req.session.user) {
        try {
            Ponder.create({
                body: req.body.body,
                user_id: req.session.user.id
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
