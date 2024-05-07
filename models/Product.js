// import dependencies from the sequelize library
const { Model, DataTypes } = require('sequelize');
// import our database connection from config.js
const sequelize = require('../config/connection');

// Initialize Product model (table) by extending off Sequelize's Model class
class Product extends Model {}

// set up fields and rules for Product model
Product.init(
  {
    id:{
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    }, 
    product_name:{
      type: DataTypes.STRING,
      allowNull: false,
    }, 
    price: {
      type: DataTypes.DECIMAL(10, 2), // 10 and 2 determine the precision and scale of the price
      allowNull: false, 
      validate: {
        isDecimal: true // ensure the value is a decimal
      }
    }, 
    stock: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 0, // stock is set to 0 if not specified
      validate: {
        isNumeric: true
      }
    }, 
    category_id: {
      type: DataTypes.INTEGER,
      references: { // foreign key yo category table over the 'id' field
        model: 'category',
        key: 'id',
      }
    }
  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'product',
  }
);

module.exports = Product;
