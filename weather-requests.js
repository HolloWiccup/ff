const WEATHER_URL = "https://api.openweathermap.org/data/2.5/weather";
const FORECAST_URL = "https://api.openweathermap.org/data/2.5/forecast";

const API_KEY = "aefaf2ee38ea734b4f10c61ceafcc3cc";

const createUrl = (url, city) =>
  `${url}?q=${city}&APPID=${API_KEY}&units=metric&lang=ru`;

const createIconUrl = (iconId) =>
  `https://openweathermap.org/img/wn/${iconId}@4x.png`;

const getWeatherNormalize = async (city) => {
  const iconUrl = createIconUrl(city.weather[0].icon);

  const weatherNormalize = {
    name: city.name,
    temp: city.main.temp,
    iconUrl,
  };

  return weatherNormalize;
};

const getForecastNormalize = () => {};

const fetchWeather = async (nameCity) => {
  const url = createUrl(WEATHER_URL, nameCity);
  const res = await fetch(url).then((response) => response.json());
  if (res.cod != 200) return;
  return getWeatherNormalize(res);
};
const fetchForecast = async () => {};

export { fetchWeather, fetchForecast };
