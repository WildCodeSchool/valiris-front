import axios from 'axios';

const baseURL = process.env.REACT_APP_API_BASE_URL;
const API = axios.create({
  baseURL
});

export const defaultFetcher = (relativeUrl, options) => API(relativeUrl, options).then(res => res.data);

export default API;
