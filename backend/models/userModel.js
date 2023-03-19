import mongoose from "mongoose";

const userReg = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
    },
    password: {
      type: String,
      required: true,
    },
    isAdmin: {
      type: Boolean,
      required: true,
      default: false,
    },
    phone: {
      type: Number,
      required: true,
      unique: true,
    },
  },
  {
    timestamps: true,
  }
);
const user = mongoose.model("user", userReg);
export default user;
