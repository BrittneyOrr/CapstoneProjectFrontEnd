// setup the page for the single movie details and review option
import {useEffect, useState} from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import '../index.css';
// import { fetchMovie } from '../api/index';
import ReviewForm from './ReviewForm';

const Movie = () => {
    const [movie, setMovie] = useState([null])
    const navigate = useNavigate();
    const { id } = useParams();

    useEffect (()=> {
        async function fetchMovieData() {
            try {
                const response = await fetch(`/api/movies/${id}`);
                if (!response.ok) {
                    throw new Error('Failed to fetch movie');
                }
                const movieData = await response.json();
                setMovie(movieData);
            } catch (error) {
                console.error('Error fetching movie:', error);
            }
        }

        fetchMovieData();
    }, [id]);

    const calculateAverageRating = () => {
        if(!movie || !movie.reviews || movie.reviews.length === 0) {
            return 0;
    }
    const totalRating = movie.reviews.reduce((sum, review) => sum + review.rating, 0);
    return totalRating / movie.reviews.length;
};

    return (
        <div>
            <h2>Movie Details</h2>
            {movie ? (
                <div className="MovieCard">
                    <img src={movie.poster_url} alt={movie.title} />                
                    <h2>{movie.title}</h2>
                    <h2>{movie.category}</h2>
                    <h2>{movie.release_date}</h2>
                    <h2>{movie.plot}</h2>
                    <h2>Average Rating: {calculateAverageRating()}</h2>
                    { token ? <ReviewForm movieId={id} /> : null }                
                </div>
            ) : (
                <p>Loading...</p>
            )}
        </div>
    ); 
};   

export default Movie;