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
    if (error instanceof mongoose.Error.ValidationError) {
      return res
        .status(400)
        .json({ message: "Validation error", error: error.message });
    }

    if (error.code === 11000) {
      return res
        .status(400)
        .json({ message: "Validation error", error: error.message });
    }

    res.status(500).json({ message: "Server error", error: error.message });
  }
};

exports.getWands = async (req, res) => {
  res.send(["wand1", "wand2", "wand3"]);
};

exports.getWand = async (req, res) => {
  const { id } = req.params;
  res.send(id);
};
