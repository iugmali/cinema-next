import {tmdb} from "../utils/myAxios";

export const getTrendingMovies = async () => {
  try {
    return await tmdb.get('/3/trending/movie/week?language=pt-BR');
  } catch (err) {
    console.error(err);
  }
}

export const getTrendingTV = async () => {
  try {
    return await tmdb.get('/3/trending/tv/week?language=pt-BR');
  } catch (err) {
    console.error(err);
  }
}

export const getTrendingPeople = async () => {
  try {
    return await tmdb.get('/3/trending/person/week?language=pt-BR');
  } catch (err) {
    console.error(err);
  }
}
