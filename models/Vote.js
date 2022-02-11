const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Vote extends Model {}

Vote.init({
    
    upvote: {
         type: DataTypes.INTEGER,
         allowNull:false,
         validate:{
             isNumber: true
         }
    },
    downvote: {
        type: DataTypes.INTEGER,
        allowNull:false,
        validate:{
            isNumber: true
        }
   }
},{
    sequelize
});

module.exports=Vote