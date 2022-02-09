const express = require("express");
const router = require('express').Router();
const { User, Ponder } = require("../models");

//Homepage -- TODO: should render some recent ponders on bottom left of interface in "recent ponders" section.
router.get("/", (req, res) => {
    res.render("start");
  });

//TODO: This
router.get("/login", )

module.exports = router;