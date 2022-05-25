const User = require("../models/User");

const emailExists = async (req, res, next) => {
  const { email } = req.body;
  const userExists = await User.findOne({ where: { email } });

  if (userExists) {
    return res.status(400).json({
      ok: false,
      msg: `Email ${email} already exists`,
    });
  }

  next();
};

module.exports = {
  emailExists,
};
