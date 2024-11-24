const apiKey = "44d864d88d806ca77a293761d3c29fd2"; 
const city = "Fresno";
const state = "CA";
const country = "US";

async function getWeatherData() {
    try {
        const geoApiURL = `http://api.openweathermap.org/geo/1.0/direct?q=${city},${state},${country}&limit=1&appid=${apiKey}`;
        const geoData = await (await fetch(geoApiURL)).json();
        if (!geoData.length) throw new Error("Location not found");

        const { lat, lon } = geoData[0];

        const forecastApiURL = `https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&units=imperial&appid=${apiKey}`;
        const forecastData = await (await fetch(forecastApiURL)).json();

        const currentWeather = forecastData.list[0];
        document.getElementById("currentTemp").textContent = `${Math.round(currentWeather.main.temp)}°F`;
        document.getElementById("currentCondition").textContent = currentWeather.weather[0].description;
        const weatherIcon = document.getElementById("weatherIcon");
        weatherIcon.src = `https://openweathermap.org/img/wn/${currentWeather.weather[0].icon}@2x.png`;
        weatherIcon.alt = currentWeather.weather[0].description;
        weatherIcon.style.display = "block";
        
        const forecastDays = document.querySelectorAll(".forecast-item");
        const dailyForecasts = forecastData.list.filter(item => item.dt_txt.includes("12:00:00")).slice(0, 3);

        dailyForecasts.forEach((day, index) => {
            const date = new Date(day.dt * 1000).toLocaleDateString("en-US", { weekday: "long" });
            const temp = Math.round(day.main.temp);
            const condition = day.weather[0].description;
            const icon = day.weather[0].icon;

            const forecastDate = forecastDays[index].querySelector(".forecast-date");
            const forecastTemp = forecastDays[index].querySelector(".forecast-temp");
            const forecastCondition = forecastDays[index].querySelector(".forecast-condition");
            const forecastIcon = forecastDays[index].querySelector(".forecast-icon");

            forecastDate.textContent = date;
            forecastTemp.textContent = `${temp}°F`;
            forecastCondition.textContent = condition;
            forecastIcon.src = `https://openweathermap.org/img/wn/${icon}@2x.png`;
            forecastIcon.alt = condition;
            forecastIcon.style.display = "block";
        });
    } catch (error) {
        console.error("Error:", error.message);
    }
}

getWeatherData();
