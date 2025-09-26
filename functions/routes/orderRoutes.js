// routes/orderRoutes.js
const express = require("express");
const router = express.Router();
const {
  createOrder,
  getUserOrders,
  getAllOrders,
  updateOrderStatus,
} = require("../controllers/orderController");
const { authMiddleware, adminMiddleware } = require("../utils/authMiddleware");

// User creates a new order
router.post("/", authMiddleware, createOrder);

// User gets their own orders
router.get("/my-orders", authMiddleware, getUserOrders);

// Admin gets all orders
router.get("/", authMiddleware, adminMiddleware, getAllOrders);

// Admin updates order status
router.put("/:id", authMiddleware, adminMiddleware, updateOrderStatus);

module.exports = router;
