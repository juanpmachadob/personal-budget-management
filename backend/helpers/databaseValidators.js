const Category = require("../models/Category");
const User = require("../models/User");

const emailExists = async (req, res, next) => {
  const { email } = req.body;
  const userExists = await User.findOne({ where: { email } });

  if (userExists) {
    return res.status(400).json({
      ok: false,
      msg: `Email ${email} already exists`,
    });
  }

  next();
};

const categoryExists = async (req, res, next) => {
  const { categoryId } = req.body;
  const categoryExists = await Category.findByPk(categoryId);

  if (!categoryExists) {
    return res.status(400).json({
      ok: false,
      msg: `Category does not exist`,
    });
  }

  next();
};

module.exports = {
  emailExists,
  categoryExists,
};
