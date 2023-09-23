import React, { useEffect, useState } from "react";
import { getMovieCredits } from '../api';
import { useParams } from "react-router-dom";

export default function Cast() {
  const [movieCredits, setMovieCredits] = useState([]);
  const { movieId } = useParams();
  const [isCreditsOpen, setIsCreditsOpen] = useState(false);


  useEffect(() => {
    const fetchMovieCredits = async () => {
      try {
        if (movieId) {
          const data = await getMovieCredits(movieId);
          console.log(data.cast);
          setMovieCredits(data.cast);
        }
      } catch (error) {
        console.error(error);
      }
    };

    fetchMovieCredits();
  }, [movieId]);

  useEffect(() => {
    if (!movieId) return;
  }, [movieId]);

  const toggleCredits = () => {
    setIsCreditsOpen(!isCreditsOpen);
  };


  return (
    <div>
      <h2 onClick={toggleCredits}>Cast</h2>
      {isCreditsOpen && (
        <ul>
          {movieCredits && movieCredits.length > 0 && movieCredits.map(({id, name}) => (
            <li key={id}>{name}</li>
          ))}
        </ul>
      )}
    </div>
  );
}

