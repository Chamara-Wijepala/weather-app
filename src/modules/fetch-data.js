async function getData(location, unit) {
    const data = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${location}&units=${unit}&APPID=fe0d90bbf16db5ba4d69225da09c2c9c`, {
        mode: 'cors',
    });
    return data.json()
};

export default async function processData(location, unit) {
    const data = await getData(location, unit)
    const processedData = {
        name: data.name,
        country: data.sys.country,
        description: data.weather[0].description,
        icon: data.weather[0].icon,
        temperature: Math.round(data.main.temp),
        feel: Math.round(data.main.feels_like),
        wind: data.wind.speed,
        humidity: data.main.humidity,
    };
    return processedData;
};