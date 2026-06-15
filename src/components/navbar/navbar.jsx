import React from "react";
import { Link } from "react-router-dom";

import "./navbar.css";
import star from "../../assets/star.png";
import fire from "../../assets/fire.png";
import time from "../../assets/time.png";

const Navbar = () => {
  return (
    <nav className="navbar">
      <Link
        to="/"
        style={{
          textDecoration: "none",
          color: "inherit",
        }}
      >
        <h1>MovieMania</h1>
      </Link>

      <div className="navbar_links">
        <a href="#popular">
          🔥 Popular
        
        </a>

        <a href="#top_rated">
          ⭐ Top Rated
          
        </a>

        <a href="#upcoming">
         🎬 Upcoming
          
        </a>

        <Link
          to="/favorites"
          className="favorites_link"
        >
          ❤️ Favorites
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;