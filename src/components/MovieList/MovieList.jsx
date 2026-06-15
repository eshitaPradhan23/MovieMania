import React, { useEffect, useState } from "react";
import _ from "lodash";
import "./MovieList.css";
import MovieCard from "./MovieCard";
import FilterGroup from "./FilterGroup";

const MovieList = ({type , title, emoji}) => {
  const [movies, setMovies] = useState([]);
  const [filterMovies, setFilterMovies] = useState([]);
  const [minRating, setMinRating] = useState(0);

  const [sort, setSort] = useState({
    by: "default",
    order: "asc",
  });

  useEffect(() => {
    fetchMovies();
  }, []);

  useEffect(() => {
    let updatedMovies = [...movies];

    // ✅ FILTER
    if (minRating > 0) {
      updatedMovies = _.filter(updatedMovies, (movie) =>
        movie.vote_average >= minRating
      );
    }

    // ✅ SORT USING LODASH
    if (sort.by !== "default") {
      updatedMovies = _.orderBy(
        updatedMovies,
        (movie) => {
          if (sort.by === "release_date") {
            return new Date(movie.release_date);
          }
          return movie[sort.by];
        },
        [sort.order]
      );
    }

    setFilterMovies(updatedMovies);
  }, [movies, minRating, sort]);

  // ✅ FETCH MOVIES
  const fetchMovies = async () => {
    try {
      const response = await fetch(
        `https://api.themoviedb.org/3/movie/${type}?api_key=cbeff804dbbc0f17dd20232f89944335`
      );

      const data = await response.json();

      setMovies(data.results || []);
      setFilterMovies(data.results || []);
    } catch (error) {
      console.log("Error fetching movies:", error);
    }
  };

  // ✅ FILTER HANDLER
  const handleFilter = (rate) => {
    setMinRating((prev) => (prev === rate ? 0 : rate));
  };

  // ✅ SORT HANDLER
  const handleSort = (e) => {
    const { name, value } = e.target;

    setSort((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  return (
    <section className="movie_list" id={type}>
      <header className="movie_list_header">
        <h2 className="movie_list_heading" >
          {title} {" "}
          <img src={emoji} alt={`${emoji} icon`}className="movielist_emoji" />
        </h2>

        <div className="movie_list_fs">
          <FilterGroup
            minRating={minRating}
            onRatingClick={handleFilter}
            ratings={[8, 7, 6]}
          />

          {/* SORT BY */}
          <select
            name="by"
            value={sort.by}
            onChange={handleSort}
            className="movie_sorting"
          >
            <option value="default">Sort By</option>
            <option value="release_date">Date</option>
            <option value="vote_average">Rating</option>
          </select>

          {/* ORDER */}
          <select
            name="order"
            value={sort.order}
            onChange={handleSort}
            className="movie_sorting"
          >
            <option value="asc">Ascending</option>
            <option value="desc">Descending</option>
          </select>
        </div>
      </header>

      {/* MOVIE CARDS */}
      <div className="movie_cards">
        {filterMovies.length > 0 ? (
          filterMovies.map((movie) => (
            <MovieCard key={movie.id} movie={movie} />
          ))
        ) : (
          <p>No movies found</p>
        )}
      </div>
    </section>
  );
};

export default MovieList;