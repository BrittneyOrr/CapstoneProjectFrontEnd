import { useState } from "react";
import StarRating from "./StarRating";
import { submitReview } from "../api";

const ReviewForm = ({ movieId, userId }) => {
  const [rating, setRating] = useState("");
  const [comment, setComment] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    // Submit review data to backend
    const reviewData = {
        movie_id: movieId,
        rating: rating,
        comment: comment,
        review_date: new Date().toISOString()
    };
    try {
        // Call function to submit review data to server
        await submitReview(reviewData);
        alert('Review submitted successfully!');
        // Clear form fields after submission
        console.log(reviewData);
        setRating('');
        setComment('');
    } catch (error) {
        // Handle errors if submission fails
        console.error('Error submitting review:', error);
        // Display an error message to the user
        alert('Failed to submit review. Please try again later.');
    }
};


  return (
    <fieldset
      className="ReviewForm"
      style={{
        backgroundColor: "#222",
        padding: "20px",
        marginTop: "20px",
        color: "white"
      }}
    >
      <h5 style={{ color: "white" }}>Rate this Movie:</h5>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label style={{ color: "white" }}>Rating:</label>
          {/* Replace the number input with the StarRating component */}
          <StarRating value={rating} onChange={setRating} />
        </div>
        <div className="form-group">
          <label style={{ color: "white" }}>Comment:</label>
          <textarea
            value={comment}
            onChange={(e) => setComment(e.target.value)}
            className="form-control"
            rows="3"
            placeholder="Write your comment..."
            style={{ marginBottom: "10px", width: "100%" }}
            required
          />
        </div>
        <button type="submit" className="btn btn-primary">
          Submit Review
        </button>
      </form>
    </fieldset>
  );
};

export default ReviewForm;



