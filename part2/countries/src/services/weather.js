import axios from 'axios';

const api_key = process.env.REACT_APP_WEATHER_API_KEY
const baseUrl=`https://api.openweathermap.org/data/2.5/weather?q=`
const unit='metric'

const getWeatherExample = (cityName, countryCode) =>{
    return axios.get(`${baseUrl}${cityName},${countryCode}&appid=${api_key}&units=${unit}`).then(response => response.data)
}

export default {getWeatherExample}