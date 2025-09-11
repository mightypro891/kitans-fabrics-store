import React from "react";

function ReviewList({ reviews }) {
  return (
    <div>
      <h3>Customer Reviews</h3>
      {reviews.map((rev, i) => (
        <div key={i} className="card">
          <p>{rev.comment}</p>
          <strong>Rating: {rev.rating}/5</strong>
        </div>
      ))}
    </div>
  );
}

export default ReviewList;