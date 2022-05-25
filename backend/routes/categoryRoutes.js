/*
  Category routes
  api/categories
*/

const { Router } = require("express");
const { getCategories } = require("../controllers/categoryController");

const router = Router();

router.get("/", getCategories);

module.exports = router;
