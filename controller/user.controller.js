const User = require("../models/User.model");
const bcrypt = require("bcrypt");
const { hash } = require("bcrypt");
const jwt = require("jsonwebtoken");

module.exports.userController = {
  getAllUsers: async (req, res) => {
    const users = await User.find();
    res.json(users);
  },
  registerUser: async (req, res) => {
    try {
      const { login, password } = req.body;

      const hash = await bcrypt.hash(
        password,
        Number(process.env.BCRYPT_ROUNDS)
      );

      const user = await User.create({ login: login, password: hash });
      res.json(user);
    } catch (error) {
      return res.status(400).json({
        error: "ошибка при регистрации: " + error.toString(),
      });
    }
  },
  login: async (req, res) => {
    const { login, password } = req.body;

    const candidate = await User.findOne({ login });

    if (!candidate) {
      return res.status(401).json("Error, not valid LOGIN");
    }

    const valid = await bcrypt.compare(password, candidate.password);

    if (!valid) {
      return res.status(401).json("not valid pass");
    }

    const payload = {
      id: candidate._id,
      login: candidate.login,
    };

    const token = await jwt.sign(payload, process.env.SECRET_JWT_KEY, {
      expiresIn: "48d",
    });

    res.json(token);
  },
};
