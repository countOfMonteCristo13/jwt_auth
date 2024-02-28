const UserService = require("../services/userService");

exports.addUser = async (req, res) => {
  const { username, password } = req.body;

  if (!username || !password) {
    return res.status(400).json({ message: "All fields are required" });
  }

  try {
    const user = await UserService.addUser(username, password);
    res.status(201).json({ message: "User created", user });
  } catch (error) {
    res.status(500).json({ message: "Server error" });
  }
};

exports.getUser = async (req, res) => {
  const { id } = req.params;

  try {
    const user = await UserService.getUserById(id);

    if (!user) {
      return res
        .status(400)
        .json({ message: `There is no user with id: ${id}` });
    }

    res.status(200).json(user);
  } catch (error) {
    res.status(500).json({ message: "Server error", error: error.message });
  }
};
