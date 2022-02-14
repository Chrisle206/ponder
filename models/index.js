const User = require("./User");
const Ponder = require("./Ponder");
const Category = require("./Category");
const Comment = require("./Comment");

//A user can have many ponders, and all ponders belong to a user, referencing that user's id.
User.hasMany(Ponder);
Ponder.belongsTo(User);
//A ponder can have many comments, and each comment will have that ponder's ponder_id.
Ponder.hasMany(Comment);
//All comments belong to a user, and each comment will have that user's user_id.
Comment.belongsTo(User);

Comment.belongsTo(Ponder);
//TODO: Divide Vote model into two separate models, one for Upvote and one for Downvote.
//Votes belong to a Ponder, and will have that ponder's associated ponder_id.
//A point of confusion for us all. We will have to test to see if this works. 


//A Ponder will belong to a category, referencing that category's category_id. In the future, we may want to change this to a 'hasMany' relationship so we can attach multiple categories. This depends on if we implement tags.
Ponder.belongsTo(Category);
Category.hasMany(Ponder);

module.exports={
    User,
    Ponder,
    Category,
    Comment
}