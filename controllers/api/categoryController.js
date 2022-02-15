const express = require("express");
const router = express.Router();
const { User, Ponder, Comment, Category } = require("../../models");



//Shows all categories and their respective ponders
// router.get("/", (req, res) => {
//     Category.findAll({
//         include: [Ponder]
//     }).then(category=> {
//         res.json(category);
//     })
// });
//TODO: Make sure you make a conditional render for our response whereby the 'loggedin' layout is used if there is a current session, and 'main' layout is used if there is no current session, refer to the other routes
router.get("/:id", (req, res) => {
    Category.findOne(
        {where: {id:req.params.id},
        include: [Ponder]},
    ).then(category=> {
        const singlePonder = category.Ponders[Math.floor(Math.random()*category.Ponders.length)]
        const ponder = singlePonder.get({ plain: true });
        console.log(ponder);
        res.json(ponder);
    })
});



module.exports = router;