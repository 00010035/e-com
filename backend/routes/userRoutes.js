import Express from "express";
import {
  authUser,
  getUserProfile,
  registerUser,
  updateUserPrfile,
} from "../controllers/userController.js";
import { protect } from "../middleware/authMiddleware.js";

const router = Express.Router();
router.route("/").post(registerUser);
router.post("/login", authUser);
router
  .route("/profile")
  .get(protect, getUserProfile)
  .put(protect, updateUserProfile);

export default router;
