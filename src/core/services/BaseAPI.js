import axios from 'axios';
import AppConfig from '../../config/AppConfig';

const instance = axios.create();

instance.defaults.baseURL = AppConfig.API.baseURL;

instance.interceptors.request.use(
  request => {
    return request;
  },
  error => {
    return Promise.reject(error);
  },
);

export default instance;
