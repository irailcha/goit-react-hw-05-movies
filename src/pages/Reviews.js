import React, { useEffect, useState } from "react";
import { getMovieCredits } from '../api';
import { useParams } from "react-router-dom";

export default function MovieReviews() {
  const [movieReviews, setMovieReviews] = useState([]);
  const { movieId } = useParams();

  useEffect(() => {
    if (movieId) {
      getMovieCredits(movieId)
        .then((data) => {
          setMovieReviews(data.results);
        })
        .catch((error) => {
          console.error(error);
        });
    } 
  }, [movieId]);

  useEffect(() => {
    if (!movieId) return;
    }, [movieId]);

  
  return (
    <div>
      <h2>Movie Reviews</h2>
      <ul>
        {movieReviews && movieReviews.map(({id, author, content}) => (
          <li key={id}>
            <h3>{author}</h3>
            <p>{content}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}
