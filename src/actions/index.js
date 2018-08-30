import axios from 'axios';  // This was added to the project. Axios is a library to assist in AJAX calls. It is a more lightweight library than JQUERY and performs just like the JQUERY AJAX method so preferred for this app.  Installed through npm by running npm install --save axios.

const API_KEY = 'e2e50071a5d07206d6526e8016875efd'; // Key was obtained from https://home.openweathermap.org/api_keys
const ROOT_URL = `https://api.openweathermap.org/data/2.5/forecast?appid=${API_KEY}` // URL obtained from https://home.openweathermap.org

export const FETCH_WEATHER = 'FETCH_WEATHER'; // We use a variable here instead of a string because this variable will reside with many reducers. If we wanted to change its value it is more simple to update this variable rather then update every reducer file.

export function fetchWeather(city) {
  const url = `${ROOT_URL}&q=${city},us`;
  const request = axios.get(url); //This reaches out to the url and returns a promise. The promise is then passed into the actions payload property.

  return {
    type: FETCH_WEATHER,
    payload: request
  };
}