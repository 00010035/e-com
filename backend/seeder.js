import mongoose from "mongoose";
import dotenv from "dotenv";
import users from "./data/users.js";
import products from "./data/products.js";
import User from "./models/userModel.js";
import apat from "./models/apatModel.js";
import avaliable from "./models/avaliableModule.js";
import connectDB from "./config/db.js";

dotenv.config();

connectDB();

const importData = async () => {
  try {
    await avaliable.deleteMany();
    await apat.deleteMany();
    await User.deleteMany();

    const createdUsers = await User.insertMany(users);
    const adminUser = createdUsers[0]._id;

    const sampleProduct = products.map((product) => {
      return { ...product, user: adminUser };
    });

    await apat.insertMany(sampleProduct);
    console.log("Data Imported");
    process.exit();
  } catch (error) {
    console.error(`${error}`);
    process.exit(1);
  }
};

const deleteData = async () => {
  try {
    await avaliable.deleteMany();
    await apat.deleteMany();
    await User.deleteMany();

    console.log("Data Deleted");
    process.exit();
  } catch (error) {
    console.error(`${error}`);
    process.exit(1);
  }
};
if (process.argv[2] === "-d") {
  deleteData();
} else {
  importData();
}
