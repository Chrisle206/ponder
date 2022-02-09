const router = require('express').Router();

router.get("/", (req, res) => {
    res.render("start");
  });

module.exports = router;