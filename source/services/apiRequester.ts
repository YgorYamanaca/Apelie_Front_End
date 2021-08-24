import axios from 'axios';

const BASE_URL = 'https://shrouded-springs-20631.herokuapp.com/api/';

axios.defaults.headers.post['Content-Type'] = 'application/json';

/**
 * @description
 * Aplie base url for requests
 */
const apelie = axios.create({
  baseURL: BASE_URL,
});

const ApiRequester = {
  apelie,
};

export default ApiRequester;
