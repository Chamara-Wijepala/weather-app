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
humidity = document.getElementById('humidity'),
toggleUnits = document.getElementById('toggle-units'),
locationForm = document.getElementById('location-form'),
locationInput = document.getElementById('location-input'),
errorMessage = document.getElementById('error-message');

let unit = 'metric';
let unitSymbol = '°C';
let windSpeed = 'm/s';

toggleUnits.addEventListener('change', () => {
    toggleUnits.checked ? 
        (unit = 'imperial', unitSymbol = '°F', windSpeed = 'mph')
            :
        (unit = 'metric', unitSymbol = '°C', windSpeed = 'm/s');
    renderPage();
});

let location = 'montreal';

locationForm.addEventListener('submit', e => {
    e.preventDefault();
    location = locationInput.value;
    errorMessage.style.display = 'none';
    renderPage();
});

function renderPage() {
    processData(location, unit)
    .then(response => {
        setInnerHtml(locationName, `${response.name}, ${response.country}`);
        setInnerHtml(weatherDescription, response.description);
        setImgSrc(weatherIcon, `https://openweathermap.org/img/wn/${response.icon}@4x.png`);
        setInnerHtml(temperature, `${response.temperature} ${unitSymbol}`);
        setInnerHtml(feelsLike, `Feels Like ${response.feel} ${unitSymbol}`);
        setInnerHtml(wind, `Wind Speed ${response.wind} ${windSpeed}`);
        setInnerHtml(humidity, `Humidity ${response.humidity}%`);
    })
    .catch(err => {
        errorMessage.style.display = 'block';
    });
};

renderPage();