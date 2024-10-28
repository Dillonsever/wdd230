document.addEventListener("DOMContentLoaded", () => {
    const temperature = parseFloat(document.getElementById("temperature").textContent);
    const windSpeed = parseFloat(document.getElementById("wind-speed").textContent);
    const windChillElement = document.getElementById("wind-chill");

    if (temperature <= 50 && windSpeed > 3.0) {
        const windChill = 35.74 + (0.6215 * temperature) - (35.75 * Math.pow(windSpeed, 0.16)) + (0.4275 * temperature * Math.pow(windSpeed, 0.16));
        windChillElement.textContent = `${windChill.toFixed(1)} °F`;
    } else {
        windChillElement.textContent = "N/A";
    }
});
