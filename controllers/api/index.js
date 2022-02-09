const express = require('express');
const router = express.Router();

const ponderController = require("./ponderController.js")
router.use("/tweets",ponderController)

const userController = require("./userController.js")
router.use("/user",userController)

module.exports = router;