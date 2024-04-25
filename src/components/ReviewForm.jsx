import { useState } from 'react';

const ReviewForm = ({ movieId }) => {
    const [rating, setRating] = useState('');
    const [comment, setComment] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        // Submit review data to backend
        const reviewData = {
            movieId,
            rating,
            comment
        };
        // Call function to submit review data to server
        // Example: await submitReview(reviewData);
        // Redirect or display message after submission
    };

    return (
        <fieldset className="ReviewForm">
        <form onSubmit={handleSubmit}>
            <label>
                Rating:
                <input type="number" min="1" max="5" value={rating} onChange={(e) => setRating(e.target.value)} required />
            </label>
            <p> </p>

            <label>
                Comment:
                <textarea value={comment} onChange={(e) => setComment(e.target.value)} required />
            </label>
            <p> </p>


            <button type="submit">Submit Review</button>
        </form>
        </fieldset>
    );
};

export default ReviewForm;
