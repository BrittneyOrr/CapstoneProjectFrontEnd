/*
setup the account with ability to see the user's
reviews, comments, edit those, and delete them. 
 */
import React, { useState, useEffect } from 'react';

const Account = () => {
  const [userReviews, setUserReviews] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchUserReviews = async () => {
      try {
        const response = await fetch('/api/reviews');
        const data = await response.json();
        setUserReviews(data);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching reviews:', error);
      }
    };

    fetchUserReviews();
  }, []);

  const handleEditReview = (id) => {

    console.log(`Editing review with ID ${id}`);
  };

  const handleDeleteReview = async (id) => {
    try {

      console.log(`Deleting review with ID ${id}`);
      const response = await fetch(`/api/reviews/${id}`, { method: 'DELETE' });
      if (!response.ok) throw new Error('Error deleting review');
      setUserReviews(userReviews.filter((review) => review.id !== id));
    } catch (error) {
      console.error('Error deleting review:', error);
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
              <button onClick={() => handleEditReview(review.id)}>Edit</button>
              <button onClick={() => handleDeleteReview(review.id)}>Delete</button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default function Account () {
}