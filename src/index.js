import './index.css';
import processData from './modules/fetch-data';
import setInnerHtml from './modules/dom-functions';

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
    setInnerHtml(weatherIcon, response.icon);
    setInnerHtml(temperature, response.temperature);
    setInnerHtml(feelsLike, response.feel);
    setInnerHtml(wind, response.wind);
    setInnerHtml(humidity, response.humidity);
})
.catch(err => {
    console.log(err)
});
