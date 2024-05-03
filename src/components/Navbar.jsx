import React, { useState } from "react";
import { Link } from "react-router-dom";
import "../App.css";

function Navbar() {
  const [isLoggedIn, setLoggedIn] = useState(false); 

  const handleLogin = () => {
    setLoggedIn(true); // Update isLoggedIn state when user logs in
    
  };

  const handleLogout = () => {
    setLoggedIn(false); // Update isLoggedIn state when user logs out
    
  };

  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-light bg-light fixed-top navbar-fullscreen">
        <div className="container-fluid">
          <Link className="navbar-brand" to="/">
            <img src="/ReelRaveLogo.png" alt="Website Logo" className="logo" />
            Reel Rave
          </Link>
          <button
            className="navbar-toggler d-lg-none"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav ms-auto">
              {!isLoggedIn && (
                <>
                  <li className="nav-item">
                    <Link
                      className="nav-link"
                      to="/login"
                      onClick={handleLogin}
                    >
                      Sign In
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link className="nav-link" to="/register">
                      Create Account
                    </Link>
                  </li>
                </>
              )}
              {isLoggedIn && (
                <>
                  <li className="nav-item">
                    <Link className="nav-link" to="/users/me">
                      Account
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link className="nav-link" to="/" onClick={handleLogout}>
                      Logout
                    </Link>
                  </li>
                </>
              )}
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
}

export default Navbar;


// Navbar.js
// import React from "react";
// import { Link } from "react-router-dom";

// function Navbar({ isLoggedIn, handleLogout }) {


//   return (
//     <nav className="navbar navbar-expand-lg navbar-light bg-light fixed-top navbar-fullscreen">
//       <div className="container-fluid">
//         <Link className="navbar-brand" to="/">
//           <img src="/ReelRaveLogo.png" alt="Website Logo" className="logo" />
//           Reel Rave
//         </Link>
//         <button
//           className="navbar-toggler d-lg-none"
//           type="button"
//           data-bs-toggle="collapse"
//           data-bs-target="#navbarNav"
//           aria-controls="navbarNav"
//           aria-expanded="false"
//           aria-label="Toggle navigation"
//         >
//           <span className="navbar-toggler-icon"></span>
//         </button>
//         <div className="collapse navbar-collapse" id="navbarNav">
//           <ul className="navbar-nav ms-auto">
//             {!isLoggedIn && (
//               <>
//                 <li className="nav-item">
//                   <Link className="nav-link" to="/login">
//                     Sign In
//                   </Link>
//                 </li>
//                 <li className="nav-item">
//                   <Link className="nav-link" to="/register">
//                     Create Account
//                   </Link>
//                 </li>
//               </>
//             )}
//             {isLoggedIn && (
//               <>
//                 <li className="nav-item">
//                   <Link className="nav-link" to="/users/me">
//                     Account
//                   </Link>
//                 </li>
//                 <li className="nav-item">
//                   <button className="nav-link btn" onClick={handleLogout}>
//                     Logout
//                   </button>
//                 </li>
//               </>
//             )}
//           </ul>
//         </div>
//       </div>
//     </nav>
//   );
// }

// export default Navbar;
