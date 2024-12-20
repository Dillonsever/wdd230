const API_KEY = '44d864d88d806ca77a293761d3c29fd2';
const CITY = 'Cozumel';
const UNITS = 'metric';

async function fetchWeather() {
  const response = await fetch(
    `https://api.openweathermap.org/data/2.5/weather?q=${CITY}&units=${UNITS}&appid=${API_KEY}`
  );
  const data = await response.json();

  const banner = document.getElementById('temperature-banner');
  const display = document.getElementById('weather-display');

  banner.textContent = `High Temp: ${data.main.temp_max}°C`;

  display.innerHTML = `
    <p><strong>${data.weather[0].main}:</strong> ${data.weather[0].description}</p>
    <p>Temp: ${data.main.temp}°C</p>
    <p>Humidity: ${data.main.humidity}%</p>
  `;
}

fetchWeather();
