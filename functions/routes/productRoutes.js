const express = require("express");
const router = express.Router();

// Import controller functions
const {
  getAllProducts,
  getProductById,
  createProduct,
  updateProduct,
  deleteProduct,
} = require("../controllers/productController");

// Import middlewares
const { authMiddleware, adminMiddleware } = require("../utils/authMiddleware");

// Public routes
router.get("/", getAllProducts);       // Get all products
router.get("/:id", getProductById);    // Get single product by ID

// Admin-only routes
router.post("/", authMiddleware, adminMiddleware, createProduct);        // Create product
router.put("/:id", authMiddleware, adminMiddleware, updateProduct);      // Update product
router.delete("/:id", authMiddleware, adminMiddleware, deleteProduct);   // Delete product

module.exports = router;
