import {getMovieDetails, getMovieVideos} from "../../../data/movie";
import {GetServerSideProps} from "next";
import MoviePage from "screens/MoviePage";

export default MoviePage;

export const getServerSideProps: GetServerSideProps = async (context) => {
  const id = context.params ? typeof context.params.id === "string" ? context.params.id : "12" : "12";

  let movie;
  let movieVideos;

  const movieResponse = await getMovieDetails(id);
  if (movieResponse) {
    movie = movieResponse.data;
  } else {
    movie = {};
  }

  const movieVideosResponse = await getMovieVideos(id);
  if (movieVideosResponse) {
    movieVideos = movieVideosResponse.data;
  } else {
    movieVideos = {};
  }

  return {
    props: {
      movie: movie
    }
  }
}
