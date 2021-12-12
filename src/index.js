import './index.css';
import processData from './modules/fetch-data';
import {setInnerHtml, setImgSrc} from './modules/dom-functions';

const
locationName = document.getElementById('location-name'),
weatherDescription = document.getElementById('weather-description'),
weatherIcon = document.getElementById('weather-icon'),
temperature = document.getElementById('temperature'),
feelsLike = document.getElementById('feels-like'),
wind = document.getElementById('wind'),
humidity = document.getElementById('humidity');

processData()
.then(response => {
    setInnerHtml(locationName, response.name);
    setInnerHtml(weatherDescription, response.description);
    setImgSrc(weatherIcon, `https://openweathermap.org/img/wn/${response.icon}@2x.png`);
    setInnerHtml(temperature, `${response.temperature} °C`);
    setInnerHtml(feelsLike, `Feels Like ${response.feel} °C`);
    setInnerHtml(wind, `Wind Speed ${response.wind} m/s`);
    setInnerHtml(humidity, `Humidity ${response.humidity}%`);
})
.catch(err => {
    console.log(err)
});
