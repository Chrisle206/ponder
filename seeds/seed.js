const users = [
    {
        username:"Shawn",
        email:"shawnanalla@gmail.com",
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
    }
]

const sequelize = require("../config/connection");
const {User, Ponder} = require("../models")

const seed = async ()=>{
    await sequelize.sync({force:true});
    await User.bulkCreate(users,{individualHooks:true});
    await Tweet.bulkCreate(tweets);
    console.log("Database has been seeded!");
    process.exit(0);
}

seed();