import React, { useEffect, useState } from "react";
import { MovieDetails as getMovieDetails} from '../../api';
import { useParams, Link, useLocation, Outlet} from "react-router-dom";
import Cast from "../Cast/Cast";
import Reviews from "../Reviews/Reviews";

import './MovieDetails.styled';
import { MovieDetailsStyle, MovieDataStyle, StyleInfo, StyleParaghraph, LinkStyle, StyleTitle} from './MovieDetails.styled';

export default function MovieDetails() {
  const [movieData, setMovieData] = useState(null);
  const { movieId } = useParams();
  
  const location = useLocation();
  const backLink = location.state?.from ?? '/';

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
      <LinkStyle to={backLink}>Go back</LinkStyle>
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
      <div>
      <StyleTitle>Additional information</StyleTitle> 
      <Link to={`/movies/${movieId}/cast`} ><Cast movieId={movieId} title="Cast" /></Link>
  <Link to={`/movies/${movieId}/reviews`} ><Reviews movieId={movieId} title="Movie Reviews" /></Link>
      <Outlet /> 
      </div>
    </div>
  );
}
