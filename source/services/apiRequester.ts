import axios from 'axios';

const BASE_URL = 'https://localhost:3000/';

axios.defaults.headers.post['Content-Type'] = 'application/json';

/**
 * @description
 * Aplie base url for requests
 */
const apelie = axios.create({
  baseURL: BASE_URL,
});

/**
 * @description
 * baseUrl for testing requests
 */
const test = axios.create({
  baseURL: 'https://pokeapi.co/api/v2/',
});

const ApiRequester = {
  apelie,
  test,
};

export default ApiRequester;
