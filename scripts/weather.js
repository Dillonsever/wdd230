const apiKey = "44d864d88d806ca77a293761d3c29fd2"; 
const city = "Fresno";
const state = "CA";
const country = "US";

async function getWeatherData() {
  try {

    const geoApiURL = `https://api.openweathermap.org/geo/1.0/direct?q=${city},${state},${country}&limit=1&appid=${apiKey}`;
    
    const geoData = await (await fetch(geoApiURL)).json();
    
    if (!geoData.length) throw new Error("Location not found");

    const { lat, lon } = geoData[0];
    const weatherApiURL = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&units=imperial&appid=${apiKey}`;
    const weatherData = await (await fetch(weatherApiURL)).json();

    document.getElementById("currentTemp").textContent = `${weatherData.main.temp}°F`;
    document.getElementById("currentCondition").textContent = weatherData.weather[0].description;
    document.getElementById("weatherIcon").src = `https://openweathermap.org/img/wn/${weatherData.weather[0].icon}@2x.png`;
    document.getElementById("weatherIcon").style.display = "block";
  } catch (error) {
    console.error("Error:", error.message);
  }
}

getWeatherData();
