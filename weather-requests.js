const WEATHER_URL = "https://api.openweathermap.org/data/2.5/weather";
const FORECAST_URL = "https://api.openweathermap.org/data/2.5/forecast";

const API_KEY = "aefaf2ee38ea734b4f10c61ceafcc3cc";
const TO_SECONDS = 1000;

const createUrl = (url, city) =>
  `${url}?q=${city}&APPID=${API_KEY}&units=metric&lang=ru`;

const createIconUrl = (iconId) =>
  `https://openweathermap.org/img/wn/${iconId}@4x.png`;

const getWeatherNormalize = (city) => {
  const iconUrl = createIconUrl(city.weather[0].icon);

  return { name: city.name, temp: city.main.temp, iconUrl };
};

const getForecastItem = (item) => {
  const iconUrl = createIconUrl(item.weather[0].icon);
  return {
    temp: item.main.temp,
    feels: item.main.feels_like,
    iconUrl,
    date: item.dt * TO_SECONDS,
  };
};

const getForecastNormalize = (forecast) => {
  const list = forecast.list.slice(0, 4).map((item) => getForecastItem(item));
  const currentTemp = forecast.list[0];
  return {
    name: forecast.city.name,
    sunrise: forecast.city.sunrise * TO_SECONDS,
    sunset: forecast.city.sunset * TO_SECONDS,
    timezone: forecast.city.timezone,
    list,
  };
};

const fetchWeather = async (nameCity) => {
  const url = createUrl(WEATHER_URL, nameCity);
  const res = await fetch(url).then((response) => response.json());
  if (res.cod != 200) return;
  return getWeatherNormalize(res);
};
const fetchForecast = async (nameCity) => {
  const url = createUrl(FORECAST_URL, nameCity);
  const res = await fetch(url).then((response) => response.json());
  if (res.cod != 200) return;
  return getForecastNormalize(res);
};

export { fetchWeather, fetchForecast };
