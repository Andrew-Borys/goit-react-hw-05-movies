import axios from 'axios';

axios.defaults.baseURL = 'https://api.themoviedb.org/3/';
const API_key = '87ba1964cd0d4ac84a7dd149ae2711fb';
const type = 'movie';

export const getTrending = async page => {
  const response = await axios.get(
    `trending/${type}/day?api_key=${API_key}&page=${page}`
  );
  return response.data;
};

export const getSearchQuery = async (query, page) => {
  const responce = await axios.get(
    `search/${type}?api_key=${API_key}&query=${query}&page=${page}`
  );
  return responce.data;
};

export const getDetails = async id => {
  const response = await axios.get(
    `${type}/${id}?api_key=${API_key}&language=en-US`
  );
  return response.data;
};

export const getCasts = async id => {
  const responce = await axios.get(
    `${type}/${id}/credits?api_key=${API_key}&language=en-US`
  );
  return responce.data;
};

export const getReviews = async id => {
  const responce = await axios.get(
    `${type}/${id}/reviews?api_key=${API_key}&language=en-US&page=1`
  );
  return responce.data;
};
