const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Category extends Model {}

Category.init({
    
    category_name: {
         type: DataTypes.STRING,
         allowNull:false,
         validate:{
             len:[1,240]
         }
    }
},{
    sequelize
});

module.exports=Category