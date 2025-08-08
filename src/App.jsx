import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import MovieList from "./components/MovieList";
import MovieDetail from "./components/MovieDetail";

const App = () => {
  const [movies] = useState([
    {
      id: 1,
      title: "Inception",
      description: "Un thriller de science-fiction...",
      posterURL: "https://m.media-amazon.com/images/I/51Ih-RmYyTL._AC_.jpg",
      rating: 8.8,
      trailerURL: "https://www.youtube.com/embed/YoHD9XEInc0",
    },
    {
      id: 2,
      title: "Breaking Bad",
      description: "Un professeur de chimie devient dealer...",
      posterURL: "https://m.media-amazon.com/images/I/81r+LN9gyIL._AC_SY679_.jpg",
      rating: 9.5,
      trailerURL: "https://www.youtube.com/embed/HhesaQXLuRY",
    },
  ]);

  return (
    <Router>
      <Routes>
        <Route path="/" element={<MovieList movies={movies} />} />
        <Route path="/movies/:id" element={<MovieDetail movies={movies} />} />
      </Routes>
    </Router>
  );
};

export default App;
