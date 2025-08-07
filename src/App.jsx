import React, { useState } from 'react';
import MovieList from './components/MovieList';
import Filter from './components/Filter';
import AddMovie from './components/AddMovie';

const App = () => {
  const [movies, setMovies] = useState([
    {
      title: "Inception",
      description: "Un thriller de science-fiction",
      posterURL: "https://m.media-amazon.com/images/I/51Ih-RmYyTL._AC_.jpg",
      rating: 8.8,
    },
    {
      title: "Breaking Bad",
      description: "Un professeur de chimie devient dealer",
      posterURL: "https://m.media-amazon.com/images/I/81r+LN9gyIL._AC_SY679_.jpg",
      rating: 9.5,
    },
  ]);

  const [titleFilter, setTitleFilter] = useState('');
  const [ratingFilter, setRatingFilter] = useState(0);

  const filteredMovies = movies.filter(
    (movie) =>
      movie.title.toLowerCase().includes(titleFilter.toLowerCase()) &&
      movie.rating >= ratingFilter
  );

  const addMovie = (movie) => {
    setMovies([...movies, movie]);
  };

  return (
    <div style={{ padding: '20px' }}>
      <h1>🎬 Ma Collection de Films</h1>
      <Filter
        titleFilter={titleFilter}
        setTitleFilter={setTitleFilter}
        ratingFilter={ratingFilter}
        setRatingFilter={setRatingFilter}
      />
      <AddMovie onAdd={addMovie} />
      <MovieList movies={filteredMovies} />
    </div>
  );
};

export default App;
