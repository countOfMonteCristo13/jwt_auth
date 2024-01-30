const { Schema, model } = require("mongoose");
const UserModel = require("./UserModel");

const WoodEnum = ["Alder", "Acacia", "Apple", "Ash", "Blackthorn", "Cherry"];

const WandSchema = new Schema({
  flexibility: {
    type: String,
    maxLength: 50,
    trim: true,
    required: true,
  },
  owner: {
    type: UserModel.schema,
    required: true,
  },
  length: {
    type: Number,
    min: 1,
    required: true,
  },
  wood: {
    type: String,
    enum: WoodEnum,
    trim: true,
    required: true,
  },
});

const WandModel = model("Wand", WandSchema);

module.exports = WandModel;
