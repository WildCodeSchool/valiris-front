import axios from 'axios';
import localStorage from 'local-storage';

const baseURL = process.env.REACT_APP_API_BASE_URL;
const API = axios.create({
  baseURL
});

const placeLanguageHeaders = req => {
  const language = localStorage.getItem('lang');
  if (language) {
    req.headers['accept-language'] = language;
  }
  return req;
};
API.interceptors.request.use(placeLanguageHeaders);

export const defaultFetcher = (relativeUrl, options) => API(relativeUrl, options).then(res => res.data);

export default API;
