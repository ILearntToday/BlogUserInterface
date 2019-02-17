// @flow
import axios from 'axios';

const baseURL = 'http://localhost:8080/api/v1';

const fetch = axios.create({
  baseURL,
});

fetch.interceptors.response.use(
  response => response,

  error => Promise.reject(error),
);

export default fetch;
