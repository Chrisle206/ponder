const router = require('express').Router();

const routes = require("./api");
router.use("/api", routes);


//Homepage
router.get("/", (req, res) => {
    res.render('form');
  });


module.exports = router;