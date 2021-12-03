import axios from 'axios';

const APELIE_BASE_URL = 'https://shrouded-springs-20631.herokuapp.com/api/';
const LOCALITY_BASE_URL = 'https://servicodados.ibge.gov.br/api/v1/localidades';

axios.defaults.headers.post['Content-Type'] = 'application/json';

/**
 * @description
 * Aplie base url for requests
 */
const apelie = axios.create({
  baseURL: APELIE_BASE_URL,
});

const locality = axios.create({
  baseURL: LOCALITY_BASE_URL,
});

const ApiRequester = {
  apelie,
  locality,
};

export default ApiRequester;
