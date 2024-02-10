const WandModel = require("../models/WandModel");
const UserModel = require("../models/UserModel");
const mongoose = require("mongoose");

exports.addWand = async (req, res) => {
  const { flexibility, owner, length, wood } = req.body;

  if (!flexibility || !owner || !length || !wood) {
    return res.status(400).json("All field are required!");
  }

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
    res.status(201).json({ message: "Wand created", ...wand });
  } catch (error) {
    if (
      error instanceof mongoose.Error.ValidationError ||
      error.code === 11000
    ) {
      return res.status(400).json({
        message: "Validation error",
        error: `${owner} is not a valid user`,
      });
    }

    res.status(500).json({ message: "Server error", error: error.message });
  }
};

exports.getWands = async (req, res) => {
  try {
    const wands = await WandModel.find().populate("owner");

    if (!wands) {
      return res.status(404).json({ message: "No wands found" });
    }

    res.status(200).json(wands);
  } catch (error) {
    res.status(500).json({ message: "Server error", error: error.message });
  }
};

exports.getWand = async (req, res) => {
  const { id } = req.params;

  try {
    const wand = await WandModel.findById(id).populate("owner").exec();

    if (!wand) {
      return res
        .status(404)
        .json({ message: `There is not a wand with id of: ${id}` });
    }
    res.status(200).json(wand);
  } catch (error) {
    res.status(500).json({ message: "Server error", error: error.message });
  }
};
