const express = require('express');
const router = express.Router();

<<<<<<< HEAD
const ponderController = require("./ponderController.js")
router.use("/tweets",ponderController)

const userController = require("./userController.js")
router.use("/user",userController)
=======
const ponderRoutes = require("./ponderController.js")
router.use("/ponder",ponderRoutes)

const userRoutes = require("./userController.js")
router.use("/users",userRoutes)
>>>>>>> dev

module.exports = router;