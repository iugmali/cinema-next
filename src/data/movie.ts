import {tmdb} from "../utils/myAxios";

export const getMovieDetails = async (id: string) => {
  try {
    return await tmdb.get(`/3/movie/${id}?language=pt-BR`);
  } catch (err) {
    console.error(err);
  }
}

export const getMovieVideos = async (id: string) => {
  try {
    return await tmdb.get(`/3/movie/${id}/videos?language=pt-BR&region=BR`);
  } catch (err) {
    console.error(err);
  }
}
