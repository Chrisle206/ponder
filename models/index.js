const User = require("./User");
const Ponder = require("./Ponder");

User.hasMany(Ponder,{
    onDelete:"CASCADE"
});
Ponder.belongsTo(User);

module.exports={
    User,
    Ponder
}