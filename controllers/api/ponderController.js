const express = require("express");
const router = express.Router();
var Filter = require('bad-words');
const badWordsArray = require('../../lib/seeds/profanities')
const { User, Ponder, Comment, Vote } = require("../../models");
const AnonymousProfileId = 1;

//To use these routes, type localhost:3000/api/ponder as your base URL.
var filter = new Filter();
filter.addWords(...badWordsArray);
//GET route for viewing a specific ponder; allows for user to refer to their old Ponders.
//TODO: This route now exists in the htmlController file, therefore there is no need for it here.
// router.get("/specific/:id", async (req, res) => {
//     try {
//         const postData = await Ponder.findByPk(req.params.id, {
//           include: [
//             User,
//             {
//               model: Comment,
//               include: [User],
//             },
//           ],
//         });
    
//         if (postData) {
//           const ponder = postData.get({ plain: true });
    
//           res.render('ponder', { ponder });
//           // res.json(post)
//         } else {
//           res.status(404).end();
//         }
//       } catch (err) {
//         res.status(500).json(err);
//       }
// });

//Shows three most recent ponders.
router.get("/", (req, res) => {
    Ponder.findAll({include: [User, {model: Comment, include: [User]}]})
    .then(ponders => {
        let recent = [ponders[ponders.length-1],ponders[ponders.length-2],ponders[ponders.length-3]];
        const ponder = recent.map((post) => post.get({ plain: true }));
        console.log(ponder);
        // res.json(ponder);
        res.render('recent', { ponder });
    });
});

//POST route for posts associated with an id
router.post("/", async (req, res) => {
  try {  
  if (req.session.user) {
        Ponder.create({
          body: req.body.body,
          UserId: req.session.user.id,
          CategoryId: req.body.CategoryId
          // user_id: req.session.user.id
        }).then(newPonder => {
          // res.json(newPonder);
          const ponder = newPonder.get({ plain: true});
          const user = req.session.user
          console.log(ponder);
          res.json(ponder);
        });
    } else {
      Ponder.create({
        body: filter.clean(req.body.body),
        UserId: AnonymousProfileId,
        CategoryId: req.body.CategoryId
      }).then(newPonder => {
        // res.json(newPonder);
        const ponder = newPonder.get({ plain: true});
        console.log(ponder);
        res.json(ponder);
      });
    }
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

//POST route for anonymous posts
router.post("/anonymous", async (req,res) => {
  try {
    Ponder.create({
      body: filter.clean(req.body.body),
      UserId: AnonymousProfileId,
      CategoryId: req.body.CategoryId
    }).then(newPonder => {
      // res.json(newPonder);
      const ponder = newPonder.get({ plain: true});
      console.log(ponder);
      res.json(ponder);
    });
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
})

//Route for deleting a Ponder.
router.delete("/:id", (req, res) => {
    Ponder.destroy({
        where: {id: req.params.id}
    });
});

module.exports = router;