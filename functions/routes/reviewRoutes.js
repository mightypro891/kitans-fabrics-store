// functions/routes/reviewRoutes.js
const express = require("express");
const router = express.Router();

// Import controller
const {
  createReview,
  getReviewsByProduct,
  deleteReview,
} = require("../controllers/reviewController");

// ✅ Import & destructure middlewares correctly
const { authMiddleware, adminMiddleware } = require("../utils/authMiddleware");

// Add a new review for a product (Authenticated users)
router.post("/:productId", authMiddleware, createReview);

// Get all reviews for a product (Public)
router.get("/:productId", getReviewsByProduct);

// Delete a review (Admin only)
router.delete("/:id", authMiddleware, adminMiddleware, deleteReview);

module.exports = router;
