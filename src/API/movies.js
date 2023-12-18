import { api } from './api';

export const getMovies = async () => {
  const { data } = await api(
    'trending/all/day?api_key=98fbc34178995378151e9b7ad6da8282'
  );

  return data;
};

export const getMovieByQuery = async query => {
  const { data } = await api(
    'search/movie?api_key=98fbc34178995378151e9b7ad6da8282',
    { params: { query } }
  );

  return data;
};

export const getMoviesById = async movie_id => {
  const { data } = await api(
    `movie/${movie_id}?api_key=98fbc34178995378151e9b7ad6da8282`
  );

  return data;
};
export const getReviews = async movie_id => {
  const { data } = await api(
    `movie/${movie_id}/reviews?api_key=98fbc34178995378151e9b7ad6da8282`
  );

  return data;
};

export const getCast = async movie_id => {
  const { data } = await api(
    `movie/${movie_id}/credits?api_key=98fbc34178995378151e9b7ad6da8282`
  );
  return data;
};
