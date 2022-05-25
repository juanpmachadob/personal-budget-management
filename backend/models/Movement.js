const { DataTypes } = require("sequelize");
const db = require("../database/config");
const Category = require("./Category");
const User = require("./User");

const Movement = db.define("Movement", {
  concept: {
    type: DataTypes.STRING,
  },
  amount: {
    type: DataTypes.FLOAT,
  },
  date: {
    type: DataTypes.DATEONLY,
  },
  type: {
    type: DataTypes.ENUM("income", "expense"),
  },
  categoryId: {
    type: DataTypes.INTEGER,
    references: {
      model: Category,
      key: "id",
    },
  },
  userId: {
    type: DataTypes.INTEGER,
    references: {
      model: User,
      key: "id",
    },
  },
});

Movement.belongsTo(User, {
  foreignKey: "userId",
  as: "user",
});

Movement.belongsTo(Category, {
  foreignKey: "categoryId",
  as: "category",
});

module.exports = Movement;
