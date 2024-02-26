// const UserModel = require("../models/UserModel");
const jwt = require("jsonwebtoken");
require("dotenv").config();
const UserService = require("../services/userService");

exports.handleLogin = async (req, res) => {
  const { username, password } = req.body;

  const user = await UserService.getUser(username, password);

  if (!user) {
    return res.status(400).json({ message: "Incorrect username or password" });
  }

  const accessToken = jwt.sign({ username }, process.env.ACCESS_TOKEN_SECRET, {
    expiresIn: "10m",
  });
  console.log(accessToken);
  res.status(200).json({ accessToken: accessToken });
};
