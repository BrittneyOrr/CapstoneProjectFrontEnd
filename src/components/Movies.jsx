// setup the homepage to display the movies
import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { getAllMovies } from '../api';
import ReviewForm from './ReviewForm';


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
    if (isLoading) {
        return <p>Loading...</p>;
    }if (error) {
        return <p>Error: {error.message}</p>;
    }
    return (
        <div className='movie-container'>
            <h1>Movie Reviews</h1>
            <ul className="noBulletPoints">
            {movies.map((movie) => {
                const { id, title, imageUrl, plot, category, releaseDate } = movie;
                return (
                    <li key={id} className="movieCard">
                            <p> </p>
                            <img src={imageUrl} alt = {title}  className="thumbnail" />
                            <p>Title: {title}</p>
                            <p>Category: {category}</p>
                            <p>Release Date: {releaseDate}</p>
                            <p> </p>
                            <p><button onClick={() => navigate(`/api/movies/${id}`)} className='button'>See Details</button></p>
                            <ReviewForm movieId={id} />

                            <p> </p>
                            </li>
                            );
                        })}
                        </ul>
                        </div>
                        );
                    }
// took plot out of the card so that it could be on single movie page
// <li>Plot: {plot}</li>
// { token ? <ReviewForm movieId={id} /> : null }