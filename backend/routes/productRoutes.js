import Express from "express";
import product from "../data/products.js";
import Apat from "../models/apatModel.js";
import asyncHandler from "express-async-handler";

const router = Express.Router();

// WIll help to get the data from the db
// Fetch all product
// @route GET /api/products
// @access Public
router.get(
  "/",
  asyncHandler(async (req, res) => {
    //pass empty object to get all the data

    const product = await Apat.find({});
    res.json(product);
  })
);
// Fetch one product
// @route GET /api/products by id
// @access Public
router.get(
  "/:id",
  asyncHandler(async (req, res) => {
    const object = await Apat.findById(req.params.id);

    if (!object) {
      res.status(404);
      throw new Error("Not found");
    } else {
      res.json(object);
    }
  })
);

export default router;
