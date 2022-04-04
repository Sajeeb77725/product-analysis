import React from "react";
import { useNavigate } from "react-router-dom";
import useReviews from "../../hooks/useReviews";
import Review from "../Review/Review";
import "./ReviewAtHome.css";

const ReviewAtHome = () => {
  const [reviews, setReviews] = useReviews();

  const navigate = useNavigate();
  const allReviews = () => {
    const path = `/reviews`;
    navigate(path);
  };
  return (
    <div className="reviews-container">
      <h1>Customars Reviews(3)</h1>
      <div className="reviews-in-home">
        {reviews.slice(0, 3).map((review) => (
          <Review key={review.id} review={review}></Review>
        ))}
      </div>
      <button onClick={allReviews}>See All Reviews</button>
    </div>
  );
};

export default ReviewAtHome;
