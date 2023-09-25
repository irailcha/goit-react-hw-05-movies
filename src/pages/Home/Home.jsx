import React, { useState, useEffect } from "react";
import { getTrendingMovies } from "../../api";
import MoviesList from "../../components/MoviesList/MoviesList"; 
import { useNavigate } from "react-router-dom";
import './Home.styled';
import { StyleTitle } from './Home.styled';

export default function Home() {
  const [trendingMovies, setTrendingMovies] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchTrendingMovies = async () => {
      try {
        const data = await getTrendingMovies();
        setTrendingMovies(data);
      } catch (error) {
        console.error(error);
      }
    };

    fetchTrendingMovies();
  }, []);

  const handleMovieClick = (stringMovieId) => {
    navigate(`/movies/${stringMovieId}`); 
  };

  return (
    <div>
      <StyleTitle>Trending today</StyleTitle>
      <MoviesList movies={trendingMovies} handleMovieClick={handleMovieClick}/>
    </div>
  );
}
