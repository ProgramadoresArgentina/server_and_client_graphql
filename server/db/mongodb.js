import "dotenv/config";
import { connect } from "mongoose";
import { userSeeder } from "./seeders/userSeeder.js";

export const dbConnect = async () => {
  const DB_URL = process.env.MONGO_URI;

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
