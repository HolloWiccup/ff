import { UI_CLASS } from "./constants.js";

const FILL_HEART = "\u2665";
const EMPTY_HEART = "\u2661";

const weatherInfo = document.querySelector(`.${UI_CLASS.INFO}`);
const favouriteList = document.querySelector(`.${UI_CLASS.LIST}`);

const renderWeatherInfo = (city, isExist) => {
  const temp = document.createElement("h3");
  const img = document.createElement("img");
  const info = document.createElement("div");
  const name = document.createElement("span");
  const favouriteButton = document.createElement("button");

  temp.textContent = `${city.temp}°`;
  img.src = city.iconUrl;

  name.textContent = city.name;
  favouriteButton.textContent = isExist ? FILL_HEART : EMPTY_HEART;
  favouriteButton.type = "button";
  favouriteButton.classList.add(UI_CLASS.FAVOURITE_BUTTON);

  info.classList.add(UI_CLASS.WEATHER_INFO_FOOTER);
  info.append(name, favouriteButton);

  weatherInfo.textContent = "";
  weatherInfo.append(temp, img, info);
};

const createForecastItem = (item) => {
  const li = document.createElement("li");
  const br = document.createElement("br");
  const date = document.createElement("h3");
  const temp = document.createElement("h3");
  const feels = document.createElement("h3");
  const img = document.createElement("img");

  date.textContent = item.date;
  temp.textContent = `Температура ${item.temp}`;
  feels.textContent = `Ощущается ${item.feels}`;
  img.src = item.iconUrl;
  img.classList.add(UI_CLASS.SMALL_ICON);

  li.append(br, date, temp, feels, img);

  return li;
};

const renderForecast = (forecast, isExist) => {
  const temp = document.createElement("h3");
  const feels = document.createElement("h3");
  const sunrise = document.createElement("h3");
  const sunset = document.createElement("h3");
  const img = document.createElement("img");
  const info = document.createElement("div");
  const name = document.createElement("span");
  const favouriteButton = document.createElement("button");
  const forecastList = document.createElement("ul");

  const currentTemp = forecast.list[0];

  temp.textContent = currentTemp.temp;
  feels.textContent = `Ощущается ${currentTemp.feels}`;
  sunrise.textContent = `Рассвет ${forecast.sunrise}`;
  sunset.textContent = `Закат ${forecast.sunset}`;
  img.src = currentTemp.iconUrl;
  img.classList.add(UI_CLASS.MEDIUM_ICON);
  name.textContent = forecast.name;
  favouriteButton.textContent = isExist ? FILL_HEART : EMPTY_HEART;
  favouriteButton.type = "button";
  favouriteButton.classList.add(UI_CLASS.FAVOURITE_BUTTON);

  info.classList.add(UI_CLASS.WEATHER_INFO_FOOTER);
  info.append(name, favouriteButton);

  const list = forecast.list
    .slice(1, 4)
    .map((item) => createForecastItem(item));
  forecastList.append(...list);

  weatherInfo.textContent = "";
  weatherInfo.append(temp, feels, sunrise, sunset, img, info, forecastList);
};

const createItemList = (city) => {
  const body = document.createElement("li");
  const name = document.createElement("span");
  const removeButton = document.createElement("button");

  name.textContent = city.name;
  name.classList.add(UI_CLASS.LI_NAME);
  removeButton.type = "button";
  removeButton.textContent = "x";
  removeButton.classList.add(UI_CLASS.FAVOURITE_BUTTON);

  body.append(name, removeButton);
  return body;
};

const renderFavouriteList = (list) => {
  const listUi = list.map((item) => createItemList(item));
  favouriteList.textContent = "";
  favouriteList.append(...listUi);
};

export { renderWeatherInfo, renderFavouriteList, renderForecast };
