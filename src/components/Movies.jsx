// setup the homepage to display the movies
import { useState, useEffect } from 'react';
import { useNavigate}

export default function AllMovies () {
    const [movies, setMovies] = useState([]);
    // const navigate = useNavigate();
    // const [error, setError] = useState(null);
    // const isLoading, setIsLoading] = useState(false);
    // useEffect(() => {
    //     async function getAllMoviesHandler() {
    //         try {
    //             const moviesData = await getAllMovies();
    //             setIsLoading(true);
    //             setMovies(moviesData);
    //         } catch (error) {
    //             setIsLoading(false);
    //             setError(error);
    //         }
    //     }
    //     getAllMoviesHandler();
    // if (error) {
    //     return <p>Error: {error.message}</p>;
    // } else if (!isLoading) {
    //     return <p>Loading...</p>;
    // } else {
    //     return (
    //         <div className='movie-container'>
    //         <ul>
    //         {movies.map((movie) => {
    //             const { id, title, imageUrl, plot, category, releaseDate } = movie;
    //             return (
    //                 <li key={id}>
    //                     <ul>
    //                         <img src={imageUrl} alt = {title} />
    //                         <li>Title: {title}</li>
    //                         <li>Plot: {plot}</li>
    //                         <li>Category: {category}</li>
    //                         <li><button onClick={() => navigate(`/movies/:id}`)} className='button'>See Details</button></li>
    //                         <li>Release Date: {releaseDate}</li>
    //                     </ul>
    //                 </li>
    //             );
    //         })}
    //         </ul>
    //         </div>
    //     )
    // }
    // })
    return (
        <h1>Movie Reviews</h1>
        
    )
};
