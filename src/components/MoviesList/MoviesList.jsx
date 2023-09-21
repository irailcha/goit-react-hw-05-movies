import React from 'react';

const MoviesList = ({ movies, handleMovieClick }) => {
  return (
    <ul>
      {movies.map(({ id, title }) => (
        <li key={id} onClick={() => handleMovieClick(id)}>{title}</li>
      ))}
    </ul>
  );
}

export default MoviesList;