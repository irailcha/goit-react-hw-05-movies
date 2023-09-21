import React, { useEffect, useState } from "react";
import { MovieDetails as getMovieDetails } from '../api';
import { useParams } from "react-router-dom";
import Cast from './Cast';
import Reviews from './Reviews';
import { useNavigate } from "react-router-dom";

export default function MovieDetails() {
  const [movieData, setMovieData] = useState(null);
  const { movieId } = useParams();
  const navigate = useNavigate(); 

  useEffect(() => {
    console.log('useEffect у MovieCredits працює');
    if (movieId) {
      getMovieDetails(movieId)
        .then((data) => {
            console.log(data)
          setMovieData(data);
        })
        .catch((error) => {
          console.error(error);
        });
    } 
  }, [movieId]);

  const handleMovieClick = (movieId) => {
    navigate(`/movies/${movieId}`); 
  };

  const defaultImg = 'https://ireland.apollo.olxcdn.com/v1/files/0iq0gb9ppip8-UA/image;s=1000x700';
  
  return (
    <div>
      {movieData && (
        <div>
          <img
            src={
              movieData.poster_path
                ? `https://image.tmdb.org/t/p/w500/${movieData.poster_path}`
                : defaultImg
            }
            width={250}
            alt="poster"
          />
          <div>
            <h1>{movieData.title}</h1>
            <p>Огляд {movieData.overview}</p>
            <p>Жанри {movieData.genres.map((genre) => genre.name).join(", ")}</p>
          </div>
        </div> 
      )}
      <Cast movieId={movieId} handleMovieClick={handleMovieClick} />
      <Reviews movieId={movieId} />
    </div>
  );
}
