const Movement = require("../models/Movement");

const getMovementsByCurrentUser = async (req, res) => {
  const { id: userId } = req;
  const { page = 1, limit = 10 } = req.query;

  try {
    // Paginate user movements
    const movement = await Movement.findAll({
      where: { userId },
      offset: (page - 1) * Number(limit),
      limit: Number(limit),
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
  const { id: movementId } = req.params;
  try {
    const movement = await Movement.findByPk(movementId, {
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

const updateMovement = async (req, res) => {
  const { id: userId } = req;
  const { id: movementId } = req.params;
  const { concept, amount, date, categoryId } = req.body;

  try {
    let movement = {
      concept,
      amount,
      date,
      categoryId,
    };

    // Update movement and get changes
    movement = await Movement.update(movement, {
      where: {
        id: movementId,
        userId,
      },
    });
    movement = await Movement.findByPk(movementId);

    return res.json({
      movement,
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

const deleteMovement = async (req, res) => {
  const { id: userId } = req;
  const { id: movementId } = req.params;

  try {
    await Movement.destroy({
      where: {
        id: movementId,
        userId,
      },
    });

    return res.json({
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

module.exports = {
  getMovementsByCurrentUser,
  getTotalsByCurrentUser,
  getMovementById,
  createMovement,
  updateMovement,
  deleteMovement,
};
