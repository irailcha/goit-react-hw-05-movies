import React from 'react';
import './MovieList.styled';
import { Link } from 'react-router-dom';
import { StyleListMovie } from './MovieList.styled';
import { useLocation } from 'react-router-dom';

const MoviesList = ({ movies}) => {
  const location = useLocation();
  return (
    <ul>
      {movies.map(({ id, title }) => (
        <StyleListMovie key={id}>
          <Link to={`/movies/${id}`} state={{ from: location}}>
            {title}
          </Link>
        </StyleListMovie>
      ))}
    </ul>
  );
}

export default MoviesList;
