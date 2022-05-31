const { Op } = require("sequelize");
const Movement = require("../models/Movement");
const allowedCollections = ["movements"];

const searchMovements = async (term = "", req, res) => {
  const { page = 1, limit = 10 } = req.query;
  const { id: userId } = req;
  try {
    // Searching for the term
    const movements = await Movement.findAndCountAll({
      where: {
        userId,
        [Op.or]: [
          {
            concept: {
              [Op.substring]: term,
            },
          },
          {
            amount: {
              [Op.substring]: term,
            },
          },
          {
            date: {
              [Op.substring]: term,
            },
          },
        ],
      },
      offset: (page - 1) * Number(limit),
      limit: Number(limit),
      order: [["date", "DESC"]],
      include: ["category"],
    });

    return res.json({
      ok: true,
      results: movements,
    });
  } catch (error) {
    console.log(error);
    return res.status(500).json({
      ok: false,
      msg: "Please, contact the administrator",
    });
  }
};

const search = async (req, res) => {
  const { collection, term } = req.params;

  if (!allowedCollections.includes(collection)) {
    return res.status(400).json({
      ok: false,
      msg: `Allowed collections are ${allowedCollections}`,
    });
  }

  switch (collection) {
    case "movements":
      searchMovements(term, req, res);
      break;
    default:
      console.log(`Error when searching for collection ${collection}`);
      return res.status(500).json({
        ok: false,
        msg: "Please, contact the administrator",
      });
  }
};

module.exports = {
  search,
};
