const router = require('express').Router();

const routes = require("./api");
router.use("/api", routes);


//Homepage
router.get("/", (req, res) => {
    res.render('form');
  });

router.get("/pondertest", (req, res) => {
    res.render('ponder');
  });

router.get("/showsessions", (req, res) => {
    res.json(req.session);
  });
  

module.exports = router;