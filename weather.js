// weather.js
class WeatherApp {
    constructor(apiKey) {
        this.apiKey = apiKey;
    }

    async getCurrentWeather(location) {
        const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=${this.apiKey}`);
        const data = await response.json();
        return data;
    }

    async getForecast(location) {
        const response = await fetch(`https://api.openweathermap.org/data/2.5/forecast?q=${location}&appid=${this.apiKey}`);
        const data = await response.json();
        return data;
    }
}
