const mongoose = require("mongoose");

const WandService = require("../services/wandService");

exports.addWand = async (req, res) => {
  const { flexibility, owner, length, wood } = req.body;

  if (!flexibility || !owner || !length || !wood) {
    return res.status(400).json("All field are required!");
  }

  try {
    const wand = await WandService.addWand(owner, flexibility, length, wood);
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
    const wands = await WandService.getWands();

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
    const wand = await WandService.getWand(id);

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

exports.protected = async (req, res) => {
  res.json({ message: "Ovo je zaštićeni resurs", user: req.user });
};
