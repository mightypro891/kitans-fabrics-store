const express = require("express");
const router = express.Router();

// import controller correctly
const reviewController = require("../controllers/reviewController");

// (optional) import your auth middleware if you have one
const auth = require("../middleware/auth");

// Add a new review for a product
router.post("/:productId", auth, reviewController.createReview);

// Get all reviews for a product
router.get("/:productId", reviewController.getReviewsByProduct);

// Delete a review (admin only)
router.delete("/:id", auth, reviewController.deleteReview);

module.exports = router;
