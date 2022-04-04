import React from "react";
import "./Review.css";

const Review = (props) => {
  const { name, rating, peview } = props.review;
  return (
    <div className="review">
      <h4>{name}</h4>
      <p>
        <span>Review:</span> {peview}
      </p>
      <p>
        <small>Ratings: {rating}</small>
      </p>
    </div>
  );
};

export default Review;
