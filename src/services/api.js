import axios from 'axios';

export const instance = () =>
  axios.create({
    baseURL: process.env.REACT_APP_BASE_API,
    timeout: 5000,
  });

export const method = () => instance().post('method');
