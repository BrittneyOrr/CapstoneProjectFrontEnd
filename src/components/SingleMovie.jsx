// setup the page for the single movie details and review option
import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { fetchMovie, fetchMovieReviews } from '../api';
import ReviewForm from './ReviewForm';

const SingleMovie = ({ token }) => {
    const [movie, setMovie] = useState(null);
    const [reviews, setReviews] = useState([]);
    const navigate = useNavigate(); 
    const { movieId, userId } = useParams();

    useEffect(() => {
        async function fetchMovieData() {
            try {
                const movieData = await fetchMovie(movieId);
                setMovie(movieData);
                
                const reviewsData = await fetchMovieReviews(movieId);
                if (Array.isArray(reviewsData)) {
                    setReviews(reviewsData);
                    console.log({reviewsData});
                } else {
                    setReviews([]); // Set to empty array if reviewsData is not an array
                }
            } catch (error) {
                console.error('Error fetching data:', error);
                setReviews([]);
            }
        }
        fetchMovieData();
     
    }, [movieId]);

    console.log({reviews});

    return (
        <div className="bg-dark">
            <div className="black-background" style={{ backgroundColor: '#222' }}>
                <div className="container py-4">
                    <h2 className="my-4 text-light" style={{ color: 'cyan' }}>About This Movie</h2>
                    {movie ? ( // Check if movie data is available
                        <div className="row">
                            <div className="col-md-4">
                                <img src={movie.poster_url} alt={movie.title} className="img-fluid shadow-lg rounded" />
                            </div>
                            <div className="col-md-8">
                                <div className="card bg-dark text-light border-light">
                                    <div className="card-body">
                                        <h2 className="text-light">{movie.title}</h2>
                                        <p><i className="fas fa-film" style={{ color: 'green' }}></i> Category: <span style={{ color: 'green' }}>{movie.category}</span></p>
                                        <p><i className="fas fa-calendar-alt" style={{ color: 'orange' }}></i> Release Date: <span style={{ color: 'orange' }}>{movie.release_date}</span></p>
                                        <p><i className="fas fa-align-left" style={{ color: 'cyan' }}></i> Movie Plot: <span style={{ color: 'cyan' }}>{movie.plot}</span></p>
                                    </div>
                                    <div className="card-footer">
                                        {token ? <ReviewForm movieId={movieId} userId={userId} setReviews={setReviews} />
                                        : null}
                                        <p> </p>
                                        <h3 className="text-light">Reviews for {movie.title}</h3>
                                        <div className='black-background'>
                                            <div className='container'>
                                                <div className="row row-cols-1 row-cols-md-3 g-4">
                                                    {reviews.length > 0 ? (
                                                        reviews.map((review) => {
                                                            // Check if the review object contains all required properties
                                                            if (!review.comment || !review.rating || !review.review_date || !review.userId || !review.id) {
                                                                // Display a placeholder or an error message
                                                                return (
                                                                    <div key={review.id} className="col">
                                                                        <div className="card h-100">
                                                                            <div className="card-body">
                                                                                <p className="text-danger">Error: Review data is incomplete</p>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                );
                                                            } else {
                                                                // Render the review normally
                                                                const { comment, rating, review_date, userId, id } = review;
                                                                return (
                                                                    <div key={id} className="col">
                                                                        <div className="card h-100">
                                                                            <div className="card-body">
                                                                                <h5 className="card-title">{rating}</h5>
                                                                                <p className="card-text">Comment: {comment}</p>
                                                                                <p className="card-text">Review Date: {review_date}</p>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                );
                                                            }
                                                        })
                                                    ) : (
                                                        <p>No reviews available</p>
                                                    )}
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ) : (
                        <p>Loading...</p>
                    )}
                </div>
            </div>
        </div>
    );
    
};

export default SingleMovie;


// <p><i className="fas fa-star" style={{ color: 'yellow' }}></i> Average Rating: <span style={{ color: 'yellow' }}>{calculateAverageRating()}</span></p>
