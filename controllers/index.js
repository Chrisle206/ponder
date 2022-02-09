const express = require("express");
const router = require('express').Router();
const { User, Ponder } = require("../models");
const routes = require("./api");
router.use("/user", routes);

//Homepage -- TODO: should render some recent ponders on bottom left of interface in "recent ponders" section.
router.get("/", (req, res) => {
    res.render("start");
  });


module.exports = router;