const UserModel = require("../models/UserModel");

exports.addUser = async (req, res) => {
  const { username, password } = req.body;

  const user = new UserModel({
    username,
    password,
  });

  try {
    if (!username || !password) {
      return res.status(400).json({ message: "All fields are required" });
    }
    await user.save();
    res.status(201).json({ message: "User created" });
  } catch (error) {
    res.status(500).json({ message: "Server error" });
  }
};
