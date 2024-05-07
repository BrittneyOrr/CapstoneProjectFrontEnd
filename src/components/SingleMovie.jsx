// <<<<<<< brittney-new
// setup the page for the single movie details and review option
// SingleMovie.jsx
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { fetchMovie, fetchMovieReviews, submitReview } from '../api';
import ReviewManager from './ReviewManager';

const SingleMovie = ({ token, userId }) => {
    const [movie, setMovie] = useState(null);
    const { movieId } = useParams();


    useEffect(() => {
        async function fetchMovieData() {
            try {
                const movieData = await fetchMovie(movieId);
                setMovie(movieData);
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        }
        fetchMovieData();
    }, [movieId]);

    const handleReviewSubmit = async (reviewData) => {
        try {
            await submitReview(reviewData);
            const updatedReviews = await fetchMovieReviews(movieId);
            setReviews(updatedReviews);
        } catch (error) {
            console.error('Error submitting review:', error);
            // Handle error
        }
    };

    return (
        <div className="bg-dark">
            <div className="black-background" style={{ backgroundColor: '#222' }}>
                <div className="container py-4">
                    <h2 className="my-4 text-light" style={{ color: 'cyan' }}>About This Movie</h2>
                    {movie ? (
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
                                    {token ? (
                                        <ReviewManager movieId={movieId} userId={userId} />
                                    ) : null}
                                </div>
                            </div>
                        </div>
                    </div>
                ) : (
                    <p>Loading...</p>
                )}
// =======
// import React, { useEffect, useState } from "react";
// import { useNavigate, useParams } from "react-router-dom";
// import { fetchMovie } from "../api/index";
// import ReviewForm from "./ReviewForm";

// const SingleMovie = ({ token }) => {
//   const [movie, setMovie] = useState(null);
//   const navigate = useNavigate();
//   const { movieId } = useParams();

//   useEffect(() => {
//     async function fetchMovieData() {
//       try {
//         const movieData = await fetchMovie(movieId);
//         setMovie(movieData);
//       } catch (error) {
//         console.error("Error fetching movie:", error);
//       }
//     }
//     fetchMovieData();
//   }, [movieId]);

//   const calculateAverageRating = () => {
//     if (!movie || !movie.reviews || movie.reviews.length === 0) {
//       return 0;
//     }
//     const totalRating = movie.reviews.reduce(
//       (sum, review) => sum + review.rating,
//       0
//     );
//     return totalRating / movie.reviews.length;
//   };

//   return (
//     <div className="bg-dark" style={{ paddingTop: "85px" }}>
//       <div className="black-background" style={{ backgroundColor: "#222" }}>
//         <div className="container py-4">
//           <h2 className="my-4 text-light" style={{ color: "cyan" }}>
//             About This Movie
//           </h2>
//           {movie ? (
//             <div className="row">
//               <div className="col-md-4">
//                 <img
//                   src={movie.poster_url}
//                   alt={movie.title}
//                   className="img-fluid shadow-lg rounded"
//                 />
//               </div>
//               <div className="col-md-8">
//                 <div className="card bg-dark text-light border-light">
//                   <div className="card-body">
//                     <h2 className="text-light">{movie.title}</h2>
//                     <p>
//                       <i className="fas fa-film" style={{ color: "green" }}></i>{" "}
//                       Category:{" "}
//                       <span style={{ color: "green" }}>{movie.category}</span>
//                     </p>
//                     <p>
//                       <i
//                         className="fas fa-calendar-alt"
//                         style={{ color: "orange" }}
//                       ></i>{" "}
//                       Release Date:{" "}
//                       <span style={{ color: "orange" }}>
//                         {movie.release_date}
//                       </span>
//                     </p>
//                     <p>
//                       <i
//                         className="fas fa-align-left"
//                         style={{ color: "cyan" }}
//                       ></i>{" "}
//                       Movie Plot:{" "}
//                       <span style={{ color: "cyan" }}>{movie.plot}</span>
//                     </p>
//                     <p>
//                       <i
//                         className="fas fa-star"
//                         style={{ color: "yellow" }}
//                       ></i>{" "}
//                       Average Rating:{" "}
//                       <span style={{ color: "yellow" }}>
//                         {calculateAverageRating()}
//                       </span>
//                     </p>
//                     <h3 className="text-light">Reviews for {movie.title}</h3>
//                   </div>
//                   <div className="card-footer">
//                     {token ? <ReviewForm movieId={movieId} /> : null}
//                   </div>
//                 </div>
//               </div>
// >>>>>>> pratik-latest
            </div>
          ) : (
            <p className="text-light">Loading...</p>
          )}
        </div>
// <<<<<<< brittney-new
    </div>
);
};

export default SingleMovie;

