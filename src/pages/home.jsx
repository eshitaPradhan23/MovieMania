import React from "react";

import star from "../assets/star.png";
import fire from "../assets/fire.png";
import time from "../assets/time.png";

import MovieList from "../components/MovieList/MovieList";

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

export default Home;