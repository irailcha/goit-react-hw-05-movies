import React, {useState, useEffect} from "react";
import { useSearchParams } from "react-router-dom";
import Searchbar from "components/Searchbar/Searchbar";
import {SearchMovies} from '../../api';
import MoviesList from "../../components/MoviesList/MoviesList"; 


export default function Movies() {
  const [searchParams, setSearchParams] = useSearchParams();
  const [searchMovies, setSearchMovies] = useState([]);
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState(null)
  
  
  const query = searchParams.get('query') ?? '';

  useEffect(() => {
    if (query === "") return;
    setIsLoading(true)
    const fetchMovies = async () => {
      try {
        const data = await SearchMovies(query);
        setSearchMovies(data);
      } catch (error) {
        setError(error)
         } finally {
           setIsLoading(false)
         }
       };

    fetchMovies();
  }, [query]);

  const handleSubmit = (value) => {
    setSearchParams({ query: value });
  };

 

  return (
    <div>
      <Searchbar onSubmit={handleSubmit}/>
      {isLoading && <p>Loading...</p>}
      {error && <p>Something went wrong...</p>}
      {searchMovies.length > 0 && <MoviesList movies={searchMovies}/>}
    </div>
  );
}


