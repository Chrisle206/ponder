const users = [
    {
        username:"Anonymous",
        email:"anonymous@gmail.com",
        password:"password1"
    },
    {
        username:"Dat",
        email:"velkyam@hotmail.com",
        password:"password2"
    },
    {
        username:"Ronnel",
        email:"ronnelabrigo@gmail.com",
        password:"subscribe"
    },
    {
        username: "Chris",
        email:"chrisle@gmail.com",
        password:"Naruto"
    },
    {
        username: "Sean",
        email:"shawnanalla@gmail.com",
        password:"metagross"
    },
]

const ponders = [
    {
        body:"Civilization should be destroyed and we should revert back to being hunter-gatherers",
        UserId:1,
        CategoryId: 1
    },
    {
        body:"Pokemon is a bad franchise",
        UserId:2,
        CategoryId: 1
    },
    {
        body:"Coffee smells bad",
        UserId:3,
        CategoryId: 1
    },
    {
        body:"Nuclear energy is the future prove me wrong",
        UserId:4,
        CategoryId: 4
    },
]

const comments = [
    {
        body:"This post sucks",
        UserId:1,
        PonderId:1
    },
    {
        body:"amen",
        UserId:1,
        PonderId:1
    },
    {
        body:"you're a moron",
        UserId:1,
        PonderId:1
    },
    {
        body:"Everyone that says this kind of drivel wouldn't survive a month in that kind of setting.",
        UserId:1,
        PonderId:1
    },
    {
        body:"Shut up nerd",
        UserId:1,
        PonderId:4
    },
    {
        body:"Good luck convincing that to 8 billion people",
        UserId:1,
        PonderId:4
    },
    {
        body:"it's cool and all but everyone is still hung up on how it's mainly associated with like, you know, weapons of mass destruction capable of vaporizing cities",
        UserId:1,
        PonderId:4
    },
    {
        body:"What about the environment",
        UserId:1,
        PonderId:4
    },
    {
        body:"Nuclear energy is actually very clean, ESPECIALLY compared to standard fossil fuels.",
        UserId:1,
        PonderId:4
    },
    {
        body:"okay tell that to the millions of tons of toxic waste that the govt is literally just burying in the earth and pretending doesn't exist",
        UserId:1,
        PonderId:4
    },
    {
        body:"YOU smell bad",
        UserId:4,
        PonderId:3
    },
    {
        body:"it's literally one of the best smells in the world. I don't think I've ever met anyone that actually DISLIKED the smell.",
        UserId:1,
        PonderId:3
    },
    {
        body:"objectively incorrect",
        UserId:4,
        PonderId:2
    },
    {
        body:"what makes it a bad franchise?",
        UserId:1,
        PonderId:2
    },
    {
        body:"it's repetitive, too easy, and very clearly a cash cow that game freak wants to milk for all its worth while putting in as little effort as they can get away with.",
        UserId:1,
        PonderId:2
    },
    {
        body:"ok but it's a classic series that stays true to its roots and core mechanics. it builds off of them each generation in new and interesting ways. if they changed the gameplay too much then it wouldn't be pokemon anymore",
        UserId:1,
        PonderId:2
    },
    {
        body:"this thread sucks",
        UserId:1,
        PonderId:2
    },


]

const categories = [
    {
        category_name:"Random",
    },
    {
        category_name:"Coding",
    },
    {
        category_name:"Gaming",
    },
    {
        category_name:"Technology",
    },
    {
        category_name:"Food",
    },
    {
        category_name:"Advice",
    },
    {
        category_name:"Conversation",
    },
]

var Filter = require('bad-words');
const badWordsArray = require('../../lib/seeds/profanities');
var filter = new Filter();
filter.addWords(...badWordsArray);
const sequelize = require("../../config/connection");
const {User, Ponder, Comment, Category} = require("../../models")
const seed = async ()=>{
    await sequelize.sync({force:true});
    await Category.bulkCreate(categories);
    await User.bulkCreate(users,{individualHooks:true});
    await Ponder.bulkCreate(ponders);
    await Comment.bulkCreate(comments);
    console.log("Database has been seeded!");
    process.exit(0);
}

seed();