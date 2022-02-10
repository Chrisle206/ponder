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
        body:"Shut up nerd",
        UserId:1,
        PonderId:4
    },
    {
        body:"YOU smell bad",
        UserId:4,
        PonderId:3
    },
    {
        body:"objectively incorrect",
        UserId:4,
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


const sequelize = require("../config/connection");
const {User, Ponder, Comment, Category} = require("../models")

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