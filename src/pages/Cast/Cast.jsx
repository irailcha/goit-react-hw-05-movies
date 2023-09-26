import React, { useEffect, useState } from "react";
import { getMovieCredits } from '../../api';
import { useParams } from "react-router-dom";
import './Cast.styled';
import {StyleTCastList, StyleTCast, StyleError, StyleTitle} from './Cast.styled';



export default function Cast({title}) {
  const [movieCredits, setMovieCredits] = useState([]);
  const { movieId } = useParams();
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState(null)

  useEffect(() => {
    if (!movieId) return;
    const fetchCredits = async () => {
      try {
        if (movieId) {
          setIsLoading(true)
          const credits = await getMovieCredits(movieId);
          
          setMovieCredits(credits);
        }
      } catch (error) {
        setError(error)
         } finally {
           setIsLoading(false)
         }
       };

    fetchCredits();
  }, [movieId]);





  const baseURL = "https://image.tmdb.org/t/p/w200";

  return (
    <div>
      <StyleTitle>{title}</StyleTitle>
      {isLoading && <p>Loading...</p>}
      {error && <p>Something went wrong...</p>}
      {
        <StyleTCastList>
          {movieCredits.length > 0 ? (
            movieCredits.map(({ id, name, profile_path }) => (
              <StyleTCast key={id}>
                {name}
                <img
                  src={profile_path ? baseURL + profile_path : 'data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBxEHBhURBxMSEhISERQVEBIXFRASEhIQFREXFxUTFRcYHiggGCYlGx8VITEhJSkrLi4uGB8zODMtNygtLjcBCgoKBQUFDgUFDisZExkrKysrKysrKysrKysrKysrKysrKysrKysrKysrKysrKysrKysrKysrKysrKysrKysrK//AABEIAOEA4QMBIgACEQEDEQH/xAAaAAEAAwEBAQAAAAAAAAAAAAAAAgMEAQUH/8QAMRABAAEDAgQEBAQHAAAAAAAAAAECAxEhMQQSE0FRYXGBInKRsSMyQsEFFDM0RGOh/8QAFAEBAAAAAAAAAAAAAAAAAAAAAP/EABQRAQAAAAAAAAAAAAAAAAAAAAD/2gAMAwEAAhEDEQA/APtIAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA5M4jVyK4nuCQAAAAAAAAAAAAAAAAAAAAAAAAAAAIXp+BXRb5qcu8ROkJ2oxbgFfSmNjFUeK9yZxuCmm5PNiV7PTPNe92gAAAAAAAAAAAAAAAAAAAAAAHKvy6KZnO69RMaghfnExHkXbkxpHZHiJ/G9MOTdiqfiiP8AsAlTemmnEFuea5qjzUz2mPd2maaYnEzt4Anw+tz2aWfhI0loAAAAAAAAAAAAAAAAAAAAAAAV16VrEa6eaAUV2orqzE7ofy8/pmJaYt+KURjYGKbFUdkZomN4n6PQAU8LGLXuuAAAAAAAAAAAAAAAAAAAAAAGezxPVtzOMTEZx5YBoFM38W6ZxmaojEexRenqct2MTO2uYkFwrv3OlRnfWI+qN6/0rkRjfefDXALhTcv8l6KYjfGZ8M7HEX+jjEZ3z5RHcFwhcuxbt5n280aK66qvipxHrGY9gWiib1U3Zi3TE8uO+N10bag6AAAAAAAAAAAAAAAAAA8+miY4SKqd4iYmPGmZlvmcRqhReprt81M6RvuDPiaKbdWJmKaYifLNO6c1dfiKZozinMzOJj2XTciLfNnTGcuV3qbcRNc4zsCHGf0o+aPuhxFHUvzH+uceuWi5XFujNexzx1OXvjPsDHGaqIqq3m5T9IjCdVM3r9XLjERy6xPffDVM8sZns5buRcpzRsDJETXwtOIzNFWseOEqrvPep6c1bxzRicRC6niaKqsRPpvunzx1OXvjPsDHVNMcTX1JqjbGM+Hk20zmnRG7di1Hx9y3di7HwfuCYAAAAAAAAAAAAAAAAAKOMqxYxG9Wke6vh55b804mImImIny0lpqoiqYmrtt6k0RNcTO8bAxU6xFvwrnPyxqnxE9S9MYmcU407VT3aYtxFzmxr4u00RTMzT33Bku19T+H5nyifWJWz/fR8k/dZ0aeSYxpM5mNdy5YpuzmuM/UEOMqxZxG9UxCHDVYvVU4mM6xE7+Eros004xH5c430ylNETXmd4+wMEZjhYmrHLFWsfq3af8ANj5P3TjhqInSPvLtyxTdqzXGfqCvi881HLvz6LrfNj8TGfLKE2KZoiJjSNt0rdqLUfBGM+oJgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA/9k='}
                  width="200"
                  
                  alt="profile_path"
                />
              </StyleTCast>
            ))
          ) : (
            <StyleError>There is no cast list for this movie</StyleError>
          )}
        </StyleTCastList>
      }
    </div>
  );
          }  