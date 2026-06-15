import React, { useEffect, useState } from "react";
import API from "../api";

const Favorites = () => {
  const [movies, setMovies] = useState([]);

  const fetchFavorites = async () => {
    try {
      const res = await API.get("/favorites");
      setMovies(res.data);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    fetchFavorites();
  }, []);

  const removeFavorite = async (id) => {
    try {
      await API.delete(`/favorites/${id}`);
      fetchFavorites();
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div style={{ padding: "20px", color: "white", background: "#111", minHeight: "100vh" }}>
      <h1 style={{ marginBottom: "20px" }}>❤️ Favorite Movies</h1>

      {/* GRID CONTAINER */}
      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
          gap: "20px",
        }}
      >
        {movies.length === 0 ? (
          <p>No favorites yet</p>
        ) : (
          movies.map((movie) => (
            <div
              key={movie.movieId}
              style={{
                width: "160px",
                background: "#222",
                padding: "10px",
                borderRadius: "12px",
                textAlign: "center",
                boxShadow: "0 4px 10px rgba(0,0,0,0.5)",
                transition: "0.3s",
              }}
            >
              {/* IMAGE */}
              <img
                src={
                  movie.poster?.startsWith("http")
                    ? movie.poster
                    : `https://image.tmdb.org/t/p/w500${movie.poster}`
                }
                alt={movie.title}
                style={{
                  width: "100%",
                  height: "220px",
                  objectFit: "cover",
                  borderRadius: "10px",
                }}
              />

              {/* TITLE */}
              <h3 style={{ fontSize: "14px", margin: "10px 0 5px" }}>
                {movie.title}
              </h3>

              {/* RATING */}
              <p style={{ margin: "5px 0", color: "#ffd700" }}>
                ⭐ {movie.rating}
              </p>

              {/* BUTTON */}
              <button
                onClick={() => removeFavorite(movie.movieId)}
                style={{
                  padding: "6px 10px",
                  border: "none",
                  background: "red",
                  color: "white",
                  borderRadius: "6px",
                  cursor: "pointer",
                }}
              >
                Remove
              </button>
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default Favorites;