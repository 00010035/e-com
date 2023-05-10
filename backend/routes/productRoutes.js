import Express from "express";
import {
  getProducts,
  getProductById,
  deleteProduct,
  updateProduct,
  createProduct,
} from "../controllers/productController.js";
import { protect } from "../middleware/authMiddleware.js";
const router = Express.Router();

// WIll help to get the data from the db

router.route("/").get(getProducts).post(protect, createProduct);
router
  .route("/:id")
  .get(getProductById)
  .delete(protect, deleteProduct)
  .put(protect, updateProduct);

export default router;
