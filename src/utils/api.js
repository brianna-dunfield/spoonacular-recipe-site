import axios from 'axios';


const API_URL_SEARCH = import.meta.env.VITE_API_URL_SEARCH;
const API_KEY = import.meta.env.VITE_API_KEY;
const API_BASE = import.meta.env.VITE_API_BASE;

export const getSearchRequest = (searchInput, cuisines) => {
    let axiosRequestUrl = `${API_URL_SEARCH}?apiKey=${API_KEY}&query=${searchInput}&addRecipeInformation=true&number=100`;
    if(cuisines.length > 0){
        axiosRequestUrl += '&cuisine='
        for(let i=0; i<cuisines.length; i++){
            axiosRequestUrl += `${cuisines[i]},`
        }
        axiosRequestUrl=axiosRequestUrl.slice(0, -1); 
    }
    return axios.get(axiosRequestUrl);
}

export const getRecipeInfo = (id) => {
    return axios.get(`https://api.spoonacular.com/recipes/${id}/information?apiKey=${API_KEY}`);
}