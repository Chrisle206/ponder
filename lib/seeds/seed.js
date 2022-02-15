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
    {
        username: "Daisy Mae",
        email:"daisymae@gmail.com",
        password:"buymyturnips"
    },
    {
        username: "Barack Obama",
        email:"barackobama@gmail.com",
        password:"president1"
    },
]

const ponders = [
    {
        body:"Civilization should be destroyed and we should revert back to being hunter-gatherers",
        UserId:5,
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
        CategoryId: 5
    },
    {
        body: "anyone like turnips? I'm selling turnips 130 bells ea!",
        UserId: 6,
        CategoryId: 1
    },
    {
        body: "What is a smell that you like but is usually awful for everyone?",
        UserId: 1,
        CategoryId: 1
    },
    {
        body: "Is cereal soup?",
        UserId: 4,
        CategoryId: 6
    },
    {
        body: "Is a hotdog a sandwich?",
        UserId: 1,
        CategoryId: 6
    },
    {
        body: "Should toilet paper go over or under?",
        UserId: 1,
        CategoryId: 9
    },
    {
        body: "If peanut butter wasn't called peanut butter, what would it be called?",
        UserId: 1,
        CategoryId: 6
    },
    {
        body: "How many chickens are necessary to kill a hippo?",
        UserId: 1,
        CategoryId: 1
    },
    {
        body: "Why is a burger not a sandwich?",
        UserId: 1,
        CategoryId: 6
    },
    {
        body: "How do other fish notice if a fish cries underwater?",
        UserId: 1,
        CategoryId: 12
    },
    {
        body: "If violence is not the answer, then is it the question?",
        UserId: 1,
        CategoryId: 9
    },
    {
        body: "Why do we call cold things “chilled,” meanwhile chilies are called hot?",
        UserId: 1,
        CategoryId: 1
    },
    {
        body: "Do you sleep with or without socks?",
        UserId: 1,
        CategoryId: 8
    },
    {
        body: "If you could replace grass with anything you want, what would you choose?",
        UserId: 1,
        CategoryId: 3
    },
    {
        body: "Do you think blind people can see dreams?",
        UserId: 1,
        CategoryId: 3
    },
    {
        body: "If a piece of gum is 10 calories, how does it work, having 10 calories whiling chewing or swallowing?",
        UserId: 1,
        CategoryId: 1
    },
    {
        body: "Which SpongeBob character would you choose to be your roommate?",
        UserId: 1,
        CategoryId: 1
    },
    {
        body: "Would you rather be rich and sad or poor and happy?",
        UserId: 4,
        CategoryId: 3
    },
    {
        body: "What is the dumbest thing you've done for money?",
        UserId: 1,
        CategoryId: 1
    },
    {
        body: "What is your mostly used excuse to avoid meeting someone?",
        UserId: 1,
        CategoryId: 1
    }
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
        body:"Everyone that spews this kind of drivel wouldn't survive a month in that kind of setting.",
        UserId:1,
        PonderId:1
    },
    {
        body:"not me im built different",
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
        body:"i'll bury you dweeb",
        UserId:1,
        PonderId:4
    },
    {
        body:"i bet u smell bad",
        UserId:4,
        PonderId:3
    },
    {
        body:"i've never met someone that actually DISLIKED the smell. something is wrong with u",
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
    {
        body:"Boil'em, mash'em, stick'em in a stew!",
        UserId:6,
        PonderId:5
    },
    {
        body:"too expensive",
        UserId:1,
        PonderId:5
    },
    {
        body:"my prices are fair and competitive, take it or leave it scrub",
        UserId:6,
        PonderId:5
    },
    {
        body:"There's no money to be made if you're selling for that high. How am I supposed to turn a profit off of 130 starting price?",
        UserId:1,
        PonderId:5
    },
    {
        body:"profit?? turnips are for eating, not selling",
        UserId:6,
        PonderId:5
    },
    {
        body:"i love u daisy mae",
        UserId:1,
        PonderId:5
    },
    {
        body:"ur mom",
        UserId:1,
        PonderId:6
    },
    {
        body:"i like the smell of gasoline",
        UserId:1,
        PonderId:6
    },
    {
        body:"burning plastic",
        UserId:1,
        PonderId:6
    },
    {
        body:"wtf?",
        UserId:1,
        PonderId:6
    },
    {
        body:"yall r weird",
        UserId:1,
        PonderId:6
    },

]

const categories = [
    {
        category_name:"Random",
    },
    {
        category_name:"No Category",
    },
    {
        category_name:"Questions",
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
        category_name:"Lifestyle",
    },
    {
        category_name:"Philosophy",
    },
    {
        category_name:"Art",
    },
    {
        category_name:"Romance",
    },
    {
        category_name:"Coding",
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