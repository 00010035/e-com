import mongoose from "mongoose";
import bcrypt from "bcryptjs";
const phoneRegex = /^[0-9]+$/; // regular expression to match only numbers

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
      type: String,
      required: true,
      unique: true,
      match: phoneRegex,
    },
  },
  {
    timestamps: true,
  }
);

userReg.methods.matchPassword = async function (enteredPassword) {
  return await bcrypt.compare(enteredPassword, this.password);
};

userReg.pre("save", async function (next) {
  if (!this.isModified("password")) {
    next();
  }

  const salt = await bcrypt.genSalt(10);
  this.password = await bcrypt.hashSync(this.password, salt);
});

const User = mongoose.model("user", userReg);
export default User;
