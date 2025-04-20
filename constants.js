const UI_CLASS = {
  FORM: "search-form",
  INFO: "info",
  LIST: "favourite-list",
  LI_NAME: "li-name",
  REMOVE_BUTTON: "remove-button",
  FAVOURITE_BUTTON: "favourite-button",
  WEATHER_INFO_FOOTER: "weather-info-footer",
  SMALL_ICON: "small-icon",
  MEDIUM_ICON: "medium-icon",
};

const UI_ELEMENTS = {
  WEATHER_INFO: document.querySelector(`.${UI_CLASS.INFO}`),
  SEARCH_FORM: document.querySelector(`.${UI_CLASS.FORM}`),
  FAVOURITE_LIST: document.querySelector(`.${UI_CLASS.LIST}`),
};

export { UI_CLASS, UI_ELEMENTS };
