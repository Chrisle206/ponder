const router = require('express').Router();
const { User, Ponder, Comment } = require("../models");

//GET route for viewing a random ponder.
//TODO: Right now, if a user is logged in, some of the content from the ponder template doesn't render to the loggedin layout.
router.get("/random", (req, res) => {
    Ponder.findAll({
      include: [User, Comment]
    }).then( array => {
      const singlePonder = array[Math.floor(Math.random()*array.length)]
        const ponder = singlePonder.get({ plain: true });
        console.log(ponder);
        if (req.session) {
        res.render('ponder', { 
          layout: 'loggedin',
          ponder });
        }
        res.render('ponder', { ponder });
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