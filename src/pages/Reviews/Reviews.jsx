import React, { useEffect, useState } from "react";
import { getMovieReviews } from '../../api';
import { useParams } from "react-router-dom";
import './Reviews.styled';
import { StyleError, StyleReviewsList, StyleTitle} from './Reviews.styled';


export default function Reviews({title}) {
  const [movieReviews, setMovieReviews] = useState([]);
  const { movieId } = useParams();
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState(null)

  useEffect(() => {
    const fetchReviews = async () => {
      if (!movieId) return;
      try {
        setIsLoading(true)
        if (movieId) {
          const reviews = await getMovieReviews(movieId);
          
          setMovieReviews(reviews);
        }
      }  catch (error) {
        setError(error)
         } finally {
           setIsLoading(false)
         }
       };

    fetchReviews();
  }, [movieId]);




  return (
    <div>
      <StyleTitle>{title}</StyleTitle>
     {isLoading && <p>Loading...</p>}
      {error && <p>Something went wrong...</p>}
      {movieReviews.length > 0 ? (
        <StyleReviewsList>
          {movieReviews.map(({ id, author, content }) => (
            <li key={id}>
              <h3>{author}</h3>
              <p>{content}</p>
            </li>
          ))}
        </StyleReviewsList>
      ) : (
        <StyleError>There are no reviews for the movie</StyleError>
      )}
    </div>
  );
      }  