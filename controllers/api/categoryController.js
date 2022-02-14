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