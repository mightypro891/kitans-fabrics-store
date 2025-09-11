const express = require("express");
const {
  createOrder,
  getUserOrders,
  getAllOrders,
  updateOrderStatus,
} = require("../controllers/orderController");
const { authMiddleware, adminMiddleware } = require("../utils/authMiddleware");

const router = express.Router();

// User routes
router.post("/", authMiddleware, createOrder);
router.get("/my-orders", authMiddleware, getUserOrders);

// Admin routes
router.get("/", authMiddleware, adminMiddleware, getAllOrders);
router.put("/:id", authMiddleware, adminMiddleware, updateOrderStatus);

module.exports = router;