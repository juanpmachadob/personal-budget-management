const { DataTypes } = require("sequelize");
const db = require("../database/config");

const Category = db.define("categories", {
  name: {
    type: DataTypes.STRING,
  },
});

module.exports = Category;
