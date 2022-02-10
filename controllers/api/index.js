const express = require('express');
const router = express.Router();

const ponderRoutes = require("./ponderController.js")
router.use("/ponder",ponderRoutes)

const userRoutes = require("./userController.js")
router.use("/users",userRoutes)

module.exports = router;