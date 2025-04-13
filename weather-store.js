const defaultCity = {
  name: "Arh",
  temp: 15,
  iconUrl: "https://openweathermap.org/img/wn/10d@4x.png",
};

const weatherStoreEvents = {
  cityUpdated: "cityUpdated",
  favouritesUpdated: "favouritesUpdated",
};

const weatherStore = {
  LIST_STORAGE_KEY: "weather-favourite-list",
  LAST_STORAGE_KEY: "weather-last-city",
  lastCity: defaultCity,
  favouriteList: [],
  subscribes: {},
  events: weatherStoreEvents,
  update(event, data) {
    if (this.subscribes[event]) {
      this.subscribes[event].forEach((callback) => callback(data));
    }
  },
  init() {
    const city = localStorage.getItem(this.LAST_STORAGE_KEY);
    const cities = localStorage.getItem(this.LIST_STORAGE_KEY);

    if (city) {
      this.setLastCity(JSON.parse(city));
    } else {
      this.setLastCity(defaultCity);
    }
    if (cities) {
      this.favouriteList = JSON.parse(cities);
    }
  },

  getData(city) {
    const isExist = this.cityExist(city.name);
    const data = {
      city,
      list: this.favouriteList,
      isExist,
      removeClick: (obj) => this.removeCity(obj),
      addClick: (obj) => this.addCity(obj),
    };
    return data;
  },

  setLastCity(city) {
    this.lastCity = city;
    const json = JSON.stringify(city);
    localStorage.setItem(json, this.LAST_STORAGE_KEY);
    const data = this.getData(city);
    this.update(this.events.cityUpdated, data);
  },
  addCity(city) {
    this.favouriteList = [...this.favouriteList, city];
    const data = this.getData(city);
    this.update(this.events.favouritesUpdated, data);
  },
  removeCity(city) {
    const newList = this.favouriteList.filter(
      (item) => item.name !== city.name
    );
    this.favouriteList = newList;
    const data = this.getData(city);
    this.update(this.events.favouritesUpdated, data);
  },
  cityExist(cityName) {
    const result = this.favouriteList.find((item) => item.name === cityName);
    return result;
  },
  addSubscribes(event, callback) {
    if (!this.subscribes[event]) this.subscribes[event] = [];
    this.subscribes[event].push(callback);
  },
};

export { weatherStore };
