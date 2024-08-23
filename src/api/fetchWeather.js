import axios from "axios";
const BASE_URL=" http://api.weatherapi.com/v1";
const API_KEY=process.env.REACT_APP_WEATHER_API;

export const fetchWeather=async(city="Haridwar")=>{
    // console.log("Using API Key:", API_KEY);
    try {
        const {data}= await axios.get(`${BASE_URL}/current.json`,{
            params:{
                key:API_KEY,
                q:city,
            }
        })
        // console.log(data)
        return data;
    } catch (error) {
        console.log(error);
    }
}