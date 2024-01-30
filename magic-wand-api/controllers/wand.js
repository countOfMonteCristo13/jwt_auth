const WandModel = require("../models/wandModel");
const mongoose = require("mongoose");

exports.hello = (req, res) => {
  res.send("hello!");
};

exports.addWand = async (req, res) => {
  const { flexibility, owner, length, wood } = req.body;

  console.log(owner._id);

  const wand = new WandModel({
    flexibility,
    owner,
    length,
    wood,
  });

  try {
    if (!flexibility || !owner || !length || !wood) {
      return res.status(400).json("All field are required!");
    }
    await wand.save();
    res.status(201).json({ message: "Wand created", ...wand });
  } catch (error) {
    if (
      error instanceof mongoose.Error.ValidationError ||
      error.code === 11000
    ) {
      return res
        .status(400)
        .json({ message: "Validation error", error: error.message });
    }

    res.status(500).json({ message: "Server error", error: error.message });
  }
};

exports.getWands = async (req, res) => {
  try {
    const wands = await WandModel.find();

    if (!wands || wands.length === 0) {
      return res.status(404).json({ message: "No wands found" });
    }

    res.status(200).json(wands);
  } catch (error) {
    res.status(500).json({ message: "Server error", error: error.message });
  }
};

exports.getWand = async (req, res) => {
  const { id } = req.params;
  res.send(id);
};
