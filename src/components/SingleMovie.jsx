import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { fetchMovie } from "../api/index";
import ReviewForm from "./ReviewForm";

const SingleMovie = ({ token }) => {
  const [movie, setMovie] = useState(null);
  const navigate = useNavigate();
  const { movieId } = useParams();

  useEffect(() => {
    async function fetchMovieData() {
      try {
        const movieData = await fetchMovie(movieId);
        setMovie(movieData);
      } catch (error) {
        console.error("Error fetching movie:", error);
      }
    }
    fetchMovieData();
  }, [movieId]);

  const calculateAverageRating = () => {
    if (!movie || !movie.reviews || movie.reviews.length === 0) {
      return 0;
    }
    const totalRating = movie.reviews.reduce(
      (sum, review) => sum + review.rating,
      0
    );
    return totalRating / movie.reviews.length;
  };

  return (
    <div>
      <h2>Movie Details</h2>
      {movie ? (
        <div className="bg-dark">
          <div className="container py-4">
            <div className="MovieCard" style={{ color: "white" }}>
              <img
                src={movie.poster_url}
                alt={movie.title}
                className="img-fluid"
              />
              <h2>Title: {movie.title}</h2>
              <p> </p>
              <h2>Category: {movie.category}</h2>
              <p> </p>
              <h2>Release Date: {movie.release_date}</h2>
              <p> </p>
              <h2>Movie Plot: {movie.plot}</h2>
              <h2>Average Rating: {calculateAverageRating()}</h2>
              <p> </p>
              <p> </p>
              <h2>Reviews for {movie.title}</h2>
            </div>
            <div className="card-footer">
              {token ? <ReviewForm movieId={movieId} /> : null}
            </div>
          </div>
        </div>
      ) : (
        <p className="text-light">Loading...</p>
      )}
    </div>
  );
};

export default SingleMovie;
