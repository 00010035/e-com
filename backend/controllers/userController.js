import asyncHandler from "express-async-handler";
import User from "../models/userModel.js";
import generateToken from "../utils/generateToken.js";

// Auth user & get token
// @route POST /api/user/login
// @access Public
const authUser = asyncHandler(async (req, res) => {
  const { email, password } = req.body;
  const user = await User.findOne({ email });

  if (user && (await user.matchPassword(password))) {
    res.json({
      _id: user._id,
      name: user.name,
      email: user.email,
      isAdmin: user.isAdmin,
      token: generateToken(user._id),
    });
  } else {
    res.status(401);
    throw new Error("Wrong email or password");
  }
});

// GET user profile
// @route POST /api/users/profile
// @access Private
const getUserProfile = asyncHandler(async (req, res) => {
  const user = await User.findById(req.user._id);

  if (user) {
    res.json({
      _id: user._id,
      name: user.name,
      email: user.email,
      isAdmin: user.isAdmin,
    });
  } else {
    res.status(404);
    throw new Error("User not found");
  }
});

// Register a new user
// @route POST /api/user
// @access Public
const registerUser = asyncHandler(async (req, res) => {
  const { name, email, phone, password } = req.body;
  const userExists = await User.findOne({ $or: [{ email }, { phone }] });

  if (userExists) {
    res.status(400);
    throw new Error("This email or phone number already exists");
  }

  const user = await User.create({
    name,
    email,
    phone,
    password,
  });

  if (user) {
    res.status(201).json({
      _id: user._id,
      name: user.name,
      email: user.email,
      phone: user.phone,
      isAdmin: user.isAdmin,
      token: generateToken(user._id),
    });
  } else {
    res.status(400);
    throw new Error("Wrong data");
  }
});

// Update a  user
// @route GET /api/users/profile
// @access Private
const updateUserProfile = asyncHandler(async (req, res) => {
  const { name, email, phone, password } = req.body;

  const user = await User.findById(req.user._id);

  if (user) {
    user.name = name || user.name;
    user.email = email || user.email;
    user.phone = phone || user.phone;
    if (password) {
      user.password = password;
    }

    const updatedUser = await user.save();

    res.json({
      _id: updatedUser._id,
      name: updatedUser.name,
      email: updatedUser.email,
      phone: updatedUser.phone,
      isAdmin: updatedUser.isAdmin,
      token: generateToken(updatedUser._id),
    });
  } else {
    res.status(404);
    throw new Error("User is not found");
  }
});

export { authUser, getUserProfile, registerUser, updateUserProfile };
