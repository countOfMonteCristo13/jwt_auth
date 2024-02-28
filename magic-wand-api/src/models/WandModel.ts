import mongoose, {Schema, model} from "mongoose";

const WoodEnum = ["Alder", "Acacia", "Apple", "Ash", "Blackthorn", "Cherry"];

const WandSchema = new Schema(
  {
    flexibility: {
      type: String,
      maxLength: 50,
      trim: true,
      required: true,
    },
    owner: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
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
  },
  { timestamps: true }
);

const WandModel = model("Wand", WandSchema);

export default WandModel
