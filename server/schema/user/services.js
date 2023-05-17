import UserModel from "../../models/User.js";
import { encryptPassowrd } from "../../utilities/encrypt.js";

export const userServices = {
  createUser: async (user) => {
    const newUser = await UserModel.create({
      ...user,
      password: encryptPassowrd(user.password),
    });

    return newUser;
  },
  getUsers: async () => {
    const users = await UserModel.find();

    return users;
  },
  getUserByEmail: async (email) => {
    const user = await UserModel.findOne({ email });

    return user;
  },
};
