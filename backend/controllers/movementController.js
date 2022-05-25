const Movement = require("../models/Movement");

const createMovement = async (req, res) => {
  const { concept, amount, date, type, categoryId } = req.body;

  try {
    let movement = {
      concept,
      amount,
      date,
      type,
      categoryId,
      userId: req.id,
    };

    movement = await Movement.create(movement);

    return res.status(201).json({
      ok: true,
      movement,
    });
  } catch (error) {
    console.log(error);
    return res.status(500).json({
      ok: false,
      msg: "Please, contact the administrator",
    });
  }
};

module.exports = {
  createMovement,
};
