const express = require("express");
const router = express.Router();
const { User, Ponder, Comment } = require("../../models");
const AnonymousProfileId = 1;

//To use these routes, type localhost:3000/api/ponder as your base URL.

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
    
          res.render('ponder', { post });
          // res.json(post)
        } else {
          res.status(404).end();
        }
      } catch (err) {
        res.status(500).json(err);
      }
    });

//TODO: Anonymous post route, separate from logged in post route, if checkbox is 'true', with userId hardcoded to 1
//Anywhere you do a render in an API route, split up into HTML routes for separating jobs (API is for interacting with database, Home is from rendering pages)
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
          UserId: req.session.user.id,
          CategoryId: req.body.CategoryId
          // user_id: req.session.user.id
        }).then(newPonder => {
          // res.json(newPonder);
          const ponder = newPonder.get({ plain: true});
          console.log(ponder);
          res.json(ponder);
        });
    } else {
        Ponder.create({
            body: req.body.body,
            UserId: AnonymousProfileId,
            CategoryId: req.body.CategoryId
          }).then(newPonder => {
            // res.json(newPonder);
            const ponder = newPonder.get({ plain: true});
            console.log(ponder);
            res.json(ponder);
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