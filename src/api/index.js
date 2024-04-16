// setup the API CRUD to pull movies
// is this needed? -> const API_URL = 'https://';

// export const getAllMovies = async () => {
    // try {
    //     // const result = await fetch('https://')
    //     // const response = await result.json()
    //     // console.log(response.movies)
    //     // return response.movies
    // } catch(error) {
    //     console.log(error);
    // }
    export const getAllMovies = async () => {
        try {
            const result = { 
                titles: ["Dune", "Dune: Part Two"],
                category: "Science fiction",
                releaseDates: ["2021-10-22", "2024-01-03"], // Changed release dates to strings
                posterUrls: ["https://www.themoviedb.org/t/p/w1280/d5NXSklXo0qyIYkgV94XAgMIckC.jpg", "https://www.themoviedb.org/t/p/w1280/1pdfLvkbY9ohJlCjQH2CZjjYVvJ.jpg"],
                plots: [
                    "Paul Atreides, a brilliant and gifted young man born into a great destiny beyond his understanding, must travel to the most dangerous planet in the universe to ensure the future of his family and his people. As malevolent forces explode into conflict over the planet's exclusive supply of the most precious resource in existence-a commodity capable of unlocking humanity's greatest potential-only those who can conquer their fear will survive.",
                    "Follow the mythic journey of Paul Atreides as he unites with Chani and the Fremen while on a path of revenge against the conspirators who destroyed his family. Facing a choice"
                ],
            };
    
            const movies = result.titles.map((title, index) => ({
                id: index + 1, // You can generate IDs based on array index
                title,
                category: result.category,
                releaseDate: result.releaseDates[index],
                imageUrl: result.posterUrls[index],
                plot: result.plots[index]
            }));
    
            return movies;
        } catch(error) {
            console.log(error);
            throw new Error("Failed to fetch movies");
        }
    };