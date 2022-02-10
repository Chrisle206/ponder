const User = require("./User");
const Ponder = require("./Ponder");
const Vote = require("./Vote");
const Category = require("./Category");
const Comment = require("./Comment");

//A user can have many ponders, and all ponders belong to a user, referencing that user's id.
User.hasMany(Ponder,{
    foreignKey: 'userId',
    onDelete:"CASCADE"
});
Ponder.belongsTo(User, {
    foreignKey: 'userId',
    onDelete: 'CASCADE'
});
//A ponder can have many comments, and each comment will have that ponder's ponderId.
Ponder.hasMany(Comment, {
    foreignKey: 'ponderId',
    onDelete: 'CASCADE'
});
//All comments belong to a user, and each comment will have that user's userId.
Comment.belongsTo(User, {
    foreignKey: 'userId',
    onDelete: 'CASCADE'
});
//TODO: Divide Vote model into two separate models, one for Upvote and one for Downvote.
//Votes belong to a Ponder, and will have that ponder's associated ponderId.
Vote.belongsTo(Ponder, {
    foreignKey: 'ponderId',
    onDelete: 'CASCADE'
});
//A point of confusion for us all. We will have to test to see if this works. 
User.hasMany(Vote, {
    foreignKey: 'userId',
    onDelete: 'CASCADE'
})

//A Ponder will belong to a category, referencing that category's categoryId. In the future, we may want to change this to a 'hasMany' relationship so we can attach multiple categories. This depends on if we implement tags.
Ponder.belongsTo(Category, {
    foreignKey: 'categoryId',
    onDelete:'CASCADE'
});

module.exports={
    User,
    Ponder,
    Vote,
    Category
}