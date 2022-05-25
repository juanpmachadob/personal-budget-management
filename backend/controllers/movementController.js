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
      order: [["date", "DESC"]],
      include: ["category"],
    });

    return res.json({
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

const getTotalsByCurrentUser = async (req, res) => {
  const { id: userId } = req;

  try {
    // Get the sum of the incomes and expenses of the current user.
    const [incomes, expenses] = await Promise.all([
      Movement.sum("amount", { where: { userId, type: "income" } }),
      Movement.sum("amount", { where: { userId, type: "expense" } }),
    ]);

    return res.json({
      ok: true,
      totals: { general: incomes - expenses, incomes, expenses },
    });
  } catch (error) {
    console.log(error);
    return res.status(500).json({
      ok: false,
      msg: "Please, contact the administrator",
    });
  }
};

const getMovementById = async (req, res) => {
  const { id } = req.params;
  try {
    const movement = await Movement.findByPk(id, { include: ["category"] });
    return res.json({
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

const updateMovement = async (req, res) => {};

const deleteMovement = async (req, res) => {};

module.exports = {
  getMovementsByCurrentUser,
  getTotalsByCurrentUser,
  getMovementById,
  createMovement,
  updateMovement,
  deleteMovement,
};
