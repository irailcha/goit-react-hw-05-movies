import React, {useState, useEffect} from "react";
import Searchbar from "components/Searchbar/Searchbar";
import {SearchMovies} from '../../api';
import MoviesList from "../../components/MoviesList/MoviesList"; 
import { useNavigate } from "react-router-dom";

export default function Movies() {
  const [searchParams, setSearchParams] = useState({ query: '' });
  const [searchMovies, setSearchMovies] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchMovies = async () => {
      try {
        const data = await SearchMovies(searchParams.query);
        setSearchMovies(data);
      } catch (error) {
        console.error(error);
      }
    };

    fetchMovies();
  }, [searchParams.query]);

  const handleSubmit = (value) => {
    setSearchParams({ query: value });
  };

  const handleMovieClick = (movieId) => {
    navigate(`/movies/${movieId}`); 
  };

  return (
    <div>
      <Searchbar onSubmit={handleSubmit}/>
      <MoviesList movies={searchMovies} handleMovieClick={handleMovieClick}/>
    </div>
  );
}


