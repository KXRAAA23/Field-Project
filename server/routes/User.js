import express from "express";
import {
  UserLogin,
  UserRegister,
  addWorkout,
  getUserDashboard,
  getWorkoutsByDate,
} from "../controllers/User.js";
import { verifyToken } from '../middleware/verifyToken.js'; // Import verifyToken

const router = express.Router();

router.post("/signup", UserRegister);
router.post("/signin", UserLogin);

// Protect these routes with the verifyToken middleware
router.get("/dashboard", verifyToken, getUserDashboard); // Protected route
router.get("/workout", verifyToken, getWorkoutsByDate); // Protected route
router.post("/workout", verifyToken, addWorkout); // Protected route

export default router;
