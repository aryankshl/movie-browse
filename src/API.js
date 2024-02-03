import {
    SEARCH_BASE_URL,
    POPULAR_BASE_URL,
    API_URL,
    API_KEY
} from './config';

const apiSettings = {
    fetchMovies: async(searchTerm, page) => {
        const endpoint = searchTerm ?
            `${SEARCH_BASE_URL}${searchTerm}&page=${page}` :
            `${POPULAR_BASE_URL}&page=${page}`;
        return await (await fetch(endpoint)).json();
    },
    fetchMovie: async movieId => {
        const endpoint = `${API_URL}movie/${movieId}?api_key=${API_KEY}`;
        return await (await fetch(endpoint)).json();
    },
    fetchCredits: async movieId => {
        const creditsEndpoint = `${API_URL}movie/${movieId}/credits?api_key=${API_KEY}`;
        return await (await fetch(creditsEndpoint)).json();
    },
    push_login_details: async(username, email, password) => {
        return await (await fetch(`http://127.0.0.1:3001/register?username=${username}&email=${email}&password=${password}`)).json();
    },
    match_login_details: async(email, password) => {
        return await (await fetch(`http://127.0.0.1:3001/login?email=${email}&password=${password}`)).json();
    },
    increment_views: async email => {
        return await (await fetch(`http://127.0.0.1:3001/view_count?email=${email}`, { method: "POST" })).json();
    },
    fetch_views: async email => {
        return await (await fetch(`http://127.0.0.1:3001/view_count?email=${email}`)).json();
    }
};

export default apiSettings;