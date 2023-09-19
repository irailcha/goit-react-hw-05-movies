import React, {useState, useEffect} from "react";
import Searchbar from "components/Searchbar/Searchbar";
import {SearchMovies} from '../api';
import MoviesList from "../components/MoviesList/MoviesList"; 


export default function Movies() {
  const [searchParams, setSearchParams] = useState({ query: '' });
  const [searchMovies, setSearchMovies] = useState([]);

  useEffect(() => {
    
    SearchMovies(searchParams.query) 
      .then((data) => {
        setSearchMovies(data);
      })
      .catch((error) => {
        console.error(error);
      });
  }, [searchParams.query]);
  

  const handleSubmit = (value) => {
    console.log(value)
    setSearchParams({ query: value });
  };

  

  return (
    <div>
      <Searchbar onSubmit={handleSubmit}/>
      <MoviesList movies={searchMovies} />
    </div>
  );
}


