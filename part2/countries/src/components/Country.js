import { useState, useEffect } from 'react'
import weatherServices from '../services/weather'

const Country = ({country}) => {

    const [weather, setWeather]=useState('')

    useEffect(() =>{
        weatherServices.getWeatherExample(country.capital, country.cca2)
        .then(
            response => {
                console.log(response);
                setWeather(response)
            }
        )
    }, []
    )
    if (!weather) {
        return null
    }

    return (
        <div>
            <h1>{country.name.common}</h1>
            <p>capital {country.capital}</p>
            <p>area {country.area}</p>
            <p>languages:</p>
            <ul>
                {
                    Object.entries(country.languages).map(([key,value]) => (
                        <li key={key}>{value}</li>
                    )
                    )
                }
            </ul>
            <span style={{fontSize:'100px'}}>{country.flag}</span>
            <h3>Weather in {country.capital}</h3>
            <p>temperature {weather.main.temp}</p>
            <img src={`https://openweathermap.org/img/wn/${weather.weather[0].icon}@2x.png`}></img>
            <p>wind {weather.wind.speed} m/s</p>
        </div>
    )
}

export default Country