const { Router } = require("express");
const { check } = require("express-validator");
const { register } = require("../controllers/authController");
const { emailExists } = require("../helpers/databaseValidators");
const validateFields = require("../middlewares/validateFields");

const router = Router();

router.post(
  "/register",
  [
    check("name", "Name is required").not().isEmpty(),
    check("name", "Name length must be max 32 characters").isLength({
      max: 32,
    }),
    check("email", "Invalid email").isEmail(),
    check("email", "Email length must be max 256 characters").isLength({
      max: 256,
    }),
    check(
      "password",
      "Password should be between 8-32 characters and should include 1 number, 1 symbol, 1 lowercase and 1 uppercase."
    ).isStrongPassword(),
    check("password", "Password should be between 8-32 characters.").isLength({
      max: 32,
    }),
    validateFields,
    emailExists,
  ],
  register
);

module.exports = router;