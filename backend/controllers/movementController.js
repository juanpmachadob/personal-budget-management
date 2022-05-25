const Movement = require("../models/Movement");

const getMovementsByCurrentUser = async (req, res) => {
  const { id: userId } = req;
  const { page = 1, limit = 10 } = req.query;

  try {
    // Paginate user movements
    const movement = await Movement.findAll({
      where: { userId },
      offset: (page - 1) * limit,
      limit,
      include: ["category"],
    });

    return res.json({
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
  getMovementsByCurrentUser,
  createMovement,
};
