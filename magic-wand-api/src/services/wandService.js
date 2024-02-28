const WandModel = require("../models/WandModel");
const UserModel = require("../models/UserModel");

const addWand = async (owner, flexibility, length, wood) => {
  const username = owner._id; //setting username to name that has been put in input field for username
  const user = await UserModel.findOne({ username }); //finding user with username: username

  const wand = new WandModel({
    flexibility,
    owner: user._id, // setting ObjectId from user object to owner
    length,
    wood,
  });

  try {
    await wand.save();
    return wand;
  } catch (error) {
    throw new Error(`Error adding wand: ${error.message}`);
  }
};

const getWands = async () => {
  try {
    const wands = await WandModel.find().populate("owner");

    return wands;
  } catch (error) {
    throw new Error(`Error getting wands: ${error.message}`);
  }
};

const getWand = async (id) => {
  try {
    const wand = await WandModel.findById(id).populate("owner").exec();
    return wand;
  } catch (error) {
    throw new Error(`Error getting wand with id(${id}): ${error.message}`);
  }
};

module.exports = { addWand, getWands, getWand };
