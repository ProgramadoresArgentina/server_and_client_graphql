import { model, Schema } from "mongoose";

const UserSchema = new Schema(
  {
    email: {
      type: String,
    },
    lastName: {
      type: String,
    },
    firstName: {
      type: String,
    },
    gender: {
      type: String,
    },
    password: {
      type: String,
    },
  },
  {
    timestamps: true,
  }
);

const UserModel = model("User", UserSchema);

export default UserModel;
