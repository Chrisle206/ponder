const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Ponder extends Model {}

Ponder.init({
    
    body: {
         type: DataTypes.STRING,
         allowNull:false,
         validate:{
             len:[1,240]
         }
    },
    upvote: {
        type: DataTypes.INTEGER,
        defaultValue:0,
    },
    downvote: {
        type: DataTypes.INTEGER,
        defaultValue:0,
    }
},{
    sequelize
});

module.exports=Ponder