import UserModel from "../../models/User.js";
import { UsersMock } from "../mock/usersMock.js";

export const userSeeder = async () => {
  await UserModel.deleteMany();
  await Promise.all(
    UsersMock.map(async ({ firstName, lastName, email, gender }) => {
      await UserModel.create({
        email,
        firstName,
        gender,
        lastName,
      });
    })
  );
  console.log("BASE DE DATOS CARGADA!");
};
