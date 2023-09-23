import React, { useEffect, useState } from "react";
import { MovieDetails as getMovieDetails } from '../api';
import { useParams, Link } from "react-router-dom";

import '../MovieDetails.styled';
import { MovieDetailsStyle, MovieDataStyle, StyleInfo, StyleParaghraph} from '../MovieDetails.styled';

export default function MovieDetails() {
  const [movieData, setMovieData] = useState(null);
  const { movieId } = useParams();
  

  useEffect(() => {
    const fetchMovieData = async () => {
      try {
        if (movieId) {
          const data = await getMovieDetails(movieId);
          setMovieData(data);
        }
      } catch (error) {
        console.error(error);
      }
    };

    fetchMovieData();
  }, [movieId]);

  const defaultImg = 'https://ireland.apollo.olxcdn.com/v1/files/0iq0gb9ppip8-UA/image;s=1000x700';



  return (
    <div>
      {movieData && (
        <MovieDetailsStyle>
          <img
            src={
              movieData.poster_path
                ? `https://image.tmdb.org/t/p/w500/${movieData.poster_path}`
                : defaultImg
            }
            width={250}
            alt="poster"
          />
          <MovieDataStyle>
            <h1>{movieData.title}</h1>
            <StyleParaghraph><StyleInfo>User score </StyleInfo>{movieData.vote_average}</StyleParaghraph>
            <StyleParaghraph><StyleInfo>Overview </StyleInfo>{movieData.overview}</StyleParaghraph>
            <StyleParaghraph><StyleInfo>Genres </StyleInfo>{movieData.genres.map((genre) => genre.name).join(", ")}</StyleParaghraph>
          </MovieDataStyle>
        </MovieDetailsStyle> 
      )}
          
          <Link to={`/movies/${movieId}/cast`} >Cast</Link>
      <Link to={`/movies/${movieId}/reviews`} >Reviews</Link>
    </div>
  );
}
