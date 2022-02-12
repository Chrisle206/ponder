const express = require('express');
const bcrypt = require("bcrypt")
const router = express.Router();
const { User, Ponder, Comment } = require("../../models");

//Login route
router.post("/login",(req,res)=>{
    User.findOne({
        where:{
            email:req.body.email
        }
    }).then(foundUser=>{
        if(!foundUser){
            return res.status(401).json({msg:"Invalid username/password"})
        }
        if(bcrypt.compareSync(req.body.password,foundUser.password)){
            req.session.user = {
                id:foundUser.id,
                email:foundUser.email,
                username:foundUser.username
            }
            return res.json(foundUser);
        } else {
            return res.status(401).json({msg:"Invalid username/password."})
        }
    })
})
//Sign up route
router.post("/signup", (req,res) => {
    User.create({
        username:req.body.username,
        email:req.body.email,
        password:req.body.password
    }).then(newUser => {
        req.session.user = {
            id:newUser.id,
            email:newUser.email,
            username:newUser.username
        }
        res.json(newUser)
    }).catch(err => {
        throw err;
    })
})
//Logout route
router.post("/logout", (req,res)=>{
    req.session.destroy(() => {
        // res.send("Logged out.")    
        res.status(204).end();
    });
})

//Show all users, this is for troubleshooting
router.get('/show',(req,res)=>{
    User.findAll({
        include:[Ponder]
    }).then(users=>{
        res.json(users)
    })
})


module.exports = router;