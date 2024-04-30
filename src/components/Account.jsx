import React, { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';

const Account = () => {
  // State for user reviews, comments, loading, and form data
  const [userReviews, setUserReviews] = useState([]);
  const [userComments, setUserComments] = useState([]);
  const [loading, setLoading] = useState(true);
  const [editedReview, setEditedReview] = useState('');
  const [editedRating, setEditedRating] = useState(0);

  // Fetch user reviews and comments on component mount
  useEffect(() => {
    const fetchUserReviewsAndComments = async () => {
      try {
        const responseReviews = await fetch('/api/reviews'); // Endpoint to fetch reviews
        const dataReviews = await responseReviews.json();
        setUserReviews(dataReviews);

        const responseComments = await fetch('/api/comments'); // Endpoint to fetch comments
        const dataComments = await responseComments.json();
        setUserComments(dataComments);

        setLoading(false);
      } catch (error) {
        console.error('Error fetching reviews and comments:', error);
      }
    };

    fetchUserReviewsAndComments();
  }, []);

  // Handle editing a review
  const handleEditReview = async (reviewId, newReview, newRating) => {
    try {
      const response = await fetch(`/api/reviews/${reviewId}`, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ review: newReview, rating: newRating }),
      });
      if (!response.ok) throw new Error('Error updating review');
      // Update the userReviews state with the updated review
      const updatedReviews = userReviews.map((review) =>
        review.id === reviewId ? { ...review, review: newReview, rating: newRating } : review
      );
      setUserReviews(updatedReviews);
      setEditedReview('');
      setEditedRating(0);
    } catch (error) {
      console.error('Error updating review:', error);
    }
  };

  // Render the Account component UI
  return (
    <div style={{ textAlign: 'center' }}>
    <h1 style={{ marginBottom: '50px' }}>Your Account</h1>
    <h1>Your Reviews</h1>
      <ul>
        {userReviews.map((review) => (
          <li key={review.id}>
            <div>
              <strong>Movie:</strong> {review.movie_id} {/* Assuming movie_id is present in the review data */}
            </div>
            <div>
              <strong>Review:</strong> {review.review}
            </div>
            {/* Display the current rating and allow editing */}
            <div>
              <strong>Rating:</strong> 
              {[...Array(5)].map((_, index) => (
                <span 
                    key={index}
                    style={{ cursor: 'pointer' }}
                    onClick={() => setEditedRating(index + 1)}
                >
                    {index < editedRating ? '★' : '☆'}
                </span>
              ))}
            </div>
            {/* Include edit and delete buttons for reviews */}
            <button onClick={() => handleEditReview(review.id, editedReview, editedRating)}>Edit Review</button>
            {/* Implement delete review functionality here */}
          </li>
        ))}
      </ul>

      {/* Render the ReviewForm component for editing reviews */}
      <fieldset className="ReviewForm" style={{ backgroundColor: '#222', padding: '20px', marginTop: '20px', color: 'white', textAlign: 'left' }}>
      <h2>Edit Your Review</h2>
  <form onSubmit={(e) => e.preventDefault()}>
    <div className="form-group">
      <textarea
        value={editedReview}
        onChange={(e) => setEditedReview(e.target.value)}
        className="form-control"
        rows="3"
        placeholder="Edit your review..."
        style={{ marginBottom: '10px', width: '100%' }}
        required
      />
    </div>
    <button onClick={() => handleEditReview(review.id, editedReview, editedRating)} className="btn btn-primary">Update Review</button>
  </form>
</fieldset>
    </div>
  );
};

export default Account;
