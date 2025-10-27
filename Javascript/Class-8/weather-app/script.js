const form = document.querySelector('form');
const displaySection = document.querySelector('#display-result');

const BACKEND_BASE_URL = "https://api.openweathermap.org"

function buildAndGetWeatherCard(cityName, currentTemp) {
    return `
            <h2>Name : ${cityName}</h2>
            <h3>Current Temprature : ${currentTemp} <sup>&deg;</sup>C</h3>
    `
}

function displayData(weatherData) {
    const article = document.createElement('article');
    article.innerHTML = buildAndGetWeatherCard(weatherData.name, weatherData.main.temp);
    article.classList.add('weather-card');
    displaySection.append(article);
}

async function fetchWeatherData(cityName) {
    try {
        const res = await fetch(`${BACKEND_BASE_URL}/data/2.5/weather?q=${cityName}&units=metric&appid=4b5448027ff97eaa16f5bf8745f23492`);
        const data = await res.json();
        displayData(data);
    }
    catch (err) {
        console.error(err);
    }
}

form.addEventListener('submit', function (event) {
    event.preventDefault();
    const cityName = form.elements[0].value;
    if (!cityName) {
        alert('city name cannot be empty');
        return;
    }
    if (cityName && cityName.trim().length === 0) {
        alert('city name cannot be empty');
        return;
    }
    fetchWeatherData(cityName);
});