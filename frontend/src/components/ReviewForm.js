import React, { useState } from "react";
import axios from "axios";

function ReviewForm({ productId, refreshReviews }) {
  const [rating, setRating] = useState(5);
  const [comment, setComment] = useState("");

  const submitReview = async () => {
    await axios.post("/api/reviews", { productId, rating, comment });
    setComment("");
    refreshReviews();
  };

  return (
    <div>
      <h3>Leave a Review</h3>
      <textarea value={comment} onChange={(e) => setComment(e.target.value)} />
      <br />
      <button onClick={submitReview}>Submit</button>
    </div>
  );
}

export default ReviewForm;