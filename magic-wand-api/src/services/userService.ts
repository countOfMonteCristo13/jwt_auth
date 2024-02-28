import UserModel from "../models/UserModel";

const UserService = {
  addUser: async (username: string, password: string) => {
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
  },

  getUserById: async (id: string) => {
    try {
      const user = await UserModel.findById(id);
      return user;
    } catch (error) {
      throw new Error(`Error getting user: ${error.message}`);
    }
  },

  getUser: async (username: string, password: string) => {
    try {
      const user = await UserModel.findOne({ username, password });
      return user;
    } catch (error) {
      throw new Error(`Error getting user: ${error.message}`);
    }
  }
};

export default UserService;
