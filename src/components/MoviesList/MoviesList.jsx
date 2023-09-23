import React from 'react';
import './MovieList.styled';
import { StyleListMovie } from './MovieList.styled';


const MoviesList = ({ movies, handleMovieClick }) => {
  return (
    <ul>
      {movies.map(({ id, title }) => (
        <StyleListMovie key={id} onClick={() => handleMovieClick(id)}>{title}</StyleListMovie>
      ))}
    </ul>
  );
}

export default MoviesList;