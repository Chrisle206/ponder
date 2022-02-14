const router = require('express').Router();
const { User, Ponder, Comment} = require("../models");

//GET route for viewing a random ponder.
router.get("/random", (req, res) => {
    Ponder.findAll({
      include: [
        User,
        {
          model: Comment,
          include: [User],
        },
      ],
    }).then( array => {
      const singlePonder = array[Math.floor(Math.random()*array.length)]
        const ponder = singlePonder.get({ plain: true });
        console.log(ponder);
        if (req.session.user) {
        const user = req.session.user;
        res.render('random', { 
          layout: 'loggedin',
          ponder, user });
        } else {
        res.render('random', { 
          layout: 'main',
          ponder });
        }
    });
});

//GET route for a specific ponder, this is called after the user makes a post
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
          if (req.session.user) {
            const user = req.session.user;
            res.render('ponder', { 
              layout: 'loggedin',
              ponder, user });
            } else {
            res.render('ponder', { 
              layout: 'main',
              ponder });
            }
          res.json(ponder)
        } else {
          res.status(404).end();
        }
      } catch (err) {
          console.log(err);
        res.status(500).json(err);
      }
    });

module.exports = router; 