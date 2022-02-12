const router = require('express').Router();
const htmlController = require("./htmlController");
const routes = require("./api");


router.use("/api", routes);
router.use("/", htmlController)
// const filter = require('bad-words');


//Homepage
router.get("/", (req, res) => {
    res.render('form', {
      layout: 'main'
    });
  });

//Homepage if logged in  
router.get("/active", (req, res) => {
    res.render('form', {
      layout: 'loggedin'
    });
  });

router.get("/pondertest", (req, res) => {
    res.render('ponder');
  });

router.get("/showsessions", (req, res) => {
    res.json(req.session);
  });
  

module.exports = router;