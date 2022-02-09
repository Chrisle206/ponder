const User = require("./User");
const Ponder = require("./Ponder");
const Vote = require("./Vote");
const Category = require("./Category");

User.hasMany(Ponder,{
    onDelete:"CASCADE"
});
Ponder.belongsTo(User);
Vote.belongsTo(Ponder);
Ponder.belongsTo(Category);
Category.hasMany(Ponder);

module.exports={
    User,
    Ponder,
    Vote,
    Category
}