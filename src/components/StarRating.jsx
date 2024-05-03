import React, { useState } from "react";

const StarRating = ({ value, onChange }) => {
  const [rating, setRating] = useState(value);

  const handleStarClick = (newValue) => {
    setRating(newValue);
    onChange(newValue);
  };

  return (
    <div style={{ display: "inline-block" }}>
      {[...Array(5)].map((_, index) => (
        <span
          key={index}
          style={{
            cursor: "pointer",
            color: index < rating ? "gold" : "white",
            fontSize: "24px"
          }}
          onClick={() => handleStarClick(index + 1)}
        >
          {index < rating ? "★" : "☆"}
        </span>
      ))}
    </div>
  );
};

export default StarRating;
