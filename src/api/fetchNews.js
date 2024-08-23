
import axios from 'axios';

const BASE_URL = "https://newsapi.org/v2/top-headlines";
const API_KEY = process.env.REACT_APP_NEWS_API;

const fetchNews = async () => {
    // console.log("Using API Key:", API_KEY);
    try {
        const { data } = await axios.get(BASE_URL, {
            params: {
                apiKey:API_KEY,
                sources: "techcrunch"
            },
        });
        return data;
    } catch (error) {
        console.error(error);
    }
};

export default fetchNews;