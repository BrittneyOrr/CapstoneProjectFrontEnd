import React, { useState } from 'react';

const StarRating = ({ onChange }) => {
    const [rating, setRating] = useState(0);

    const handleStarClick = (value) => {
        setRating(value);
        onChange(value);
    };

    return (
        <div>
            {[...Array(5)].map((_, index) => (
                <span 
                    key={index}
                    style={{ cursor: 'pointer' }}
                    onClick={() => handleStarClick(index + 1)}
                >
                    {index < rating ? '★' : '☆'}
                </span>
            ))}
        </div>
    );
};

export default StarRating;