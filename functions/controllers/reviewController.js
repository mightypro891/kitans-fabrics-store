const Review = require("../models/Review");

// Add review
exports.createReview = async (req, res) => {
  try {
    const review = new Review({
      ...req.body,
      user: req.user.id,
      product: req.params.productId,
    });
    await review.save();
    res.status(201).json(review);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// Get reviews for product
exports.getReviewsByProduct = async (req, res) => {
  try {
    const reviews = await Review.find({ product: req.params.productId })
      .populate("user", "name")
      .sort({ createdAt: -1 });
    res.json(reviews);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// Delete review (Admin only)
exports.deleteReview = async (req, res) => {
  try {
    const review = await Review.findByIdAndDelete(req.params.id);
    if (!review) return res.status(404).json({ msg: "Review not found" });
    res.json({ msg: "Review deleted" });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};