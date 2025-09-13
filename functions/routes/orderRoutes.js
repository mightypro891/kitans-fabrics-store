const express = require("express");
const router = express.Router();
const {
  createOrder,
  getUserOrders,
  getAllOrders,
  updateOrderStatus,
} = require("../controllers/orderController");

// User creates a new order
router.post("/", createOrder);

// User gets their own orders
router.get("/my-orders", getUserOrders);

// Admin gets all orders
router.get("/", getAllOrders);

// Admin updates order status
router.put("/:id", updateOrderStatus);

module.exports = router;
