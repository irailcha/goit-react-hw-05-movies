import axios from "axios";

axios.defaults.baseURL = 'https://api.themoviedb.org/3';
const API_KEY = '05b76f31177459ddd363a4f40106d91c';

export const getTrendingMovies = async () => {
  const response = await axios.get(`/trending/all/day?api_key=${API_KEY}`);
  return response.data.results;
}

export const SearchMovies = async (query) => {
  
  const response = await axios.get(`/search/movie?api_key=${API_KEY}&query=${query}`);
  console.log(response)
  return response.data.results;
  
}



export const MovieDetails = async (movieId) => {
  
  const response = await axios.get(`/movie/${movieId}?api_key=${API_KEY}`);
  return response.data;
}

export const getMovieCredits = async (movieId) => {
  
  const response = await axios.get(`/movie/${movieId}/credits?api_key=${API_KEY}`);
  return response.data.cast;
}

export const getMovieReviews = async (movieId) => {
  
  const response = await axios.get(`/movie/${movieId}/reviews?api_key=${API_KEY}`);
  return response.data.results;
}


