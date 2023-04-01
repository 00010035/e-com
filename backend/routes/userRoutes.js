import Express from "express";
import { authUser, getUserProfile } from "../controllers/userController.js";
import { protect } from "../middleware/authMiddleware.js";

const router = Express.Router();

router.post("/login", authUser);
router.route("/profile").get(protect, getUserProfile);

export default router;
