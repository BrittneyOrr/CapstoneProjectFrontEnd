// setup the API CRUD to pull movies
// is this needed? -> const API_URL = 'https://';

export const getAllMovies = async () => {
    try {
        const result = await fetch('http://localhost:3000/api/movies');
        if (!result.ok) {
            throw new Error('Failed to fetch movies');
        }
        const response = await result.json();
        console.log(response);
        return response;
    } catch(error) {
        console.error('Error fetching movies:', error); // Log error
        throw error; // Re-throw the error to propagate it further
    }
};

    // export const getAllMovies = async () => {
    //     try {
    //         const result = { 
    //             titles: ["Dune", "Dune: Part Two"],
    //             category: "Science fiction",
    //             releaseDates: ["2021-10-22", "2024-01-03"], // Changed release dates to strings
    //             posterUrls: ["https://www.themoviedb.org/t/p/w1280/d5NXSklXo0qyIYkgV94XAgMIckC.jpg", "https://www.themoviedb.org/t/p/w1280/1pdfLvkbY9ohJlCjQH2CZjjYVvJ.jpg"],
    //             plots: [
    //                 "Paul Atreides, a brilliant and gifted young man born into a great destiny beyond his understanding, must travel to the most dangerous planet in the universe to ensure the future of his family and his people. As malevolent forces explode into conflict over the planet's exclusive supply of the most precious resource in existence-a commodity capable of unlocking humanity's greatest potential-only those who can conquer their fear will survive.",
    //                 "Follow the mythic journey of Paul Atreides as he unites with Chani and the Fremen while on a path of revenge against the conspirators who destroyed his family. Facing a choice"
    //             ],
    //         };
    
    //         const movies = result.titles.map((title, index) => ({
    //             id: index + 1, // You can generate IDs based on array index
    //             title,
    //             category: result.category,
    //             releaseDate: result.releaseDates[index],
    //             imageUrl: result.posterUrls[index],
    //             plot: result.plots[index]
    //         }));
    
    //         return movies;
    //     } catch(error) {
    //         console.log(error);
    //         throw new Error("Failed to fetch movies");
    //     }
    // };

    // export const fetchMovie = async (id) => {
    //     try {
    //         const result = await fetch(`/api/movie/${id}`); // Interpolate id into URL
    //         if (!result.ok) {
    //             throw new Error('Failed to fetch movie');
    //         }
    //         const response = await result.json();
    //         return response.movie;
    //     } catch (error) {
    //         console.log(error);
    //         throw new Error("Failed to fetch movie");
    //     }
    // };
    
    // export const fetchReviews = async () => {
    //     try {
    //         const result = await fetch('/api/reviews');
    //         if (!result.ok) {
    //             throw new Error('Failed to fetch reviews');
    //         }
    //         const response = await result.json();
    //         return response.reviews;
    //     } catch (error) {
    //         console.log(error);
    //         throw new Error("Failed to fetch reviews");
    //     }
    // }

    // export const fetchReview = async (id) => {
    //     try {
    //         const result = await fetch(`/api/reviews/${id}`);
    //         if (!result.ok) {
    //             throw new Error('Failed to fetch review');
    //         }
    //         const response = await result.json();
    //         return response.review;
    //     } catch (error) {
    //         console.log(error);
    //         throw new Error("Failed to fetch review");
    //     }
    // }

    // export const fetchComments = async () => {
    //     try {
    //         const result = await fetch('/api/comments');
    //         if (!result.ok) {
    //             throw new Error('Failed to fetch comments');
    //         }
    //         const response = await result.json();
    //         return response.comments;
    //     } catch (error) {
    //         console.log(error);
    //         throw new Error("Failed to fetch comments");
    //     }
    // }

    // export const fetchComment = async (id) => {
    //     try {
    //         const result = await fetch(`/api/comments/${id}`);
    //         if (!result.ok) {
    //             throw new Error('Failed to fetch comment');
    //         }
    //         const response = await result.json();
    //         return response.comment;
    //     } catch (error) {
    //         console.log(error);
    //         throw new Error("Failed to fetch comment");
    //     }
    // }