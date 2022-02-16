const express = require('express');
const router = express.Router();

const ponderRoutes = require("./ponderController.js")
router.use("/ponder",ponderRoutes)

const userRoutes = require("./userController.js")
router.use("/users",userRoutes)

const commentRoutes = require("./commentController.js")
router.use("/comments",commentRoutes)

const categoryRoutes = require("./categoryController.js")
router.use("/category",categoryRoutes)

module.exports = router;