const express = require("express");
const router = express.Router();
const { User, Ponder, Comment, Category } = require("../../models");



// Shows all categories and their respective ponders
router.get("/", (req, res) => {
    Category.findAll({
        include: [Ponder]
    }).then(category=> {
        res.json(category);
    })
});

router.get("/:id", (req, res) => {
    Category.findOne(
    {
        where: {id:req.params.id},
        include: [{model: Ponder, include: [User]}]
    },
    ).then(category=> {
        // console.log(category.Ponders);
        const categoryData = category.Ponders;
        if (categoryData.length === 0) {
            if (req.session.user) {
                const user = req.session.user;
                res.render('noponder', { 
                  layout: 'loggedin',
                  user });
                } else {
                res.render('noponder', { 
                  layout: 'main'
                });
                }    
        } else { 
        const catPonderData = categoryData[Math.floor(Math.random()*categoryData.length)];
        const ponder = catPonderData.get({ plain: true });
        // console.log(ponder);
        if (req.session.user) {
            const user = req.session.user;
            res.render('random', { 
              layout: 'loggedin',
              ponder, user });
            } else {
            res.render('random', { 
              layout: 'main',
              ponder });
            }
        }
        // res.json(catPonder);
    })
});



module.exports = router;