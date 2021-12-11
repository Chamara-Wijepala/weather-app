import './index.css';
import getData from './modules/fetch-data';
import setInnerHtml from './modules/dom-functions';

const
locationName = document.getElementById('location-name'),
weatherDescription = document.getElementById('weather-description'),
weatherIcon = document.getElementById('weather-icon'),
temperature = document.getElementById('temperature'),
feelsLike = document.getElementById('feels-like'),
wind = document.getElementById('wind'),
humidity = document.getElementById('humidity');

getData()
    .then(response => {
        setInnerHtml(locationName, response.name);
        setInnerHtml(weatherDescription, response.weather[0].description);
        setInnerHtml(weatherIcon, response.weather[0].icon);
        setInnerHtml(temperature, response.main.temp);
        setInnerHtml(feelsLike, response.main.feels_like);
        setInnerHtml(wind, response.wind.speed);
        setInnerHtml(humidity, response.main.humidity);
    });
