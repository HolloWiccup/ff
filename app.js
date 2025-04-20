import { UI_CLASS } from "./constants.js";
import {
  renderWeatherInfo,
  renderFavouriteList,
  renderForecast,
} from "./render.js";
import { fetchForecast, fetchWeather } from "./weather-requests.js";
import { weatherStore } from "./weather-store.js";

const searchForm = document.querySelector(`.${UI_CLASS.FORM}`);
const weatherInfo = document.querySelector(`.${UI_CLASS.INFO}`);
const favouriteList = document.querySelector(`.${UI_CLASS.LIST}`);
const MIN_CITY_LENGTH = 2;

const render = () => {
  const city = weatherStore.currentCity;
  const list = weatherStore.favouriteList;

  // renderWeatherInfo(city, weatherStore.cityExist());
  renderForecast(city, weatherStore.cityExist());
  renderFavouriteList(list);
};

const getWeather = async (cityName, callback) => {
  const forecast = await fetchForecast(cityName);
  if (!forecast) return;

  weatherStore.setCurrentCity(forecast);

  renderForecast(forecast, weatherStore.cityExist());

  if (callback) callback();
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

const weatherInfoHandler = (e) => {
  if (!e.target.classList.contains(UI_CLASS.FAVOURITE_BUTTON)) return;
  const city = weatherStore.currentCity;
  const isExist = weatherStore.cityExist();
  isExist ? weatherStore.removeCity(city.name) : weatherStore.addCity(city);
  render();
};

const favouriteListHandler = (e) => {
  const target = e.target;
  if (target.classList.contains(UI_CLASS.FAVOURITE_BUTTON)) {
    const prevElement = target.previousElementSibling;
    weatherStore.removeCity(prevElement.textContent);
    render();
  }
  if (target.classList.contains(UI_CLASS.LI_NAME)) {
    getWeather(target.textContent, render);
  }
};

const init = () => {
  weatherStore.init();
  render();
};

// document.addEventListener("DOMContentLoaded", init, { once: true });
searchForm.addEventListener("submit", formHandler);
weatherInfo.addEventListener("click", weatherInfoHandler);
favouriteList.addEventListener("click", favouriteListHandler);
