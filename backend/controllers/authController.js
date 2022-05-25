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
    const token = await generateJWT(user.id, user.name);

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

const login = async (req, res) => {
  const { email, password } = req.body;

  try {
    const user = await User.findOne({ where: { email } });

    if (!user) {
      return res.status(400).json({
        ok: false,
        msg: `User email does not exist`,
      });
    }

    // Verify if passwords match
    const validPassword = bcryptjs.compareSync(password, user.password);
    if (!validPassword) {
      return res.status(401).json({
        ok: false,
        msg: "Invalid password.",
      });
    }

    // Generate JWT
    const token = await generateJWT(user.id, user.name);

    return res.status(200).json({
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

const renewToken = async (req, res) => {
  const { id, name } = req;

  try {
    const token = await generateJWT(id, name);
    return res.json({
      ok: true,
      user: {
        id,
        name,
      },
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
  login,
  renewToken,
};
