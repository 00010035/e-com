import Express from "express";
import {
  getProducts,
  getProductById,
} from "../controllers/productController.js";
const router = Express.Router();

// WIll help to get the data from the db

router.route("/").get(getProducts);
router.route("/:id").get(getProductById);

export default router;
