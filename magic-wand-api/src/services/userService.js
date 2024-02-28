const UserModel = require("../models/UserModel");

const addUser = async (username, password) => {
  const newUser = new UserModel({
    username,
    password,
  });

  try {
    const user = await newUser.save();
    return user;
  } catch (error) {
    throw new Error(`Error adding user: ${error.message}`);
  }
};

const getUserById = async (id) => {
  try {
    const user = await UserModel.findById(id);
    return user;
  } catch (error) {
    throw new Error(`Error getting user: ${error.message}`);
  }
};

const getUser = async (username, password) => {
  try {
    const user = await UserModel.findOne({ username, password });
    return user;
  } catch (error) {
    throw new Error(`Error getting user: ${error.message}`);
  }
};

module.exports = { addUser, getUserById, getUser };
