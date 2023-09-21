import React, { useState, useEffect } from "react";
import { getTrendingMovies } from "../api";
import MoviesList from "../components/MoviesList/MoviesList"; 
import { useNavigate } from "react-router-dom";

export default function Home() {
  const [trendingMovies, setTrendingMovies] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    getTrendingMovies()
      .then((data) => {
        setTrendingMovies(data);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

  const handleMovieClick = (movieId) => {
    navigate(`/movies/${movieId}`); 
  };

  return (
    <div>
      <h1>Trending today</h1>
      <MoviesList movies={trendingMovies} handleMovieClick={handleMovieClick}/>
    </div>
  );
}
