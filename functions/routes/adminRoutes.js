const express = require("express");
const {
  getDashboardStats,
  manageUsers,
} = require("../controllers/adminController");
const { authMiddleware, adminMiddleware } = require("../utils/authMiddleware");

const router = express.Router();

// Admin-only routes
router.get("/dashboard", authMiddleware, adminMiddleware, getDashboardStats);
router.put("/manage-users/:id", authMiddleware, adminMiddleware, manageUsers);

module.exports = router;
