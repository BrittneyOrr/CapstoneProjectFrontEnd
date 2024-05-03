import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { fetchMovie, fetchMovieReviews } from "../api";
import ReviewForm from "./ReviewForm";

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
        setReviews(reviewsData || []);
      } catch (error) {
        console.error("Error fetching data:", error);
        setReviews([]);
      }
    }
    fetchMovieData();
  }, [movieId]);

  console.log({ reviews });

  return (
    <div className="bg-dark">
      <div className="black-background" style={{ backgroundColor: "#222" }}>
        <div className="container py-4">
          <h2 className="my-4 text-light" style={{ color: "cyan" }}>
            About This Movie
          </h2>
          {movie ? (
            <div className="row">
              <div className="col-md-4">
                <img
                  src={movie.poster_url}
                  alt={movie.title}
                  className="img-fluid shadow-lg rounded"
                />
              </div>
              <div className="col-md-8">
                <div className="card bg-dark text-light border-light">
                  <div className="card-body">
                    <h2 className="text-light">{movie.title}</h2>
                    <p>
                      <i className="fas fa-film" style={{ color: "green" }}></i>{" "}
                      Category:{" "}
                      <span style={{ color: "green" }}>{movie.category}</span>
                    </p>
                    <p>
                      <i
                        className="fas fa-calendar-alt"
                        style={{ color: "orange" }}
                      ></i>{" "}
                      Release Date:{" "}
                      <span style={{ color: "orange" }}>
                        {movie.release_date}
                      </span>
                    </p>
                    <p>
                      <i
                        className="fas fa-align-left"
                        style={{ color: "cyan" }}
                      ></i>{" "}
                      Movie Plot:{" "}
                      <span style={{ color: "cyan" }}>{movie.plot}</span>
                    </p>
                  </div>
                  <div className="card-footer">
                    {token ? (
                      <ReviewForm movieId={movieId} userId={userId} />
                    ) : null}
                    <p> </p>
                    <h3 className="text-light">Reviews for {movie.title}</h3>
                    {/* Reviews section should be here */}
                  </div>
                </div>
              </div>
            </div>
          ) : (
            <p className="text-light">Loading...</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default SingleMovie;
