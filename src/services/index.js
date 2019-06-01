import { create } from 'apisauce';

const api = create({
  baseURL: process.env.API_URL,
  withCredentials: true
});

const start = () => api.get('/home');

export default {
  start
};
