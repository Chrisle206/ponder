const express = require("express");
const router = express.Router();
const { User, Ponder, Comment } = require("../../models");

//To use these routes, type localhost:3000/api/ponder as your base URL.
//GET route for viewing a random ponder.
//TODO: Need a get route that will show ponders WITHOUT comments as well, for the 'recent ponders' aside.
router.get("/random", (req, res) => {
    Ponder.findAll().then( array => {
    Ponder.findOne({
        where: {id: Math.floor(Math.random()*array.length)+1},
        include: [User, Comment]
    }).then(ponders => {
        res.json(ponders);
    });
    
    });
});

//GET route for viewing a specific ponder; allows for user to refer to their old Ponders.
router.get("/specific/:id", async (req, res) => {
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
    
        //   res.render('ponder', { post });
        res.status(200).json(post);
        } else {
          res.status(404).end();
        }
      } catch (err) {
        res.status(500).json(err);
      }
    });

//Shows three most recent ponders.
router.get("/", (req, res) => {
    Ponder.findAll().then(ponders => {
        let recent = [ponders[ponders.length-1],ponders[ponders.length-2],ponders[ponders.length-3]];

        res.json(recent);
    });
});

//Anonymous route might not work because user_id is datatype INTEGER.
router.post("/", (req, res) => {
    if (req.session.user) {
        Ponder.create({
          body: req.body.body,
          UserId: req.body.UserId,
          CategoryId: req.body.CategoryId
          // user_id: req.session.user.id
        }).then(newPost => {
          res.json(newPost);
          console.log(newPost)
        });
    } else {
        Ponder.create({
            body: req.body.body,
            UserId: 1,
            CategoryId: req.body.CategoryId
          }).then(newPost => {
            res.json(newPost);
          });
    }
});


//Route for deleting a Ponder.
router.delete("/:id", (req, res) => {
    Ponder.destroy({
        where: {id: req.params.id}
    });
});


module.exports = router;