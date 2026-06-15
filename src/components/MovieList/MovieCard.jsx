import React from "react";
import "./MovieCard.css";
import star from "../../assets/star.png";
import API from "../../api";

const MovieCard = ({ movie }) => {

  const addFavorite = async (e) => {
    e.preventDefault();
    e.stopPropagation();

    try {
      await API.post("/favorites", {
        movieId: movie.id,
        title: movie.original_title,
        poster: movie.poster_path,
        rating: movie.vote_average,
      });

      alert("Added to Favorites ❤️");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <a
      href={`https://www.themoviedb.org/movie/${movie.id}`}
      target="_blank"
      rel="noreferrer"
      className="movie_card"
    >
      <img
        src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
        alt="movie poster"
        className="movie_poster"
      />

      <div className="movie_details">
        <h3 className="movie_details_heading">
          {movie.original_title}
        </h3>

        <div className="movie_date_rate">
          <p>{movie.release_date}</p>

          <p className="movie_rating">
            {movie.vote_average}
            <img
              src={star}
              alt="rating"
              className="card_emoji"
            />
          </p>
        </div>

        <p className="movie_description">
          {movie.overview.slice(0, 100) + "..."}
        </p>

        <button
          className="favorite_btn"
          onClick={addFavorite}
        >
          ❤️ Favorite
        </button>
      </div>
    </a>
  );
};

export default MovieCard;