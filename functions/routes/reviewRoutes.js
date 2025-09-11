const express = require("express");
const {
  createReview,
  getReviewsByProduct,
  deleteReview,
} = require("../controllers/reviewController");
const { authMiddleware, adminMiddleware } = require("../utils/authMiddleware");

const router = express.Router();

// Public
router.get("/:productId", getReviewsByProduct);

// Authenticated users
router.post("/:productId", authMiddleware, createReview);

// Admin only
router.delete("/:id", authMiddleware, adminMiddleware, deleteReview);

module.exports = router;
