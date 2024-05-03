
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const NotFoundPage = () => {
  const [token, setToken] = useState(localStorage.getItem("token"));
  const navigate = useNavigate();

  useEffect(() => {
    const redirectTimer = setTimeout(() => {
      if (token) {
        // Redirect to home page if token exists
        navigate("/");
      } else {
        // Redirect to login page if token doesn't exist
        navigate("/login");
      }
    }, 10000); // Redirect after 5 seconds

    // Clear the timer when the component unmounts
    return () => clearTimeout(redirectTimer);
  }, [token, navigate]);

  return (
    <div className="noPageFound">
      <h1>No Page Found !!</h1>
      <div className="container"></div>
      <h1>Sorry, The page you are looking for does not exist.</h1>
    </div>
  );
};

export default NotFoundPage;
