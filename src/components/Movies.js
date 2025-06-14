// Movies.js
import React, { useEffect, useState } from 'react';
import ContentGrid from './ContentGrid';

const API_KEY = 'd33176363863ef13bb14856763069045';

const Movies = () => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    fetchMovies();
  }, []);

  async function fetchMovies() {
    try {
      const res = await fetch(`https://api.themoviedb.org/3/discover/movie?api_key=${API_KEY}`);
      const data = await res.json();
      if (data && Array.isArray(data.results)) {
        setMovies(data.results.slice(0, 12));
      }
    } catch (error) {
      console.error('Error al cargar películas:', error);
    }
  }

  return <ContentGrid title="Popular Movies" items={movies} />;
};

export default Movies;
