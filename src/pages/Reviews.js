import React, { useEffect, useState } from "react";
import { getMovieReviews } from '../api';
import { useParams } from "react-router-dom";

export default function Reviews() {
  const [movieReviews, setMovieReviews] = useState([]);
  const { movieId } = useParams();
  const [isReviewsOpen, setIsReviewsOpen] = useState(false);

  useEffect(() => {
    const fetchReviews = async () => {
      try {
        if (movieId) {
          const data = await getMovieReviews(movieId);
          setMovieReviews(data.results);
        }
      } catch (error) {
        console.error(error);
      }
    };

    fetchReviews();
  }, [movieId]);

  useEffect(() => {
    if (!movieId) return;
  }, [movieId]);

  const toggleReviews = () => {
    setIsReviewsOpen(!isReviewsOpen);
  }

  return (
    <div>
      <h2 onClick={toggleReviews}>Movie Reviews</h2>
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
