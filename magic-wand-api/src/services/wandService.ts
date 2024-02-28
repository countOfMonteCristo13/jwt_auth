import UserModel from "../models/UserModel";
import WandModel from "../models/WandModel";

const WandService = {

addWand: async (owner: { _id: string}, flexibility:string, length:string, wood:string) => {
  console.log("owner:",owner);
  
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
},

getWands: async () => {
  try {
    const wands = await WandModel.find().populate("owner");

    return wands;
  } catch (error) {
    throw new Error(`Error getting wands: ${error.message}`);
  }
},

getWand: async (id:string) => {
  try {
    const wand = await WandModel.findById(id).populate("owner").exec();
    return wand;
  } catch (error) {
    throw new Error(`Error getting wand with id(${id}): ${error.message}`);
  }
}

}

export default WandService
