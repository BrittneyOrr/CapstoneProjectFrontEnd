// setup the page for the single movie details and review option
import {useEffect, useState} from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import '../index.css';
import { fetchMovie } from '../api/index';
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

    return (
        <div>
            <h2>Movie Details</h2>
            {movie ? (
                <div className="MovieCard">
                    <img src={movie.imageUrl} alt={movie.title} />                
                    <h2>{movie.title}</h2>
                    <h2>{movie.category}</h2>
                    <h2>{movie.releaseDate}</h2>
                    <h2>{movie.plot}</h2>
                    <ReviewForm movieId={id} />
                </div>
            ) : (
                <p>Loading...</p>
            )}
        </div>
    ); 
};   

export default Movie;