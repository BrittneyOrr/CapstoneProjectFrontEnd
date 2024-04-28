/*
setup the account with ability to see the user's
reviews, comments, edit those, and delete them. 
 */
import React, { useState, useEffect } from 'react';

const Account = () => {
  const [userReviews, setUserReviews] = useState([]);
  const [userComments, setUserComments] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchUserReviewsAndComments = async () => {
      try {
        const responseReviews = await fetch('/api/reviews');
        const dataReviews = await responseReviews.json();
        setUserReviews(dataReviews);

        const responseComments = await fetch('/api/reviews');
        const dataComments = await responseComments.json();
        setUserComments(dataComments);

        setLoading(false);
      } catch (error) {
        console.error('Error fetching reviews and comments:', error);
      }
    };

    fetchUserReviewsAndComments();
  }, []);

  const handleEditReview = async (id, newReview) => {
    try {
      const response = await fetch(`/api/reviews${id}`, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ review: newReview }),
      });
      if (!response.ok) throw new Error('Error editing review');
      const updatedReview = await response.json();
      setUserReviews(userReviews.map((review) => (review.id === id ? updatedReview : review)));
    } catch (error) {
      console.error('Error editing review:', error);
    }
  };

  const handleDeleteReview = async (id) => {
    // ... existing delete review logic here ...
  };

  const handleEditComment = async (id, newComment) => {
    try {
      const response = await fetch(`/api/reviews${id}`, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ comment: newComment }),
      });
      if (!response.ok) throw new Error('Error editing comment');
      const updatedComment = await response.json();
      setUserComments(userComments.map((comment) => (comment.id === id ? updatedComment : comment)));
    } catch (error) {
      console.error('Error editing comment:', error);
    }
  };

  const handleDeleteComment = async (id) => {
    try {
      const response = await fetch(`/api/reviews${id}`, { method: 'DELETE' });
      if (!response.ok) throw new Error('Error deleting comment');
      setUserComments(userComments.filter((comment) => comment.id !== id));
    } catch (error) {
      console.error('Error deleting comment:', error);
    }
  };

  return (
    <div>
      <h1>Your Account </h1>
      <h2>Your Reviews</h2>
      {loading ? (
        <p>Loading reviews...</p>
      ) : (
        <ul>
          {userReviews.map((review) => (
            <li key={review.id}>
              <div>
                <strong>Movie:</strong> {review.movieTitle}
              </div>
              <div>
                <strong>Review:</strong> {review.review}
              </div>
              <button onClick={() => handleEditReview(review.id)}>Edit Review</button>
              <button onClick={() => handleDeleteReview(review.id)}>Delete Review</button>
              <button onClick={() => handleEditComment(comment.id)}>Edit Comments</button>
              <button onClick={() => handleDeleteComment(comment.id)}>Delete Comments</button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default function Account () {
}