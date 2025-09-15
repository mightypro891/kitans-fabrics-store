// functions/routes/authRoutes.js
const express = require("express");
const router = express.Router();

const { register, login, getProfile } = require("../controllers/authController");
const { authMiddleware } = require("../utils/authMiddleware");

// Register a new user
router.post("/register", register);

// Login a user
router.post("/login", login);

// Get profile of logged-in user (protected)
router.get("/profile", authMiddleware, getProfile);

module.exports = router;
