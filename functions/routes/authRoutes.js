const express = require("express");
const { register, login, getProfile } = require("../controllers/authController");
const { authMiddleware } = require("../utils/authMiddleware");

const router = express.Router();

// Register new user
router.post("/register", register);

// Login
router.post("/login", login);

// Get profile (protected)
router.get("/profile", authMiddleware, getProfile);

module.exports = router;