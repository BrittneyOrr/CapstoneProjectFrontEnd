import React from "react";
import { useState } from "react";
import { Routes, Route, Link } from "react-router-dom";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Movies from "./components/Movies";
import SingleMovie from "./components/SingleMovie";
import Login from "./components/Login";
import Register from "./components/Register";
import Account from "./components/Account";
import Navbar from "./components/Navbar";

function App() {
  const [token, setToken] = useState(null);

  // Function to handle toggling of the navbar menu
  // const toggleMenu = () => {
  //   const navbarMenu = document.querySelector(".navbar-collapse");
  //   navbarMenu.classList.toggle("active");
  // };

  return (
    <>
      <Navbar />
      <div>
        <Routes>

          <Route path='/' element={<Movies />} />
          <Route path='/api/movies/:movieId' element={<SingleMovie token={token} />} />
          <Route path='/login' element={<Login setToken={setToken} />} />
          <Route path='/register' element={<Register setToken={setToken} />} />
          <Route path='/users/me' element={<Account token={token} />} />

        </Routes>
      </div>
    </>
  );
}
export default App;

// import React from "react";
// import { useState } from "react";
// import { Routes, Route, Link } from "react-router-dom";
// import "./App.css";
// import "bootstrap/dist/css/bootstrap.min.css";
// import Movies from "./components/Movies";
// import SingleMovie from "./components/SingleMovie";
// import Login from "./components/Login";
// import Register from "./components/Register";
// import Account from "./components/Account";

// function App() {
//   const [token, setToken] = useState(null);

//   return (
//     <>
//       <div className="container">
//         <nav className="navbar navbar-expand-lg navbar-light bg-light">
//           <Link className="navbar-brand" to="/">
//             <img
//               src="../public/ReelRaveLogo.png"
//               alt="Website Logo"
//               className="logo"
//             />
//             Movies
//           </Link>

//           <button
//             className="navbar-toggler"
//             type="button"
//             data-toggle="collapse"
//             data-target="#navbarNav"
//             aria-controls="navbarNav"
//             aria-expanded="false"
//             aria-label="Toggle navigation"
//           >
//             <span className="navbar-toggler-icon"></span>
//           </button>

//           <div className="collapse navbar-collapse" id="navbarNav">
//             {token ? (
//               <ul className="navbar-nav ml-auto">
//                 <li className="nav-item">
//                   <Link className="nav-link" to="/users/me">
//                     Account
//                   </Link>
//                 </li>
//               </ul>
//             ) : (
//               <ul className="navbar-nav ml-auto">
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
//               </ul>
//             )}
//           </div>
//         </nav>
//       </div>

//       <div>
//         <Routes>
//           <Route path="/" element={<Movies />} />
//           <Route path="/api/movies/:movieId" element={<SingleMovie />} />
//           <Route path="/login" element={<Login setToken={setToken} />} />
//           <Route path="/register" element={<Register setToken={setToken} />} />
//           <Route path="/users/me" element={<Account token={token} />} />
//         </Routes>
//       </div>
//     </>
//   );
// }

// export default App */
