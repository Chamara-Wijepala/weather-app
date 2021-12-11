export default async function getData() {
    const data = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=London&units=metric&APPID=fe0d90bbf16db5ba4d69225da09c2c9c`);
    return data.json()
};