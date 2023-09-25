import React, { useEffect, useState } from "react";
import { getMovieReviews } from '../../api';
import { useParams } from "react-router-dom";
import './Reviews.styled';
import { StyleTitle, StyleError, StyleReviewsList} from './Reviews.styled';


export default function Reviews({title}) {
  const [movieReviews, setMovieReviews] = useState([]);
  const { movieId } = useParams();
  const [isReviewsOpen, setIsReviewsOpen] = useState(false);

  useEffect(() => {
    const fetchReviews = async () => {
      try {
        if (movieId) {
          const reviews = await getMovieReviews(movieId);
          console.log(reviews);
          setMovieReviews(reviews);
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
      <StyleTitle onClick={toggleReviews}>{title}</StyleTitle>
      {isReviewsOpen && (movieReviews.length > 0 ? (
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
      ))}
    </div>
  );
      }  