import React, { useState, useEffect } from "react";
import { getTrendingMovies } from "../api";
import MoviesList from "../components/MoviesList/MoviesList"; 

export default function Home() {
  const [trendingMovies, setTrendingMovies] = useState([]);

  useEffect(() => {
    getTrendingMovies()
      .then((data) => {
        setTrendingMovies(data);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

  return (
    <div>
      <MoviesList movies={trendingMovies} />
    </div>
  );
}
