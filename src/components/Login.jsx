import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { login } from "../api";
import "../App.css";

export default function Login({ setToken }) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleUsernameChange = (e) => {
    setUsername(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      // clear form after submission
      const response = await login(username, password);
      console.log(response);
      const { token } = response;
      
      setToken(token);
      localStorage.setItem("token", token);
      // console.log(token);
      setUsername("");
      setPassword("");
      if (response.message === "Login success~") {
        navigate("/");
      } else {
        navigate('/register')
        setError("No User found, Please Register first");
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="container-fluid" style={{ paddingTop: "37px" }}>
      <div className="black-background">
        <div className="container mt-5">
          <h1 className="text-center text-white mb-4">Reel Rave</h1>
          <h2 className="text-center mb-4" style={{ color: "cyan" }}>
            Login to Rate or Review
          </h2>

          <form
            onSubmit={handleSubmit}
            className="w-50 mx-auto"
            style={{ color: "white" }}
          >
            <div className="mb-3">
              <label
                htmlFor="username"
                className="form-label"
                style={{ color: "cyan" }}
              >
                Username:
              </label>
              <input
                type="text"
                className="form-control"
                id="username"
                value={username}
                onChange={handleUsernameChange}
                required
              />
            </div>

            <div className="mb-3">
              <label
                htmlFor="password"
                className="form-label"
                style={{ color: "cyan" }}
              >
                Password:
              </label>
              <input
                type="password"
                className="form-control"
                id="password"
                value={password}
                onChange={handlePasswordChange}
                required
              />
            </div>

            <div className="mb-3 d-flex justify-content-center">
              <button type="submit" className="btn btn-primary custom">
                Login
              </button>
            </div>
            <div className="text-center">
              <span style={{ color: "white" }}>Don't have an account? </span>
              <a
                href="/register"
                style={{ color: "cyan", textDecoration: "underline" }}
              >
                Register
              </a>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
