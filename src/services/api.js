import axios from 'axios';

const api = axios.create({
  baseURL: 'http://167.172.254.115',
});

export default api;
