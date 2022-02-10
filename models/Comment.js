const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Comment extends Model {}

Comment.init({
    
    body: {
         type: DataTypes.STRING,
         allowNull:false,
         validate:{
             len:[1,240]
         }
    }
},{
    sequelize
});

module.exports=Comment