const bcryptjs = require("bcryptjs");
const User = require("../models/User");
const generateJWT = require("../helpers/jwt");

const register = async (req, res) => {
  const { name, email, password } = req.body;

  try {
    // Encrypt password and create user
    const salt = bcryptjs.genSaltSync();
    let user = {
      name,
      email,
      password: bcryptjs.hashSync(password, salt),
    };

    user = await User.create(user);

    // Generate JWT
    const token = await generateJWT(user.id);

    return res.status(201).json({
      ok: true,
      user,
      token,
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
  register,
};
