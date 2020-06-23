import axios from 'axios';

const baseURL = process.env.REACT_APP_API_BASE_URL;
const API = axios.create({
  baseURL
});

const placeLanguageHeaders = req => {
  const language = localStorage.getItem('lang');/* eslint-disable-line */
  if (language) {
    req.headers['accept-language'] = language;
  }
  return req;
};
API.interceptors.request.use(placeLanguageHeaders);

export const defaultFetcher = (relativeUrl, options) => API(relativeUrl, options).then(res => res.data);

export default API;
