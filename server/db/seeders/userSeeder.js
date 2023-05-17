import UserModel from "../../models/User.js";
import { encryptPassowrd } from "../../utilities/encrypt.js";
import { UsersMock } from "../mock/usersMock.js";

export const userSeeder = async () => {
  await UserModel.deleteMany();
  await Promise.all(
    UsersMock.map(async ({ firstName, lastName, email, gender, password }) => {
      await UserModel.create({
        email,
        firstName,
        gender,
        lastName,
        password: encryptPassowrd(password),
      });
    })
  );
  console.log("BASE DE DATOS CARGADA!");
};
