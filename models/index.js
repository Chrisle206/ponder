const User = require("./User");
const Ponder = require("./Ponder");
const Vote = require("./Vote");
const Category = require("./Category");
const Comment = require("./Comment");

//A user can have many ponders, and all ponders belong to a user, referencing that user's id.
User.hasMany(Ponder,{
    foreignKey: 'user_id',
    onDelete:"CASCADE"
});
Ponder.belongsTo(User, {
    foreignKey: 'user_id',
    onDelete: 'CASCADE'
});
//A ponder can have many comments, and each comment will have that ponder's ponder_id.
Ponder.hasMany(Comment, {
    foreignKey: 'ponder_id',
    onDelete: 'CASCADE'
});
//All comments belong to a user, and each comment will have that user's user_id.
Comment.belongsTo(User, {
    foreignKey: 'user_id',
    onDelete: 'CASCADE'
});

Comment.belongsTo(Ponder, {
    foreignKey: 'ponder_id',
    onDelete: 'CASCADE'
});
//TODO: Divide Vote model into two separate models, one for Upvote and one for Downvote.
//Votes belong to a Ponder, and will have that ponder's associated ponder_id.
Vote.belongsTo(Ponder, {
    foreignKey: 'ponder_id',
    onDelete: 'CASCADE'
});
//A point of confusion for us all. We will have to test to see if this works. 
User.hasMany(Vote, {
    foreignKey: 'user_id',
    onDelete: 'CASCADE'
})

//A Ponder will belong to a category, referencing that category's category_id. In the future, we may want to change this to a 'hasMany' relationship so we can attach multiple categories. This depends on if we implement tags.
Ponder.belongsTo(Category, {
    foreignKey: 'category_id',
    onDelete:'CASCADE'
});

module.exports={
    User,
    Ponder,
    Vote,
    Category,
    Comment
}