const weatherStore = {
  LIST_STORAGE_KEY: "weather-favourite-list",
  LAST_STORAGE_KEY: "weather-last-city",
  currentCity: {},
  favouriteList: [],
  init() {
    const jsonCity = localStorage.getItem(this.LAST_STORAGE_KEY);
    const jsonCities = localStorage.getItem(this.LIST_STORAGE_KEY);
    if (jsonCity) this.currentCity = JSON.parse(jsonCity);
    if (jsonCities) this.favouriteList = JSON.parse(jsonCities);
  },
  saveFavouriteList() {
    const json = JSON.stringify(this.favouriteList);
    localStorage.setItem(this.LIST_STORAGE_KEY, json);
  },
  setCurrentCity(city) {
    this.currentCity = city;
    const json = JSON.stringify(city);
    localStorage.setItem(this.LAST_STORAGE_KEY, json);
  },
  addCity(city) {
    this.favouriteList = [...this.favouriteList, city];
    this.saveFavouriteList();
  },
  removeCity(cityName) {
    this.favouriteList = this.favouriteList.filter(
      (item) => item.name !== cityName
    );
    this.saveFavouriteList();
  },
  cityExist(city) {
    const cityName = city ? city.name : this.currentCity.name;
    return this.favouriteList.find((item) => item.name === cityName);
  },
};

export { weatherStore };
