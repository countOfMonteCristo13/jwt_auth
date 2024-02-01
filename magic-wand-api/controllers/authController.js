const UserModel = require("../models/UserModel");
const jwt = require("jsonwebtoken");
require("dotenv").config();

exports.handleLogin = async (req, res) => {
  const { username, password } = req.body;

  const user = await UserModel.findOne({
    username: username,
    password: password,
  });
  if (!user) {
    return res.status(400).json({ message: "User not found" });
  }

  const accessToken = jwt.sign({ username }, process.env.ACCESS_TOKEN_SECRET, {
    expiresIn: "10m",
  });
  const refreshToken = jwt.sign(
    { username },
    process.env.REFRESH_TOKEN_SECRET,
    {
      expiresIn: "1d",
    }
  );

  res.status(200).json({ accessToken: accessToken });
};
