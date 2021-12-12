async function getData(unit) {
    const data = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=montreal&units=${unit}&APPID=fe0d90bbf16db5ba4d69225da09c2c9c`);
    return data.json()
};

export default async function processData(unit) {
    const data = await getData(unit)
    const processedData = {
        name: data.name,
        country: data.sys.country,
        description: data.weather[0].description,
        icon: data.weather[0].icon,
        temperature: data.main.temp,
        feel: data.main.feels_like,
        wind: data.wind.speed,
        humidity: data.main.humidity,
    };
    return processedData;
};