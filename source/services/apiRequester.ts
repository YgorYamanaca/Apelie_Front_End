import axios from 'axios';

const BASE_URL = 'http://ec2-54-232-70-145.sa-east-1.compute.amazonaws.com:8080/api/';

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
