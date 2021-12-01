import axios from 'axios';

const APELIE_BASE_URL = 'http://apelie-env.eba-agpnp369.sa-east-1.elasticbeanstalk.com/api/';
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
