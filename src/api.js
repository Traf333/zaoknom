import axios from 'axios';
//
// const client = axios.create({
//   baseURL: 'http://zaoknom-api.heroku.com',
//   timeout: 10000,
// });

axios.defaults.baseURL = 'http://zaoknom-api.heroku.com';

export function fetchArticles() {
  return axios.get('/articles')
}