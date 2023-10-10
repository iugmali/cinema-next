import axios from "axios";

export const tmdb = axios.create({
  baseURL: 'https://api.themoviedb.org',
  timeout: 1000,
  headers: {
    'Content-Type': 'application/json;charset=utf-8',
    'crossOrigin': 'true',
    'Authorization': `Bearer ${process.env['THEMOVIEDB_READ_ACCESS_TOKEN_4']}`
  }
});
