import axios from 'axios';

axios.defaults.baseURL = 'https://api.themoviedb.org/3';

const API_KEY = '7b8246269bf45559415a2e61915a6972';

export const trendingMovies = async () => {
  const { data } = await axios.get(`/trending/all/day?api_key=${API_KEY}`);
  return data.results;
};
export const searchMovies = async query => {
  const { data } = await axios.get(
    `/search/movie?query=${query}&api_key=${API_KEY}`
  );
  return data.results;
};

export const movieWithId = async id => {
  const response = await axios.get(`/movie/${id}?api_key=${API_KEY}`);
  return response.data;
};

export const movieCast = async id => {
  const { data } = await axios.get(`/movie/${id}/credits?api_key=${API_KEY}`);
  return data.cast;
};

export const movieReviews = async id => {
  const { data } = await axios.get(`/movie/${id}/reviews?api_key=${API_KEY}`);
  return data.results;
};
