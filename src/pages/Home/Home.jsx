import React, { useState, useEffect } from "react";
import { getTrendingMovies } from "../../api";
import MoviesList from "../../components/MoviesList/MoviesList";
import './Home.styled';
import { StyleTitle } from './Home.styled';

export default function Home() {
  const [trendingMovies, setTrendingMovies] = useState([]);
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState(null)
  useEffect(() => {
    const fetchTrendingMovies = async () => {
      try {
        setIsLoading(true)
        const data = await getTrendingMovies();
        setTrendingMovies(data);
      } catch (error) {
     setError(error)
      } finally {
        setIsLoading(false)
      }
    };
    fetchTrendingMovies();
  }, []);
  return (
    <div>
      <StyleTitle>Trending today</StyleTitle>
      {isLoading && <p>Loading...</p>}
      {error && <p>Something went wrong...</p>}
     { trendingMovies.length>0 && <MoviesList movies={trendingMovies}/>}
    </div>
  );
}