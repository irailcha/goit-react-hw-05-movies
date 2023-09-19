import React, {useState, useEffect} from "react";
import Searchbar from "components/Searchbar/Searchbar";
import {getSearchMovies} from '../api';

export default function Movies() {
  const [searchParams, setSearchParams] = useState({ query: '' });
  const [searchMovies, setSearchMovies] = useState([]);

  useEffect(() => {
    getSearchMovies(searchParams.query) 
      .then((data) => {
        setSearchMovies(data);
      })
      .catch((error) => {
        console.error(error);
      });
  }, [searchParams.query]);
  

  const handleSubmit = (value) => {
    
    setSearchParams({ query: value });
  };

  

  return (
    <div>
      <Searchbar onSubmit={handleSubmit} movies={searchMovies}/>
    </div>
  );
}




