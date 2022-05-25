/*
  Movement routes
  api/movements
*/

const { Router } = require("express");
const { check } = require("express-validator");
const {
  getMovementsByCurrentUser,
  getTotalsByCurrentUser,
  getMovementById,
  createMovement,
  updateMovement,
  deleteMovement,
} = require("../controllers/movementController");
const {
  categoryExists,
  movementExists,
} = require("../helpers/databaseValidators");
const validateJWT = require("../middlewares/validateJWT");
const validateFields = require("../middlewares/validateFields");
const Movement = require("../models/Movement");

const router = Router();

router.use(validateJWT);

router.get("/", getMovementsByCurrentUser);

router.get("/totals", getTotalsByCurrentUser);

router.get("/:id", [movementExists], getMovementById);

router.post(
  "/",
  [
    check("concept", "Concept is required").not().isEmpty(),
    check("concept", "Concept length must be max 32 characters").isLength({
      max: 32,
    }),
    check("amount", "Amount is required").not().isEmpty(),
    check("amount", "Amount must be between 1 to 100000000").isFloat({
      min: 1,
      max: 100000000,
    }),
    check("date", "date is required").not().isEmpty(),
    check("date", "Invalid date").isDate(),
    check("type", "type is required").not().isEmpty(),
    check("type", "Type must be income or expense").isIn(
      Movement.getAttributes().type.values
    ),
    check("categoryId", "Category is required").not().isEmpty(),
    validateFields,
    categoryExists,
  ],
  createMovement
);

router.put("/:id", [], updateMovement);

router.delete("/:id", [], deleteMovement);

module.exports = router;
