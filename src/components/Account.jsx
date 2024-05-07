import React, { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import UserReviews from './UserReviews'; 


const fetchUserData = async (userId) => {
  try {

    const userInfo = { userId, username: '', email: '' };
    return userInfo;
  } catch (error) {
    throw new Error('Error fetching user data:', error);
  }
};

const Account = () => {
  const [userReviews, setUserReviews] = useState([]);
  const [userInfo, setUserInfo] = useState({});
  const [loading, setLoading] = useState(true);
  const { userId } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    const fetchData = async () => {
      try {
        // Fetch user information
        const info = await fetchUserData(userId); 
        setUserInfo(info);

        
        const reviews = [];
        setUserReviews(reviews);
        
        setLoading(false);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, [userId]); 

  const handleEditReview = (id) => {
    
    navigate(`/edit-review/${id}`); 
  };

  const handleDeleteReview = async (id) => {
    try {
      
      setUserReviews(userReviews.filter((review) => review.id !== id));
    } catch (error) {
      console.error('Error deleting review:', error);
    }
  };

  return (
    <div style={{ textAlign: 'center' }}>
      <h1 style={{ marginTop: '80px'}}>Your Account </h1>
      <h3>{userInfo.username}</h3> {/* Display user name */}
      <h3>{userInfo.email}</h3> {/* Display user email */}
      <h1 style={{ marginTop: '100px' }}>Your Reviews</h1>
      {loading ? (
        <p>Loading reviews...</p>
      ) : (
        <ul>
          {userReviews.map((review) => (
            <li key={review.id}>
              {/* Render review details */}
              <p>{review.review}</p>
              <p>Rating: {review.rating}</p>
              <img src={review.poster} alt="Movie Poster" style={{ maxWidth: '200px', maxHeight: '300px' }} />
              {/* Edit and delete buttons */}
              <button onClick={() => handleEditReview(review.id)}>Edit</button>
              <button onClick={() => handleDeleteReview(review.id)}>Delete</button>
            </li>
          ))}
        </ul>
      )}
      {/* Render the ReviewForm component for editing reviews */}
    </div>
  );
};

export default Account;
