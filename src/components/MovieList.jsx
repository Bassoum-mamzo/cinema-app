import React from "react";
import { Link } from "react-router-dom";

const MovieList = ({ movies }) => {
  return (
    <div>
      <h1>Ma collection de films</h1>
      <div style={{ display: "flex", gap: "20px", flexWrap: "wrap" }}>
        {movies.map((movie) => (
          <div key={movie.id} style={{ border: "1px solid #ccc", padding: 10, width: 200 }}>
            <Link to={`/movies/${movie.id}`} style={{ textDecoration: "none", color: "black" }}>
              <img src={movie.posterURL} alt={movie.title} width="180" />
              <h3>{movie.title}</h3>
              <p>Note : {movie.rating}</p>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MovieList;
