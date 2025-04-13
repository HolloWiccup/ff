import { UI_CLASS } from "./constants.js";

const FILL_HEART = "\u2665";
const EMPTY_HEART = "\u2661";

const weatherInfo = document.querySelector(`.${UI_CLASS.INFO}`);
const favouriteList = document.querySelector(`.${UI_CLASS.LIST}`);

const renderWeatherInfo = ({ city, isExist, addClick, removeClick }) => {
  const temp = document.createElement("h3");
  const img = document.createElement("img");
  const info = document.createElement("div");
  const name = document.createElement("span");
  const favouriteButton = document.createElement("button");
  const clickHandler = isExist ? removeClick : addClick;

  temp.textContent = `${city.temp}°`;
  img.src = city.iconUrl;
  name.textContent = city.name;
  favouriteButton.textContent = isExist ? FILL_HEART : EMPTY_HEART;
  favouriteButton.type = "button";
  favouriteButton.onclick = () => clickHandler(city);

  info.classList.add(UI_CLASS.WEATHER_INFO_FOOTER);
  info.append(name, favouriteButton);

  weatherInfo.textContent = "";
  weatherInfo.append(temp, img, info);
};

const createItemList = (city, removeClick) => {
  const body = document.createElement("li");
  const name = document.createElement("span");
  const removeButton = document.createElement("button");

  name.textContent = city.name;
  removeButton.type = "button";
  removeButton.textContent = "x";
  removeButton.onclick = () => removeClick(city);

  body.append(name, removeButton);
  return body;
};

const renderFavouriteList = ({ list, removeClick }) => {
  const listUi = list.map((item) => createItemList(item, removeClick));
  favouriteList.textContent = "";
  favouriteList.append(...listUi);
};

export { renderWeatherInfo, renderFavouriteList };
