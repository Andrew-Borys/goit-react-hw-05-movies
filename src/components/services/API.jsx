import axios from 'axios';

axios.defaults.baseURL = 'https://api.themoviedb.org/3/';
const API_key = '87ba1964cd0d4ac84a7dd149ae2711fb';
const type = 'movie';

export const getTrending = async () => {
  const response = await axios.get(`trending/${type}/day?api_key=${API_key}`);

  return response.data.results;
};

export const getSearch = async search => {
  const responce = await axios.get(
    `${search}/${type}?api_key=${API_key}&language=en-US&page=1&include_adult=false`
  );
  return responce;
};

export const getDetails = async movie_id => {
  const response = await axios.get(
    `${type}/${movie_id}?api_key=${API_key}&language=en-US`
  );
  return response;
};

export const getCredits = async movie_id => {
  const responce = await axios.get(
    `${type}/${movie_id}/credits?api_key=${API_key}&language=en-US`
  );

  return responce;
};

export const getReviews = async movie_id => {
  const responce = await axios.get(
    `${type}/${movie_id}/reviews?api_key=${API_key}&language=en-US&page=1`
  );
  return responce;
};

console.log('Hello i am from API');
