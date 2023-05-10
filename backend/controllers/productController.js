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
  const object = await Apat.findById(req.params.id);

  if (!object) {
    res.status(404);
    throw new Error("Not found");
  } else {
    res.json(object);
  }
  res.json(product);
});

// @desc Delete a product
// @route DELETE /api/products by id
// @access Public
const deleteProduct = asyncHandler(async (req, res) => {
  const object = await Apat.findById(req.params.id);

  if (object) {
    if (req.user._id === product.user._id) {
      await object.deleteOne({ _id: req.params.id });
      res.json({ message: "Product removed" });
    } else {
      res.status(403);
      throw new Error("You are not authorized to delete this product");
    }
  } else {
    res.status(404);
    throw new Error("Product not found");
  }
});

// @desc Create a product
// @route POST /api/products
// @access Public

const createProduct = asyncHandler(async (req, res) => {
  const product = new Apat({
    name: "Name of the house",
    price: 0,
    user: req.user._id,
    image: "/images/product-2.jpg",
    category: "Rent",
    rating: 4.5,
    numReviews: 10,
    location: "Amir Temur",
    description: "Description",
  });
  const createdProduct = await product.save();
  res.status(201).json(createdProduct);
});

// @desc Update a product
// @route PUT /api/products/:id
// @access Public

const updateProduct = asyncHandler(async (req, res) => {
  const {
    name,
    price,
    description,
    image,
    category,
    rating,
    numReviews,
    location,
  } = req.body;

  const product = await Apat.findById(req.params.id);

  if (product) {
    product.name = name;
    product.price = price;
    product.description = description;
    product.image = image;
    product.category = category;
    product.rating = rating;
    product.numReviews = numReviews;
    product.location = location;

    const updatedProduct = await product.save();
    res.json(updatedProduct);
  } else {
    res.status(404);
    throw new Error("Product not found");
  }
});

export {
  getProducts,
  getProductById,
  deleteProduct,
  createProduct,
  updateProduct,
};
