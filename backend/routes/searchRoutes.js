/*
  Search routes
  api/search
*/

const { Router } = require("express");
const { search } = require("../controllers/searchController");
const validateJWT = require("../middlewares/validateJWT");

const router = Router();

router.use(validateJWT);
router.get("/:collection/:term", search);

module.exports = router;
