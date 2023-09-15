export const API_URL = 'https://api.themoviedb.org/3/';

export const IMG_URL = 'https://image.tmdb.org/t/p/w500';

export const OPTIONS = {
  Authorization: `Bearer ${import.meta.env.VITE_ACCESS_TOKEN}`,
  'Content-Type': 'application/json',
};

export const POPULAR_MOVIES_ENDPOINT = `${API_URL}movie/top_rated?language=en-US&page=1`;
