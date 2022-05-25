const { DataTypes } = require("sequelize");
const db = require("../database/config");

const User = db.define("users", {
  name: {
    type: DataTypes.STRING,
  },
  email: {
    type: DataTypes.STRING,
  },
  password: {
    type: DataTypes.STRING,
  },
});

module.exports = User;
