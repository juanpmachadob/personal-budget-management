const Category = require("../models/Category");

const getCategories = async (req, res) => {
  try {
    const categories = await Category.findAll();
    return res.json({
      categories,
      ok: true,
    });
  } catch (error) {
    console.log(error);
    return res.status(500).json({
      ok: false,
      msg: "Please, contact the administrator",
    });
  }
};

module.exports = { getCategories };
