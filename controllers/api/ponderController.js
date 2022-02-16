const express = require("express");
const router = express.Router();
var Filter = require('bad-words');
const badWordsArray = require('../../lib/seeds/profanities')
const { User, Ponder, Comment} = require("../../models");
const { timeStamp } = require("console");
const { increment } = require("../../models/User");
const AnonymousProfileId = 1;
let sesh;

//To use these routes, type localhost:3000/api/ponder as your base URL.
var filter = new Filter();
filter.addWords(...badWordsArray);

//Sorts ponders from greatest to least and renders to the page
router.get("/Ponders", (req, res) => {
  Ponder.findAll({
    include: [User]
  }).then(ponders => {

    let all = ponders.map(x => x.get({plain:true}));
    console.log(all);
    // let array = [];
    // for(let i = 0; i < all.length; i++) {
    //   let p1 = all[i];
    // for(let j = 1; j < all.length; j++) {
    //   let p2 = all[j];

    //   if(p1.upvote < p2.upvote) {
    //     p1 = p2;
    //   } 
    //   }
    //   // console.log(p1);
    //   array.push(p1);
    //   all.splice(all.indexOf(p1), 1);
    all.sort((a, b) => (a.upvote > b.upvote) ? -1 : ((b.upvote > a.upvote) ? 1 : 0));
    console.log(all);
    // }
    // console.log(array);
    if (req.session.user) {
      const user = req.session.user;
      res.render('allponders', {
        layout: 'loggedin',
        all, user });
      } else {
      res.render('allponders', {
        layout: 'main',
        all });
      }
  })
})

//Shows three most recent ponders.
// router.get("/", (req, res) => {
//     Ponder.findAll({include: [User, {model: Comment, include: [User]}]})
//     .then(ponders => {
//         let recent = [ponders[ponders.length-1],ponders[ponders.length-2],ponders[ponders.length-3]];
//         const ponder = recent.map((post) => post.get({ plain: true }));
//         console.log(ponder);
//         // res.json(ponder);
//         res.render('recent', { ponder });
//     });
// });

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

router.put("/upvote/:id", (req, res) => {
  const ponderId = req.params.id;
  sesh = req.session;
  // if there is no array for upvotes create a new array
  if (!sesh.allUpvotes) {sesh.allUpvotes = []};
  // if ponder hasn't already been downvoted
  if (!sesh.allDownvotes || !sesh.allDownvotes.includes(ponderId)) {
    // if ponder hasn't already been upvoted
    if (!sesh.allUpvotes.includes(ponderId)) {
      Ponder.findByPk(req.params.id).then(ponder => {
          const prevUpVote = ponder.upvote;
          Ponder.update(
            {upvote: prevUpVote + 1},
            {where: {id: ponderId}}
          ).then(ponder => {
            console.log("sesh.allUpvotes before: " + sesh.allUpvotes);
            sesh.allUpvotes.push(ponderId);
            console.log("sesh.allUpvotes after: " + sesh.allUpvotes);
            res.send(ponder)
          })
        })
        // but if there is already an upvote
    } else if (sesh.allUpvotes.includes(ponderId)) {
      Ponder.findByPk(req.params.id).then(ponder => {
        const prevUpVote = ponder.upvote;
        Ponder.update(
          {upvote: prevUpVote - 1},
          {where: {id: ponderId}}
        ).then(ponder => {
          console.log("sesh.allUpvotes before: " + sesh.allUpvotes);
          // then filter out that ponder from array
          // filters array for elements that are not the ponder
          sesh.allUpvotes = sesh.allUpvotes.filter(ponder => ponder != ponderId);
          console.log("sesh.allUpvotes after: " + sesh.allUpvotes);
          res.send(ponder)
        })
      })
    }
  }
})

router.put("/downvote/:id", (req, res) => {
  const ponderId = req.params.id;
  sesh = req.session;
  // if there is no array for downvotes create a new array
  if (!sesh.allDownvotes) {sesh.allDownvotes = []};
  // if ponder hasn't already been upvoted
  if (!sesh.allUpvotes || !sesh.allUpvotes.includes(ponderId)) {
    // if ponder hasn't already been downvoted
    if (!sesh.allDownvotes.includes(ponderId)) {
      Ponder.findByPk(req.params.id).then(ponder => {
          const prevDownVote = ponder.downvote;
          Ponder.update(
            {downvote: prevDownVote + 1},
            {where: {id: ponderId}}
          ).then(ponder => {
            console.log("sesh.allDownvotes before: " + sesh.allDownvotes);
            sesh.allDownvotes.push(ponderId);
            console.log("sesh.allDownvotes after: " + sesh.allDownvotes);
            res.send(ponder)
          })
        })
        // but if there is already a downvote
    } else if (sesh.allDownvotes.includes(ponderId)) {
      Ponder.findByPk(req.params.id).then(ponder => {
        const prevDownVote = ponder.downvote;
        Ponder.update(
          {downvote: prevDownVote - 1},
          {where: {id: ponderId}}
        ).then(ponder => {
          console.log("sesh.allDownvotes before: " + sesh.allDownvotes);
          // then filter out that ponder from array
          // filters array for elements that are not the ponder
          sesh.allDownvotes = sesh.allDownvotes.filter(ponder => ponder != ponderId);
          console.log("sesh.allDownvotes after: " + sesh.allDownvotes);
          res.send(ponder);
        })
      })
    }
  }
})

// const ponderId = req.params.id;
// sesh = req.session;
// // if there is no array for all votes create a new array
// if (!sesh.allDownvotes) {sesh.allDownvotes = []};
// if (!sesh.allDownvotes.includes(ponderId)) {
//   Ponder.findByPk(req.params.id).then(ponder => {
//       const prevDownVote = ponder.downvote;
//       Ponder.update(
//         {downvote: prevDownVote + 1},
//         {where: {id: ponderId}}
//       ).then(ponder => {
//         sesh.allDownvotes.push(ponderId);
//         res.send(ponder)
//       })
//     })
// } else {
//   res.status(200).json();
// }

//Route for deleting a Ponder.
router.delete("/:id", (req, res) => {
    Ponder.destroy({
        where: {id: req.params.id}
    });
});

module.exports = router;