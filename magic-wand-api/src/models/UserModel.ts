import { Schema, model } from "mongoose";

const UserSchema = new Schema(
  {
    username: {
      type: String,
      minLength: 3,
      maxLength: 23,
      unique: true,
      required: true,
      trim: true,
    },
    password: {
      type: String,
      minLength: 3,
      maxLength: 23,
      required: true,
      trim: true,
    },
  },
  { timestamps: true }
);

const UserModel = model("User", UserSchema);

export default UserModel;

