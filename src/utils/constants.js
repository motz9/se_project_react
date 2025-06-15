export const weatherOptions = [
  {
    day: true,
    condition: "clear",
    url: new URL("../assets/day/clear.svg", import.meta.url).href,
  },
  {
    day: true,
    condition: "few clouds",
    url: new URL("../assets/day/partly_cloudy.svg", import.meta.url).href,
  },
  {
    day: true,
    condition: "shower rain",
    url: new URL("../assets/day/rainy.svg", import.meta.url).href,
  },
  {
    day: true,
    condition: "thunderstorm",
    url: new URL("../assets/day/thunderstorm.svg", import.meta.url).href,
  },
  {
    day: true,
    condition: "snow",
    url: new URL("../assets/day/snowy.svg", import.meta.url).href,
  },
  {
    day: true,
    condition: "overcast clouds",
    url: new URL("../assets/day/cloudy", import.meta.url).href,
  },
  {
    day: false,
    condition: "clear",
    url: new URL("../assets/night/clear.svg", import.meta.url).href,
  },
  {
    day: false,
    condition: "few clouds",
    url: new URL("../assets/night/partly_cloudy.svg", import.meta.url).href,
  },
  {
    day: false,
    condition: "shower rain",
    url: new URL("../assets/night/rainy.svg", import.meta.url).href,
  },
  {
    day: false,
    condition: "thunderstorm",
    url: new URL("../assets/night/thunderstorm.svg", import.meta.url).href,
  },
  {
    day: false,
    condition: "snow",
    url: new URL("../assets/night/snowy.svg", import.meta.url).href,
  },
  {
    day: false,
    condition: "overcast clouds",
    url: new URL("../assets/night/cloudy", import.meta.url).href,
  },
];

export const defaultWeatherOptions = {
  day: {
    url: new URL("../assets/day/default.svg", import.meta.url).href,
  },
  night: {
    url: new URL("../assets/night/default.svg", import.meta.url).href,
  },
};

export const coordinates = {
  latitude: 42.893291,
  longitude: -93.215302,
};

export const APIkey = "3971e019797917027215a651842e14c0";
