const router = require('express').Router();
const htmlController = require("./htmlController");
const routes = require("./api");
const { User, Ponder } = require('../models');


router.use("/api", routes);
router.use("/", htmlController)
// const filter = require('bad-words');


//Homepage if not logged in
router.get("/", (req, res) => {

  Ponder.findAll({include: [User]})
  .then(ponders => {
      let recent = [ponders[ponders.length-1],ponders[ponders.length-2],ponders[ponders.length-3]];
      const ponder = recent.map((post) => post.get({ plain: true }));
      // res.json(ponder);
      res.render('form', { ponder });
  });

  //   if (req.session.user) {
  //     res.redirect('/active')
  //   }
  // res.render('form', {
  //     layout: 'main'
  //   });
  });

//Homepage if logged in  
router.get("/active", async (req, res) => {
  if (req.session.user) {
    const userSeq = await User.findByPk(req.session.user.id);
    const user = await userSeq.get({plain:true});
    console.log(user);
    res.render('form', {
      layout: 'loggedin',
      user
    });
  } else {
    res.status(403).json({msg: 'Forbidden Access: Login first'})
  } 
});

router.get("/pondertest", (req, res) => {
    res.render('ponder');
  });

router.get("/showsessions", (req, res) => {
    res.json(req.session);
  });
  

module.exports = router;