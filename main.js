const searchBtn = document.getElementById('search-btn');
const locationInput = document.getElementById('location');
const locationName = document.getElementById('location-name');
const currentWeather = document.getElementById('current-weather');
const forecast = document.getElementById('forecast');

searchBtn.addEventListener('click', async () => {
    const location = locationInput.value.trim();
    if (location) {
        try {
            const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${location}&units=metric&appid=024db8ba053c47cc478d35ef92ac8954`);
            const data = await response.json();
            const currentTemp = data.main.temp;
            const forecastData = data.weather[0].description;
            locationName.textContent = data.name;
            currentWeather.textContent = `Current temperature: ${currentTemp}°C`;
            forecast.textContent = `Forecast: ${forecastData}`;
        } catch (error) {
            console.error(error);
        }
    }
});