import axios from 'axios';

const API_KEY = 'ff16622aca1226a8209e8837e8690b86';
const ROOT_URL = `http://api.openweathermap.org/data/2.5/forecast?appid=${API_KEY}`;

export function fetchWeather(city) {
  const url = `${ROOT_URL}&q=${city},us`;
  const request = axios.get(url);

  return {
    type: types.FETCH_WEATHER,
    payload: request
  };
}
