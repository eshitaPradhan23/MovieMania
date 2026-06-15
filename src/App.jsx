import React from "react";
import "./App.css";

import star from "./assets/star.png";
import fire from "./assets/fire.png";
import time from "./assets/time.png";

import Navbar from "./components/navbar/navbar";
import MovieList from "./components/MovieList/MovieList";
import Favorites from "./pages/Favorites";

import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";

const Home = () => {
  return (
    <>
      <MovieList
        type="popular"
        title="Popular"
        emoji={fire}
      />

      <MovieList
        type="top_rated"
        title="Top Rated"
        emoji={star}
      />

      <MovieList
        type="upcoming"
        title="Upcoming"
        emoji={time}
      />
    </>
  );
};

const App = () => {
  return (
    <BrowserRouter>
      <div className="app">
        <Navbar />

        <Routes>
          <Route
            path="/"
            element={<Home />}
          />

          <Route
            path="/favorites"
            element={<Favorites />}
          />
        </Routes>
      </div>
    </BrowserRouter>
  );
};

export default App;