//// setup the homepage to display the movies
import React, { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { getAllMovies } from '../api';
import ReviewForm from './ReviewForm';
import Reviews from './Reviews';

export default function AllMovies () {
    const [movies, setMovies] = useState([]);
    const [error, setError] = useState(null);
    const [isLoading, setIsLoading] = useState(true);
    const navigate = useNavigate();
    
    useEffect(() => {
        async function getAllMoviesHandler() {
            try {
                const moviesData = await getAllMovies();
                setMovies(moviesData);
                setIsLoading(false);
            } catch (error) {
                setError(error);
                setIsLoading(false);
            }
        }
        getAllMoviesHandler();
    }, []);

    const calculateAverageRating = (reviews) => {
        if (!reviews || reviews.length === 0) {
            return 0;
        }
        const totalRating = reviews.reduce((sum, review) => sum + review.rating, 0);
        return totalRating / reviews.length;
    };

    if (isLoading) {
        return <p>Loading...</p>;
    } if (error) {
        return <p>Error: {error.message}</p>;
    }
    return (
        <div>
            <div className="bg-dark">
                <div className="container py-4">
                    <h1 className="text-light">ReelRave</h1>
                    <h2 className="text-light mb-4">Cinematic Chronicles: Your Ultimate Destination for Film Reviews and Insights!</h2>
                    
                </div>
            </div>
            <div className='black-background'>
                <div className='container'>
                    <div className="row row-cols-1 row-cols-md-3 g-4">
                        {movies.map((movie) => {
                            const { id, title, poster_url, category, release_date, reviews } = movie;
                            return (
                                <div key={id} className="col">
                                    <div className="card h-100" style={{ backgroundColor: '#333', color: 'white' }}>
                                        <img src={poster_url} alt={title} className="card-img-top img-fluid" style={{ maxHeight: '300px' }} />
                                        <div className="card-body">
                                            <h5 className="card-title" style={{ color: 'cyan' }}>{title}</h5>
                                            <p className="card-text"><strong style={{ color: 'yellow' }}>Category:</strong> {category}</p>
                                            <p className="card-text"><strong style={{ color: 'orange' }}>Release Date:</strong> {release_date}</p>
                                            <p className="card-text"><strong style={{ color: 'green' }}>Average Rating:</strong> {calculateAverageRating(reviews)}</p>
                                        </div>
                                        <div className="card-footer">
                                            <button onClick={() => navigate(`/api/movies/${id}`)} className='btn btn-primary btn-sm' style={{ backgroundColor: 'purple' }}>See Details</button>
                                        </div>
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                </div>
            </div>
        </div>
    );
}