import { useEffect, useState } from "react";
import axios from "axios";
import "./WeatherCard.css";

function WeatherCard() {

    const [weather,setWeather]=useState(null);

    useEffect(()=>{

        navigator.geolocation.getCurrentPosition(async(position)=>{

            const lat=position.coords.latitude;
            const lon=position.coords.longitude;

            const API_KEY = import.meta.env.VITE_OPENWEATHER_API_KEY;

const res = await axios.get(
`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&units=metric&appid=${API_KEY}`
);
            setWeather(res.data);

        });

    },[]);

    if(!weather) return null;

    const humidity=weather.main.humidity;

    let advice="";

    if(humidity>80){

        advice="⚠ High humidity increases fungal disease risk.";

    }

    else if(humidity>60){

        advice="Moderate humidity. Monitor crops regularly.";

    }

    else{

        advice="Dry conditions. Water plants carefully.";

    }

    return(

<div className="weather-card">

<h2>🌦 Current Weather</h2>

<p>🌡 Temperature : {weather.main.temp} °C</p>

<p>💧 Humidity : {weather.main.humidity}%</p>

<p>💨 Wind : {weather.wind.speed} m/s</p>

<div className="weather-alert">

{advice}

</div>

</div>

    );

}

export default WeatherCard;