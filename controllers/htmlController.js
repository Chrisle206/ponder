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
          // res.json(ponder)
        } else {
          res.status(404).end();
        }
      } catch (err) {
          console.log(err);
        res.status(500).json(err);
      }
    });

//GET route for viewing all of a user's ponder, called on when a user visits their profile page.
router.get('/user/:id', async (req, res) => {
  try {
    const userData = await User.findByPk(req.params.id, {
      include: [{model: Ponder, include: [User]}],
    });
    const userPonders = userData.get({ plain: true });
    if (userPonders.Ponders.length === 0) {
      console.log('u have no ponders lol')
      if (req.session.user) {
        const user = req.session.user;
        res.render('noponder', { 
          layout: 'loggedin',
          user 
        });
        } else {
        res.render('noponder', { 
          layout: 'main'
        });
      };
  } else if (userPonders.Ponders.length > 0) {
      console.log(userPonders.Ponders);
        if (req.session.user) {
          const user = req.session.user;
          res.render('profile', { 
            layout: 'loggedin',
            userPonders, user 
          });
          } else {
          res.render('profile', { 
            layout: 'main',
            userPonders 
          });
          };
      } else {
        console.log('terminus');
        res.status(404).end();
      };
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

//GET route for rendering our 'About' page
router.get("/about", async (req,res) => {
  try {
    if (req.session.user) {
      const user = req.session.user;
      res.render('about', { 
        layout: 'loggedin',
        user 
      });
      } else {
      res.render('about', { 
        layout: 'main' 
      });
      };
    } catch (err) {
      console.log(err);
      res.status(500).json(err);
    }
})

module.exports = router; 