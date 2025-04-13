import { UI_CLASS } from "./constants.js";
import { renderWeatherInfo, renderFavouriteList } from "./render.js";
import { fetchForecast, fetchWeather } from "./weather-requests.js";
import { weatherStore } from "./weather-store.js";

const searchForm = document.querySelector(`.${UI_CLASS.FORM}`);

const MIN_CITY_LENGTH = 2;

const getWeather = async (cityName, callback) => {
  const weather = await fetchWeather(cityName);
  if (!weather) return;

  weatherStore.setLastCity(weather);

  callback();
};

const formHandler = (event) => {
  event.preventDefault();

  const form = event.target;
  const input = form.elements["search"];
  const value = input.value;
  const callback = () => (input.value = "");

  if (value.trim().length < MIN_CITY_LENGTH) return;

  getWeather(value, callback);
};

const init = () => {
  weatherStore.addSubscribes(
    weatherStore.events.cityUpdated,
    renderWeatherInfo
  );
  weatherStore.addSubscribes(
    weatherStore.events.favouritesUpdated,
    renderWeatherInfo
  );
  weatherStore.addSubscribes(
    weatherStore.events.favouritesUpdated,
    renderFavouriteList
  );
};

init();
weatherStore.init();

searchForm.addEventListener("submit", formHandler);
