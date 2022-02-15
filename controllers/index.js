const router = require('express').Router();
const htmlController = require("./htmlController");
const routes = require("./api");
const { User, Ponder } = require('../models');

router.use("/api", routes);
router.use("/", htmlController)
// const filter = require('bad-words');


//Homepage if not logged in, this route also displays the most recent 3 ponders
router.get("/", (req, res) => {
  if (req.session.user) {
    res.redirect('/active')
  } else {
    Ponder.findAll({include: [User]})
    .then(ponders => {
        let recent = [ponders[ponders.length-1],ponders[ponders.length-2],ponders[ponders.length-3]];
        const ponder = recent.map((post) => post.get({ plain: true }));
        // res.json(ponder);
        res.render('form', {
          layout: 'main',
          ponder
        });
    });
  };
});

//Homepage if logged in, this route also displays the most recent 3 ponders
router.get("/active", async (req, res) => {
  if (req.session.user) {
    const userSeq = await User.findByPk(req.session.user.id);
    const user = await userSeq.get({plain:true});
    Ponder.findAll({include: [User]})
    .then(ponders => {
        let recent = [ponders[ponders.length-1],ponders[ponders.length-2],ponders[ponders.length-3]];
        const ponder = recent.map((post) => post.get({ plain: true }));
        res.render('form', {
          layout: 'loggedin',
          user, ponder
        });    
      });
  } else {
    res.status(403).json({msg: 'Forbidden Access: Login first'})
  } 
});


router.get("/showsessions", (req, res) => {
    res.json(req.session);
  });

router.get("/clearsessions/", (req, res) => {
  req.session.destroy();
  res.json(req.session);
})
  

module.exports = router;