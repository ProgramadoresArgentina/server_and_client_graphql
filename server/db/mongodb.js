import "dotenv/config";
import { connect } from "mongoose";
import { userSeeder } from "./seeders/userSeeder.js";

export const dbConnect = async () => {
  const env = process.env.NODE_ENV;
  const DB_URL =
    env === "development" ? process.env.MONGO_URI : process.env.MONGO_ATLAS;

  await connect(DB_URL)
    .then(() => {
      console.log("🚀 Database connected");
      console.log("Creando base de datos...");
      userSeeder();
    })
    .catch((err) => {
      console.log("Database ERROR!!!", err);
    });
};
