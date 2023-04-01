import asyncHandler from "express-async-handler";
import Apat from "../models/apatModel.js";

// WIll help to get the data from the db
// Fetch all product
// @route GET /api/products
// @access Public
const getProducts = asyncHandler(async (req, res) => {
  const product = await Apat.find({});

  res.json(product);
});
// Fetch one product
// @route GET /api/products by id
// @access Public
const getProductById = asyncHandler(async (req, res) => {
  const product = await Apat.find({});
  const object = await Apat.findById(req.params.id);

  if (!object) {
    res.status(404);
    throw new Error("Not found");
  } else {
    res.json(object);
  }
  res.json(product);
});
export { getProducts, getProductById };
