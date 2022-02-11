const router = require('express').Router();
const { User, Ponder, Comment } = require("../models");

//GET route for viewing a random ponder.
//TODO: Need a get route that will show ponders WITHOUT comments as well, for the 'recent ponders' aside.
router.get("/random", (req, res) => {
    Ponder.findAll().then( array => {
    Ponder.findOne({
        where: {id: Math.floor(Math.random()*array.length)+1},
        include: [User, Comment]
    }).then(ponders => {
        const ponder = ponders.get({ plain: true });
        console.log(ponder);
        res.render('ponder', { ponder });
  });
    
    });
});


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
          const ponder = postData.get({ plain: true });
          console.log(ponder);
          res.render('ponder', { ponder });
          // res.json(post)
        } else {
          res.status(404).end();
        }
      } catch (err) {
          console.log(err);
        res.status(500).json(err);
      }
    });

module.exports = router; 