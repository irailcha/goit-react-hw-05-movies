import React, { useEffect, useState } from "react";
import { getMovieCredits } from '../api';
import { useParams } from "react-router-dom";

export default function MovieCredits() {
  const [movieCredits, setMovieCredits] = useState([]);
  const { movieId } = useParams();

  useEffect(() => {
    console.log('useEffect у MovieCredits працює');
    if (movieId) {
      getMovieCredits(movieId)
        .then((data) => {
            console.log(data.cast)
          setMovieCredits(data.cast);
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
      <h2>Cast</h2>
      <ul>
      {movieCredits && movieCredits.map(({id, name}) => (
          <li key={id}>{name}</li>
        ))}
      </ul>
    </div>
  );
}
