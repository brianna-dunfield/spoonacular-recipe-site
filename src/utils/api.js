import axios from 'axios';

const API_URL_SEARCH = import.meta.env.VITE_API_URL_SEARCH;
const API_KEY = import.meta.env.VITE_API_KEY;

export const getSearchRequest = (searchInput) => {
    console.log(`${API_URL_SEARCH}?apiKey=${API_KEY}&query=${searchInput}&addRecipeInformation=true`);
    return axios.get(`${API_URL_SEARCH}?apiKey=${API_KEY}&query=${searchInput}&addRecipeInformation=true`);
}